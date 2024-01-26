import { Page } from "@/types/payload-types"
import serialize from "@/lib/serialize"
import { Label } from "@/components/ui/label"
import { Section } from "@/components/section"

import { ArchiveByCollection } from "./archive-by-collection"
import { ArchiveBySelection } from "./archive-by-selection"

type Props = {
  block: NonNullable<Page["layout"]>[0] & { blockType: "archive" }
  paddingBottom?: boolean
  paddingTop?: boolean
  counter?: {
    totalDocs: number
  }
}
export const Archive: React.FC<Props> = ({
  block,
  paddingBottom,
  paddingTop,
}) => {
  return (
    <Section
      side={
        paddingBottom && paddingTop
          ? "y"
          : paddingBottom && !paddingTop
            ? "b"
            : !paddingBottom && paddingTop
              ? "t"
              : "y"
      }
      className="gutter mx-auto flex max-w-screen-2xl flex-col items-start gap-4 md:gap-6 lg:gap-8 xl:gap-10"
    >
      {block.richText && (
        <article className="text-balance">
          {serialize(block.richText as any)}
        </article>
      )}

      {block.populateBy === "collection" ? (
        <ArchiveByCollection showTotal options={block} />
      ) : null}
      {block.populateBy === "selection" ? (
        <ArchiveBySelection block={block} />
      ) : null}
    </Section>
  )
}
