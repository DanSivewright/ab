import Link from "next/link"

import { cn } from "@/lib/utils"

import { gridVariants } from "../grid"
import { Section } from "../section"
import { Title } from "../title"
import { Button, buttonVariants } from "../ui/button"

type Props = {
  text: string
  href: string
  label: string
}
export const CTATextBlock: React.FC<Props> = ({ text, href, label }) => {
  return (
    <Section className={cn(gridVariants({ gap: "none" }), "gutter")} side="b">
      <div className="col-span-6 col-start-7">
        <Title level={3} showAs={1} className="text-balance">
          {text}
        </Title>
        <Link
          href={href}
          className={buttonVariants({
            variant: "secondary",
            size: "jumbo",
            rounded: "full",
          })}
        >
          {label}
        </Link>
      </div>
    </Section>
  )
}
