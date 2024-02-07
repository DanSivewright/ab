import { Page } from "@/types/payload-types"
import { cn } from "@/lib/utils"

import { CMSLink } from "../cms-link"
import { gridVariants } from "../grid"
import { Section } from "../section"
import { Title } from "../title"

type Props = {
  block: NonNullable<Page["layout"]>[0] & { blockType: "cta-text-block" }
  // link: {
  //   type?: ("reference" | "custom") | null
  //   newTab?: boolean | null
  //   size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
  //   appearance?:
  //     | ("secondary" | "ghost" | "link" | "destructive" | "default")
  //     | null

  //   reference?: {
  //     relationTo: "pages"
  //     value: string | Page
  //   } | null
  //   url?: string | null
  //   label: string
  // }
  className?: string
  // href: string
  // label: string
}
export const CTATextBlock: React.FC<Props> = ({ block }) => {
  return (
    <Section
      className={cn(gridVariants({ gap: "none" }), "gutter", {
        "bg-foreground text-background": block.invertBackground,
      })}
      spacer="p"
    >
      <div
        className={cn("col-span-6", {
          "col-start-7": block.position === "right",
        })}
      >
        <Title level={3} showAs={1} className="text-balance">
          {block.text}
        </Title>
        <CMSLink link={block.link} />
        {/* <Link
          href={href}
          className={buttonVariants({
            variant: "secondary",
            size: "jumbo",
            rounded: "full",
          })}
        >
          {label}
        </Link> */}
      </div>
    </Section>
  )
}
