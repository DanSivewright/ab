import Image from "next/image"
import Link from "next/link"

import { makeImageUrl } from "@/lib/make-image-url"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { sectionVariants } from "@/components/section"
import { Title } from "@/components/title"

type Props = {
  imageUrl?: string
  alt?: string
  className?: string
}
export const ArchiveMediaCard: React.FC<Props> = ({
  imageUrl,
  alt,
  className,
}) => {
  return (
    <div
      className={cn(
        className,
        "relative aspect-[9/16] flex flex-col col-span-6 overflow-hidden transition-all hover:rounded-xl group md:col-span-4 lg:col-span-3"
      )}
    >
      {imageUrl && (
        <Image
          src={imageUrl as string}
          fill
          className="object-cover"
          alt={alt as string}
        />
      )}
    </div>
  )
}
