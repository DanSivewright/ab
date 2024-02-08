import {
  Category,
  Event as EventType,
  Media,
  Page,
} from "@/types/payload-types"
import { Grid } from "@/components/grid"

import { BentoBlock } from "../bento-block"
import { ArchiveCard } from "./archive-card"
import { ArchiveMediaCard } from "./archive-media-card"

type Props = {
  block: NonNullable<Page["layout"]>[0] & {
    blockType: "archive"
  }
  sort?: string
  showTotal?: boolean
}
export const ArchiveBySelection: React.FC<Props> = ({ block, showTotal }) => {
  if (block.renderAs === "hscroll") {
    return (
      <div className="flex w-screen overflow-x-scroll hide-scrollbar mb-3  px-3 gap-3">
        {block.selectedDocs &&
          block.selectedDocs.length &&
          block?.selectedDocs.map((doc, i) => {
            if (block.relationTo === "media") {
              const media = doc.value as Media
              return (
                <ArchiveMediaCard
                  key={media.id + i}
                  imageUrl={(media as Media).imagekit?.url!}
                  alt={media.alt!}
                  className="w-[400px] flex-none"
                />
              )
            } else if (block.relationTo === "events") {
              const event = doc.value as EventType
              return (
                <ArchiveCard
                  key={event.id}
                  slug={`/events/${event.slug!}`}
                  className="w-[400px] flex-none"
                  title={event.title}
                  // @ts-ignore
                  date={event.date}
                  // @ts-ignore
                  imageUrl={(event.image as Media)?.imagekit?.url!}
                  // @ts-ignore
                  alt={(event.image as Media)?.alt!}
                  tags={["Event"]}
                />
              )
            }
          })}
      </div>
    )
  }

  if (block.renderAs === "grid") {
    return (
      <Grid gap="none" className="relative w-full gap-x-2 gap-y-8">
        {block.selectedDocs &&
          block.selectedDocs.length &&
          block?.selectedDocs.map((doc) => {
            if (block.relationTo === "media") {
              const event = doc.value as Media
              return (
                <ArchiveMediaCard
                  key={event.id}
                  imageUrl={event.imagekit?.url!}
                  alt={event.alt!}
                />
              )
            } else if (block.relationTo === "events") {
              const event = doc.value as EventType
              return (
                <ArchiveCard
                  key={event.id}
                  slug={`/events/${event.slug!}`}
                  title={event.title}
                  // @ts-ignore
                  date={event.date}
                  // @ts-ignore
                  imageUrl={(event.image as Media).imagekit?.url!}
                  // @ts-ignore
                  alt={(event.image as Media).alt!}
                  tags={["Event"]}
                />
              )
            }
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
              // @ts-ignore
              href: !item.value?.private ? `/events/${item.value?.slug}` : null,
              title: event.title,
              imagePath: (event?.details?.image as Media).imagekit?.url!,
              categories:
                event?.details?.categories && event?.details?.categories.length
                  ? event?.details?.categories?.map((cat) => {
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
