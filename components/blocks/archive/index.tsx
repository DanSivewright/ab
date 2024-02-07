import { Page } from "@/types/payload-types"
import serialize from "@/lib/serialize"
import { cn } from "@/lib/utils"
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
    <div
      className={cn("", {
        "px-2 mb-0 mx-auto w-full flex flex-col items-start gap-4 md:gap-6 lg:gap-8 xl:gap-10":
          block.populateBy === "selection" && block.renderAs === "grid",
      })}
    >
      {block.richText && (
        <article
          className={cn("text-balance", {
            "p-3": block.renderAs === "hscroll",
          })}
        >
          {serialize(block.richText as any)}
        </article>
      )}

      {block.populateBy === "collection" ? (
        <ArchiveByCollection showTotal options={block} />
      ) : null}
      {block.populateBy === "selection" ? (
        <ArchiveBySelection block={block} />
      ) : null}
    </div>
  )
}
