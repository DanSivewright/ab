import { page } from "@/actions/page"

import { Blocks } from "@/components/blocks"
import { Hero } from "@/components/hero"

type Props = {
  slug: string
}
export const Pages: React.FC<Props> = async ({ slug = "home" }) => {
  const pageQuery = await page({
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  const hero = pageQuery?.docs?.[0]?.hero?.[0]
  const blocks = pageQuery?.docs?.[0]?.layout
  return (
    <>
      {hero && <Hero key={hero?.id} content={hero} />}
      <Blocks
        disableTopPadding={!hero || hero.blockType === "short-heading-hero"}
        blocks={blocks ?? []}
      />
    </>
  )
}
