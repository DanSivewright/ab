import { page } from "@/actions/page"

import { Blocks } from "@/components/blocks"
import { Hero } from "@/components/hero"

type Props = {
  params: {
    routes: string[]
  }
}
const Page: React.FC<Props> = async ({ params: { routes } }) => {
  const pageQuery = await page({
    where: {
      slug: {
        equals: routes?.[0] ?? "home",
      },
    },
  })
  // there should only be one
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
export default Page
