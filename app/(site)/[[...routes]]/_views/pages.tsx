import Link from "next/link"
import { page } from "@/actions/page"

import { buttonVariants } from "@/components/ui/button"
import { Blocks } from "@/components/blocks"
import { Hero } from "@/components/hero"
import { Paragraph } from "@/components/paragraph"
import { Title } from "@/components/title"

type Props = {
  slug: string
}
export const Pages: React.FC<Props> = async ({ slug = "home" }) => {
  const pageQuery = await page({
    where: {
      slug: {
        equals: slug,
      },
      private: {
        equals: false,
      },
    },
  })
  const hero = pageQuery?.docs?.[0]?.hero?.[0]
  const blocks = pageQuery?.docs?.[0]?.layout
  if (["members", "shop"].includes(slug)) {
    return (
      <div className="flex w-screen h-[100dvh] z-10 bg-black overflow-hidden">
        <div className="flex h-full bg-white flex-col justify-center flex-1 px-8 py-8 md:px-12 lg:flex-none lg:px-24">
          <div className="w-full mx-auto lg:max-w-6xl">
            <div className="max-w-xl lg:p-10">
              <div>
                <Title className="text-4xl ">Coming Soon!</Title>
                <Paragraph className="max-w-xl mt-4 text-lg tracking-tight text-gray-400">
                  We are working hard to bring this page to you. Stay tuned!
                </Paragraph>
              </div>
              <div className="flex gap-3 mt-10">
                <Link
                  href={"/home"}
                  className={buttonVariants({ size: "xl", rounded: "none" })}
                >
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full flex-1 hidden w-0 lg:block">
          <video
            className="absolute z-10 w-auto min-w-full min-h-full bg-white max-w-none"
            src="/video.mp4"
            loop
            autoPlay={true}
            muted
          >
            <source
              src="https://buio.lexingtonthemes.com/images/placeholders/gradient.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
  } else {
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
}
