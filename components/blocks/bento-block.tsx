import Image from "next/image"

import { Event as EventType } from "@/types/payload-types"
import { cn } from "@/lib/utils"

import { Double } from "../double"
import { Section } from "../section"
import { titleVariants } from "../title"
import { badgeVariants } from "../ui/badge"

// HARD TYPE BIND! THIS IS GOING TO BE A PROBLEM IN THE FUTURE
type Props = {
  items:
    | {
        imagePath: string
        title: string
        categories?: string[] | null
      }[]
    | null
}

export const BentoBlock: React.FC<Props> = ({ items }) => {
  return (
    <section className="flex flex-col gap-2 px-2 mb-3">
      <Double
        imageOne={items?.[0]?.imagePath as string}
        imageTwo={items?.[1]?.imagePath as string}
        titleOne={items?.[0]?.title!}
        titleTwo={items?.[1]?.title!}
        badgesOne={items?.[0]?.categories?.map((x) => x)}
        badgesTwo={items?.[1]?.categories?.map((x) => x)}
      />
      <div className="relative aspect-video w-full overflow-hidden md:aspect-[16/7]">
        <Image
          fill
          alt="Alt text for the image"
          src={items?.[2]?.imagePath as string}
          className="object-cover"
        />
        <div className="absolute inset-0 z-10 flex h-full w-full flex-col justify-between p-3">
          <h2
            className={cn(
              titleVariants({ level: 6 }),
              "text-balance text-white"
            )}
            style={{ margin: 0 }}
          >
            {items?.[2]?.title!}
          </h2>
          <ul className="flex items-center gap-3">
            {items?.[2]?.categories?.map((x) => (
              <li
                key={x}
                className={badgeVariants({ variant: "blur", size: "lg" })}
              >
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
