import Image from "next/image"

import { Event as EventType } from "@/types/payload-types"
import { cn } from "@/lib/utils"

import { Double } from "../double"
import { Section } from "../section"
import { titleVariants } from "../title"
import { badgeVariants } from "../ui/badge"

// HARD TYPE BIND! THIS IS GOING TO BE A PROBLEM IN THE FUTURE
type Props = {
  items?:
    | {
        blocks?: {
          relationTo: "events"
          value: EventType
        }
        id?: string | null
      }[]
    | null
  id?: string | null
  blockName?: string | null
  blockType: "bento-block"
}

export const BentoBlock: React.FC<Props> = ({ items }) => {
  return (
    <Section side="b" className="flex flex-col gap-2 px-2">
      <Double
        imageOne={`${process.env.NEXT_PUBLIC_API_URL!.replace(/\/api$/, "")}${
          // @ts-ignore
          items?.[0]?.blocks?.value.image?.url! as string
        }`}
        imageTwo={`${process.env.NEXT_PUBLIC_API_URL!.replace(/\/api$/, "")}${
          // @ts-ignore
          items?.[1]?.blocks?.value.image?.url! as string
        }`}
        titleOne={items?.[0]?.blocks?.value?.title!}
        titleTwo={items?.[1]?.blocks?.value?.title!}
        // @ts-ignore
        badgesOne={items?.[0]?.blocks?.value?.topics?.map((x) => x?.title!)}
        // @ts-ignore
        badgesTwo={items?.[1]?.blocks?.value?.topics?.map((x) => x?.title!)}
      />
      <div className="relative aspect-video w-full overflow-hidden md:aspect-[16/7]">
        <Image
          fill
          alt="Alt text for the image"
          src={`${process.env.NEXT_PUBLIC_API_URL!.replace(/\/api$/, "")}${
            // @ts-ignore
            items?.[2]?.blocks?.value?.image?.url! as string
          }`}
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
            {items?.[2]?.blocks?.value?.title!}
          </h2>
          <ul className="flex items-center gap-3">
            {items?.[2]?.blocks?.value?.categories?.map((x) => (
              <li
                // @ts-ignore
                key={x.id!}
                className={badgeVariants({ variant: "blur", size: "lg" })}
              >
                Badge One
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
