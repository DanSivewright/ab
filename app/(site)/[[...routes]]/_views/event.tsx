import { events } from "@/actions/events"

import { Category } from "@/types/payload-types"
import serialize from "@/lib/serialize"
import { cn } from "@/lib/utils"
import { badgeVariants } from "@/components/ui/badge"
import { Blocks } from "@/components/blocks"
import { Grid } from "@/components/grid"
import { Hero } from "@/components/hero"
import { Paragraph } from "@/components/paragraph"
import { sectionVariants } from "@/components/section"

type Props = {
  slug: string
}
export const Event: React.FC<Props> = async ({ slug }) => {
  const eventQuery = await events({
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const event = eventQuery?.docs?.[0]
  const hero = event?.content?.hero?.[0]
  const blocks = event?.content?.layout
  return (
    <>
      {hero && <Hero key={hero?.id} content={hero} />}

      <ul
        className={cn(
          sectionVariants({ side: "t", size: "sm" }),
          "w-full px-4 flex items-center gap-2 flex-wrap"
        )}
      >
        <Paragraph
          className="w-full font-mono italic text-muted-foreground/70"
          size="lg"
        >
          Categories
        </Paragraph>
        {event?.details?.categories?.length && event?.details?.categories
          ? (event?.details?.categories as Category[])?.map((category) => (
              <li
                key={category.id}
                className={cn(
                  badgeVariants({ size: "humungous", variant: "secondary" }),
                  ""
                )}
              >
                {category.title}
              </li>
            ))
          : null}
      </ul>
      <Grid gap="none" className={cn(sectionVariants({ side: "t" }))}>
        {serialize(
          event?.content.description as any,
          "col-span-12 md:col-span-7 md:col-start-6 px-3 md:pl-0 md:pr-24",
          "col-span-12 mb-3 mt-8 md:mb-0 md:mt-16 md:col-span-8 md:col-start-5 aspect-[1/0.8]",
          "pr-0 md:pr-24 md:pb-24"
        )}
      </Grid>
      <Blocks
        disableTopPadding={!hero || hero.blockType === "short-heading-hero"}
        blocks={blocks ?? []}
      />
    </>
  )
}
