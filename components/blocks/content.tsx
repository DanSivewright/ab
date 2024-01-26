import { Page } from "@/types/payload-types"
import serialize from "@/lib/serialize"
import { cn } from "@/lib/utils"

import { CMSLink } from "../cms-link"
import { Grid, gridVariants } from "../grid"
import { Section, sectionVariants } from "../section"

type Props = {
  block: NonNullable<Page["layout"]>[0] & { blockType: "content" }
  paddingBottom?: boolean
  paddingTop?: boolean
}
export const Content: React.FC<Props> = ({
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
      className={cn("gutter", {
        "bg-foreground text-background": block.invertBackground,
        "bg-background text-foreground": !block.invertBackground,
      })}
    >
      {/* sectionVariants({ size: "sm", className: "text-balance" }), */}
      <Grid
        className={cn(
          sectionVariants({ spacer: "p", size: "sm" }),
          "gutter mx-auto max-w-screen-2xl"
        )}
      >
        {block.columns?.map((col, index) => (
          <div
            key={col.id}
            className={cn("text-balance", {
              "col-span-4": col.size === "oneThird",
              "col-span-8": col.size === "twoThirds",
              "col-span-12": col.size === "full",
              "col-span-6": col.size === "half",
            })}
          >
            {serialize(col.richText as any)}
            {col.enableLink && col.link ? (
              <CMSLink className="mt-4" link={col.link} />
            ) : null}
          </div>
        ))}
      </Grid>
    </Section>
  )
}
