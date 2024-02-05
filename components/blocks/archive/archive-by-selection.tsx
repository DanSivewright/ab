import {
  Category,
  Event as EventType,
  Media,
  Page,
} from "@/types/payload-types"
import { Grid } from "@/components/grid"

import { BentoBlock } from "../bento-block"
import { ArchiveCard } from "./archive-card"

type Props = {
  block: NonNullable<Page["layout"]>[0] & {
    blockType: "archive"
  }
  sort?: string
  showTotal?: boolean
}
export const ArchiveBySelection: React.FC<Props> = ({ block, showTotal }) => {
  if (block.renderAs === "grid") {
    return (
      <Grid gap="none" className="relative w-full gap-x-2 gap-y-8">
        {block.selectedDocs &&
          block.selectedDocs.length &&
          block?.selectedDocs.map((doc) => {
            const event = doc.value as EventType
            return (
              <ArchiveCard
                key={event.id}
                slug={`/events/${event.slug!}`}
                title={event.title}
                date={event.date}
                imageUrl={(event.image as Media).url!}
                alt={(event.image as Media).alt!}
                tags={["Event"]}
              />
            )
          })}
      </Grid>
    )
  }

  if (block.renderAs === "bento") {
    const items =
      block.selectedDocs && block.selectedDocs.length > 0
        ? block.selectedDocs?.map((item) => {
            const event = item.value as EventType
            return {
              title: event.title,
              imagePath: (event.image as Media).url!,
              categories:
                event.categories && event.categories.length
                  ? event.categories?.map((cat) => {
                      const category = cat as Category
                      return category.title as string
                    })
                  : null,
            }
          })
        : null
    return <BentoBlock items={items} />
  }
}
