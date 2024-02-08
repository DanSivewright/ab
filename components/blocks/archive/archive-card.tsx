import Image from "next/image"
import Link from "next/link"

import { makeImageUrl } from "@/lib/make-image-url"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ConditionalLink } from "@/components/conditional-link"
import { sectionVariants } from "@/components/section"
import { Title } from "@/components/title"

type Props = {
  imageUrl?: string
  alt?: string
  title: string
  date?: string
  slug: string
  tags?: string[]
  className?: string
  privated?: boolean
}
export const ArchiveCard: React.FC<Props> = ({
  imageUrl,
  privated,
  className,
  slug,
  alt,
  title,
  date,
  tags,
}) => {
  const colors = [
    "bg-[#EDEDED]",
    "bg-[#C9DAF0]",
    "bg-[#E08C5B]",
    "bg-[#41BD62]",
    "bg-[#FFF9D7]",
  ]

  const getRandomColor = (): string => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }
  return (
    <ConditionalLink
      condition={!!privated}
      href={slug}
      className={cn(
        className,
        "flex flex-col col-span-6 transition-all group md:col-span-4 lg:col-span-3"
      )}
    >
      <div
        className={cn(
          sectionVariants({ spacer: "p", size: "sm" }),
          `${getRandomColor()} relative flex aspect-[9/16] cursor-pointer overflow-hidden hover:rounded-xl`
        )}
      >
        {/* {privated && (
          <div className="absolute inset-0 bg-white/5 backdrop-blur z-10"></div>
        )} */}
        {imageUrl && (
          <Image
            src={imageUrl}
            fill
            className="object-cover"
            alt={alt as string}
          />
        )}
      </div>
      <Title
        level={2}
        showAs={6}
        className="cursor-pointer text-balance group-hover:underline"
      >
        {title}
      </Title>
      <div className="flex items-center gap-2">
        {date && (
          <Badge className="w-fit shrink-0" size="sm" variant="secondary">
            {!privated
              ? "TBA"
              : new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(date))}
          </Badge>
        )}
        {tags && tags.length > 0 ? (
          <>
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="w-fit shrink-0"
                size="sm"
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    </ConditionalLink>
  )
}
