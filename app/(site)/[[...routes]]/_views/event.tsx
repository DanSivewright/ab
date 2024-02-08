import Image from "next/image"
import { events } from "@/actions/events"

import { Category, Media } from "@/types/payload-types"
import { makeImageUrl } from "@/lib/make-image-url"
import serialize from "@/lib/serialize"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Blocks } from "@/components/blocks"
import { Grid } from "@/components/grid"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Paragraph } from "@/components/paragraph"
import { sectionVariants } from "@/components/section"
import { Title } from "@/components/title"

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
      {/* <pre>{JSON.stringify(event, null, 2)}</pre> */}
      <Paragraph
        className="pl-4 font-mono italic text-muted-foreground/70"
        size="lg"
      >
        Details
      </Paragraph>
      <ul className="flex flex-wrap items-center w-full gap-2 px-4 mt-2">
        <HoverCard openDelay={50}>
          <HoverCardTrigger asChild>
            <button
              className={cn(
                buttonVariants({
                  size: "xl",
                  rounded: "none",
                })
              )}
            >
              Book Now
            </button>
          </HoverCardTrigger>
          <HoverCardContent align="start" className="flex flex-col gap-2">
            <div className="w-full aspect-square rounded-lg relative overflow-hidden">
              <Image
                src={(event?.details?.image as Media).imagekit?.url!}
                alt={(event?.details?.image as Media)?.alt}
                fill
                className="object-cover"
              />
            </div>
            <Paragraph className="font-semibold">{event?.title}</Paragraph>
            <Badge variant={"secondary"} className="w-fit shrink-0" size="sm">
              Fee: R100
            </Badge>
          </HoverCardContent>
        </HoverCard>

        {event?.details?.categories?.length && event?.details?.categories
          ? (event?.details?.categories as Category[])?.map((category) => (
              <li
                key={category.id}
                className={cn(
                  buttonVariants({
                    size: "xl",
                    rounded: "none",
                    variant: "secondary",
                  }),
                  "md:last:rounded-r-full md:last:rounded-l-none"
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
