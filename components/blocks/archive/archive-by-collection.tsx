import { archive } from "@/actions/archive"

import { Event, Media, Page } from "@/types/payload-types"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Grid } from "@/components/grid"
import { sectionVariants } from "@/components/section"

import { ArchiveCard } from "./archive-card"
import { ArchiveMediaCard } from "./archive-media-card"

type Props = {
  options: NonNullable<Page["layout"]>[0] & {
    blockType: "archive"
  }
  sort?: string
  showTotal?: boolean
}
export const ArchiveByCollection: React.FC<Props> = async ({
  options,
  sort,
  showTotal,
}) => {
  const archiveQuery = await archive({
    relationTo: options.relationTo!,
    depth: 1,
    limit: options.limit ?? 10,
    sort: sort ?? "-createdAt",
    where: {
      ...(options.categories && options.categories.length > 0
        ? {
            categories: {
              in: options.categories.map((cat) =>
                typeof cat === "object" && cat !== null ? cat.id : cat
              ),
            },
          }
        : {}),
    },
  })
  let indexStart =
    (archiveQuery?.page ? archiveQuery?.page - 1 : 1) * (options?.limit || 1) +
    1
  if (archiveQuery?.totalDocs && indexStart > archiveQuery?.totalDocs)
    indexStart = 0

  let indexEnd = (archiveQuery?.page || 1) * (options?.limit || 1)
  if (archiveQuery?.totalDocs && indexEnd > archiveQuery?.totalDocs)
    indexEnd = archiveQuery?.totalDocs

  if (options.renderAs === "hscroll") {
    return (
      <div className="flex w-screen overflow-x-scroll hide-scrollbar mb-3  px-3 gap-3">
        {options.relationTo === "events" ? (
          <>
            {archiveQuery?.docs.map((doc) => {
              return (
                <ArchiveCard
                  key={doc.id}
                  // @ts-ignore
                  date={doc?.details?.date}
                  // @ts-ignore
                  slug={`/${options.relationTo!}/${doc?.slug!}`}
                  title={doc.title}
                  // @ts-ignore
                  imageUrl={doc?.details?.image?.url}
                  // @ts-ignore
                  alt={doc?.details?.image?.alt}
                />
              )
            })}
          </>
        ) : null}
        {options.relationTo === "media" ? (
          <>
            {archiveQuery?.docs.map((doc, i) => {
              return (
                <ArchiveMediaCard
                  key={doc.id + i}
                  // @ts-ignore
                  imageUrl={doc.url!}
                  // @ts-ignore
                  alt={doc.alt!}
                  className="w-[400px] flex-none"
                />
              )
            })}
          </>
        ) : null}
      </div>
    )
  }
  return (
    <Grid
      gap="none"
      className={cn(
        sectionVariants({ side: "b" }),
        "relative w-full gap-x-2 gap-y-8 mt-3 px-3"
      )}
    >
      {showTotal && (
        <Label className="px-3 text-muted-foreground/60 absolute left-0 top-0 col-span-12 ">
          {(typeof archiveQuery?.totalDocs === "undefined" ||
            archiveQuery?.totalDocs === 0) &&
            "Search produced no results."}
          {typeof archiveQuery?.totalDocs !== "undefined" &&
            archiveQuery?.totalDocs > 0 &&
            `Showing ${indexStart} - ${indexEnd} of ${archiveQuery?.totalDocs} ${archiveQuery?.totalDocs > 1 ? `${options.relationTo}` : `${options.relationTo}`}`}
        </Label>
      )}
      {archiveQuery?.docs.map((doc) => {
        if (options.relationTo === "media") {
          return (
            <ArchiveMediaCard
              key={doc?.id}
              // @ts-ignore
              imageUrl={doc?.url!}
              // @ts-ignore
              alt={doc?.alt!}
              className="w-[400px] flex-none"
            />
          )
        }
        if (options.relationTo === "events") {
          return (
            <ArchiveCard
              key={doc.id}
              // @ts-ignore
              date={doc?.details?.date}
              // @ts-ignore
              slug={`/${options.relationTo!}/${doc?.slug!}`}
              title={doc.title}
              // @ts-ignore
              imageUrl={doc?.details?.image?.url}
              // @ts-ignore
              alt={doc?.details?.image?.alt}
            />
          )
        }
      })}
    </Grid>
  )
}
