import Image from "next/image"

import { Media, Page } from "@/types/payload-types"
import { makeImageUrl } from "@/lib/make-image-url"
import serialize from "@/lib/serialize"

import { CMSLink } from "../cms-link"
import { Grid } from "../grid"
import { Title } from "../title"

type Props = {
  block: NonNullable<Page["layout"]>[0] & { blockType: "cta-image-block" }
}
export const CTAImageBLock: React.FC<Props> = ({ block }) => {
  return (
    <Grid className="mx-3 p-3" style={{ background: `#${block.background}` }}>
      <div className="col-span-12 md:col-span-5 aspect-square relative overflow-hidden">
        <Image
          className="object-cover"
          fill
          src={(block.image as Media).imagekit?.url!}
          alt={(block.image as Media).alt}
        />
      </div>
      <div className="w-full gutter h-full text-balance col-span-12 mb-20 md:mb-0 md:col-span-7 flex flex-col items-start justify-center">
        {serialize(block.richText as any[])}

        <CMSLink className="w-fit mt-6" link={block.link}></CMSLink>
      </div>
    </Grid>
  )
}
