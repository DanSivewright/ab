import Image from "next/image"

import { Media as MediaType, Page } from "@/types/payload-types"
import { makeImageUrl } from "@/lib/make-image-url"

import { Section } from "../section"
import { Badge } from "../ui/badge"

type Props = {
  block: NonNullable<Page["layout"]>[0] & { blockType: "media-block" }
  paddingBottom?: boolean
  paddingTop?: boolean
}
export const Media: React.FC<Props> = ({
  block,
  paddingBottom,
  paddingTop,
}) => {
  const getRatio = (ratio: string) => {
    switch (ratio) {
      case "aspect-auto":
        return "aspect-auto"
      case "aspect-video":
        return "aspect-video"
      case "aspect-square":
        return "aspect-square"
      default:
        return "aspect-auto"
    }
  }
  if (block.position === "fullscreen") {
    return (
      <Section
        className={`relative w-screen overflow-hidden ${getRatio(block.ratio ?? "aspect-auto")}`}
        side={
          paddingBottom && paddingTop
            ? "y"
            : paddingBottom && !paddingTop
              ? "b"
              : !paddingBottom && paddingTop
                ? "t"
                : "y"
        }
      >
        <Image
          src={makeImageUrl((block.media as MediaType).url!)}
          alt={(block.media as MediaType).alt}
          className="object-cover"
          fill
        />
        <Badge className="absolute bottom-4 left-4 z-10">
          {(block.media as MediaType).alt}
        </Badge>
      </Section>
    )
  } else {
    return (
      <Section
        className={`gutter relative mx-auto w-full max-w-screen-2xl overflow-hidden ${getRatio(block.ratio ?? "aspect-auto")}`}
        side={
          paddingBottom && paddingTop
            ? "y"
            : paddingBottom && !paddingTop
              ? "b"
              : !paddingBottom && paddingTop
                ? "t"
                : "y"
        }
      >
        <div className="relative size-full overflow-hidden rounded-lg">
          <Image
            src={makeImageUrl((block.media as MediaType).url!)}
            alt={(block.media as MediaType).alt}
            className="object-cover"
            fill
          />
          <Badge className="absolute bottom-4 left-4 z-10">
            {(block.media as MediaType).alt}
          </Badge>
        </div>
      </Section>
    )
  }
}
