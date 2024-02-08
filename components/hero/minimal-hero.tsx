import Image from "next/image"

import { makeImageUrl } from "@/lib/make-image-url"
import { Title } from "@/components/title"

type Props = {
  imageUrl?: string | undefined
  text: string
}

export const MinimalHero: React.FC<Props> = ({ text, imageUrl }) => {
  const parts = text.split(/(\[[^\]]+\])/)
  if (!imageUrl) {
    return (
      <Title showAs={2} className="text-balance px-4 pt-[45dvh]">
        {parts.map((part, index) => {
          if (part.startsWith("[") && part.endsWith("]")) {
            return (
              <span
                key={`${index}-${part}`}
                className="text-muted-foreground/50"
              >
                {part.slice(1, -1)}{" "}
              </span>
            )
          }
          return part + " "
        })}
      </Title>
    )
  } else {
    return (
      <>
        <div className="w-screen h-[45dvh] relative overflow-hidden bg-zinc-300">
          <Image
            alt="Event cover image"
            src={imageUrl}
            fill
            className="object-cover"
          />
        </div>
        <Title showAs={2} className="px-4 text-balance">
          {parts.map((part, index) => {
            if (part.startsWith("[") && part.endsWith("]")) {
              return (
                <span
                  key={`${index}-${part}`}
                  className="text-muted-foreground/50"
                >
                  {part.slice(1, -1)}{" "}
                </span>
              )
            }
            return part + " "
          })}
        </Title>
      </>
    )
  }
}
