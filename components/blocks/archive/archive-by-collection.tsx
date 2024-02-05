import { archive } from "@/actions/archive"

import { Page } from "@/types/payload-types"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Grid } from "@/components/grid"
import { sectionVariants } from "@/components/section"

import { ArchiveCard } from "./archive-card"

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
        return (
          <ArchiveCard
            key={doc.id}
            // @ts-ignore
            date={doc?.date}
            slug={`/${options.relationTo!}/${doc.slug!}`}
            title={doc.title}
            // @ts-ignore
            imageUrl={doc?.image?.url}
            // @ts-ignore
            alt={doc?.image?.alt}
          />
        )
      })}
    </Grid>
  )
}
