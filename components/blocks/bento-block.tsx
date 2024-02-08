import Image from "next/image"

import { Event as EventType } from "@/types/payload-types"
import { cn } from "@/lib/utils"

import { ConditionalLink } from "../conditional-link"
import { Double } from "../double"
import { Grid } from "../grid"
import { titleVariants } from "../title"
import { badgeVariants } from "../ui/badge"

// HARD TYPE BIND! THIS IS GOING TO BE A PROBLEM IN THE FUTURE
type Props = {
  items:
    | {
        href?: string | null
        imagePath: string
        title: string
        categories?: string[] | null
      }[]
    | null
}

export const BentoBlock: React.FC<Props> = ({ items }) => {
  return (
    <>
      <section className="hidden lg:flex flex-col gap-2 px-2 mb-3">
        <Double
          hrefOne={items?.[0]?.href ?? null}
          hrefTwo={items?.[1]?.href ?? null}
          imageOne={items?.[0]?.imagePath as string}
          imageTwo={items?.[1]?.imagePath as string}
          titleOne={items?.[0]?.title!}
          titleTwo={items?.[1]?.title!}
          badgesOne={items?.[0]?.categories?.map((x) => x)}
          badgesTwo={items?.[1]?.categories?.map((x) => x)}
        />
        <ConditionalLink
          condition={Boolean(items?.[2].href)}
          href={items?.[2]?.href ?? null}
          className="relative aspect-video w-full overflow-hidden md:aspect-[16/7]"
        >
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
        </ConditionalLink>
      </section>
      <Grid gap="none" className="lg:hidden flex flex-col gap-2 px-2 mb-3">
        <ConditionalLink
          condition={Boolean(items?.[0].href)}
          href={items?.[0]?.href ?? null}
          className="relative col-span-12 md:col-span-6 aspect-square w-full overflow-hidden"
        >
          <Image
            fill
            alt="Alt text for the image"
            src={items?.[0]?.imagePath as string}
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
              {items?.[0]?.title!}
            </h2>
          </div>
        </ConditionalLink>
        <ConditionalLink
          condition={Boolean(items?.[1].href)}
          href={items?.[1]?.href ?? null}
          className="relative col-span-12 md:col-span-6 aspect-square w-full overflow-hidden"
        >
          <Image
            fill
            alt="Alt text for the image"
            src={items?.[1]?.imagePath as string}
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
              {items?.[1]?.title!}
            </h2>
          </div>
        </ConditionalLink>
        <ConditionalLink
          condition={Boolean(items?.[2].href)}
          href={items?.[2]?.href ?? null}
          className="relative col-span-12 aspect-video w-full overflow-hidden md:aspect-[16/7]"
        >
          <Image
            fill
            alt="Alt text for the image"
            src={items?.[2]?.imagePath as string}
            className="object-cover"
          />
          <div className="absolute hidden inset-0 z-10 md:flex h-full w-full flex-col justify-between p-3">
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
        </ConditionalLink>
      </Grid>
    </>
  )
}
