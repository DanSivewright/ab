import { Page } from "@/types/payload-types"

import { ImageHero } from "../hero/image-hero"
import { ShortHeadingHero } from "../hero/short-heading-hero"
import { Archive } from "./archive"
import { BentoBlock } from "./bento-block"
import { Content } from "./content"
import { CTA } from "./cta"
import { CTATextBlock } from "./cta-text-block"
import { Media } from "./media"

type Props = {
  disableTopPadding?: boolean
  blocks: Page["layout"]
}
export const Blocks: React.FC<Props> = ({ disableTopPadding, blocks }) => {
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (!hasBlocks) return null
  return (
    <>
      {blocks.map((block, index) => {
        const { blockName, blockType } = block
        const blockIsInverted =
          "invertBackground" in block && blockType !== "cta"
            ? block.invertBackground
            : false
        const prevBlock = blocks[index - 1]
        const prevBlockInverted =
          prevBlock &&
          "invertBackground" in prevBlock &&
          prevBlock?.invertBackground

        const isPrevSame =
          Boolean(blockIsInverted) === Boolean(prevBlockInverted)

        let paddingTop = true
        let paddingBottom = true

        if (prevBlock && isPrevSame) {
          paddingTop = false
        }

        if (index === blocks.length - 1) {
          paddingBottom = true
        }

        if (disableTopPadding && index === 0) {
          paddingTop = false
        }

        switch (blockType) {
          case "cta":
            return (
              <CTA
                paddingTop={paddingTop}
                paddingBottom={paddingBottom}
                key={block.id}
                block={block}
              />
            )

          case "content":
            return (
              <Content
                paddingTop={paddingTop}
                paddingBottom={paddingBottom}
                key={block.id}
                block={block}
              />
            )

          case "image-hero":
            return (
              <ImageHero
                paddingTop={paddingTop}
                paddingBottom={paddingBottom}
                key={block.id}
                content={block}
              />
            )

          case "short-heading-hero":
            return <ShortHeadingHero key={block.id} content={block} />
          case "archive":
            return (
              <Archive
                paddingTop={paddingTop}
                paddingBottom={paddingBottom}
                key={block.id}
                block={block}
              />
            )
          case "media-block":
            return <Media key={block.id} block={block} />

          case "bento-block":
            return <BentoBlock items={block.items} />

          case "cta-text-block":
            return (
              <CTATextBlock
                text={block.text}
                href={"/"}
                label={block.link.label}
              />
            )

          default:
            // return <pre>{JSON.stringify(block, null, 3)}</pre>
            return null
        }
      })}
    </>
  )
}
