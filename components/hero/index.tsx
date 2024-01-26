import { Page } from "@/types/payload-types"

import { ImageHero } from "./image-hero"
import { MinimalHero } from "./minimal-hero"
import { ShortHeadingHero } from "./short-heading-hero"

type Props = {
  content: NonNullable<Page["hero"]>[0]
}
export const Hero: React.FC<Props> = ({ content }) => {
  if (content.blockType === "short-heading-hero") {
    return <ShortHeadingHero content={content} />
  }

  if (content.blockType === "image-hero") {
    return <ImageHero content={content} />
  }

  if (content.blockType === "minimal") {
    return <MinimalHero text={content.title} key={content.id} />
  }
}
