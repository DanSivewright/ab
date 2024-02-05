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
      <div className="col-span-5 aspect-square relative overflow-hidden">
        <Image
          className="object-cover"
          fill
          src={makeImageUrl((block.image as Media).url!)}
          alt={makeImageUrl((block.image as Media).alt!)}
        />
      </div>
      <div className="w-full gutter h-full text-balance col-span-7 flex flex-col items-start justify-center">
        {serialize(block.richText as any[])}
        {/* <Title level={5} showAs={2} className="text-pretty">
          {block.text}
        </Title> */}
        <CMSLink className="w-fit mt-6" link={block.link}></CMSLink>
      </div>
    </Grid>
  )
}
