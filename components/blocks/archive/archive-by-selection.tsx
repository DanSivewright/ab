import { Event as EventType, Media, Page } from "@/types/payload-types"
import { Grid } from "@/components/grid"

import { ArchiveCard } from "./archive-card"

type Props = {
  block: NonNullable<Page["layout"]>[0] & {
    blockType: "archive"
  }
  sort?: string
  showTotal?: boolean
}
export const ArchiveBySelection: React.FC<Props> = ({ block, showTotal }) => {
  return (
    <Grid gap="none" className="relative w-full gap-x-2 gap-y-8">
      {block.selectedDocs &&
        block.selectedDocs.length &&
        block?.selectedDocs.map((doc) => {
          if (doc.relationTo === "pages") {
            const page = doc.value as Page

            return (
              <ArchiveCard
                //
                key={page.id}
                slug={page.slug!}
                title={page.title}
                tags={["Page"]}
              />
            )
          }
          if (doc.relationTo === "events") {
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
          }
        })}
    </Grid>
  )
}
