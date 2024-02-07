import React, { Fragment } from "react"
import Image from "next/image"
import escapeHTML from "escape-html"

import { Media } from "@/types/payload-types"
import { Label } from "@/components/ui/label"
import { Paragraph } from "@/components/paragraph"
import { sectionVariants } from "@/components/section"
import { Title } from "@/components/title"

import { isPlainObject } from "./is-plain-object"
import { makeImageUrl } from "./make-image-url"
import { cn } from "./utils"

type Children = Leaf[]

type Leaf = {
  type: string
  value?: {
    url: string
    alt: string
  }
  children?: Children
  url?: string
  [key: string]: unknown
}

const isText = (value: any) => {
  return isPlainObject(value) && typeof value.text === "string"
}

const serialize = (
  children?: Children,
  className?: string,
  imageContainerClassName?: string,
  imageClassName?: string
): React.ReactNode[] =>
  children?.map((node, i) => {
    if (isText(node)) {
      let text = (
        <span
          className={cn(className, "text-balance")}
          // className="text-balance"
          key={i}
          dangerouslySetInnerHTML={{
            __html: escapeHTML(node.text! as string),
          }}
        />
      )

      if (node.bold) {
        text = <strong key={i}>{text}</strong>
      }

      if (node.code) {
        text = <code key={i}>{text}</code>
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>
      }

      if (node.underline) {
        text = (
          <span style={{ textDecoration: "underline" }} key={i}>
            {text}
          </span>
        )
      }

      if (node.strikethrough) {
        text = (
          <span style={{ textDecoration: "line-through" }} key={i}>
            {text}
          </span>
        )
      }

      return <Fragment key={i}>{text}</Fragment>
    }

    if (!node) {
      return null
    }

    switch (node.type) {
      case "upload": {
        return (
          <div
            className={cn(
              "w-full overflow-hidden relative aspect-square",
              imageContainerClassName
            )}
          >
            <Image
              src={makeImageUrl((node.value as Media)?.url!)}
              alt={(node.value as Media)?.alt}
              fill
              className={cn(imageClassName, "object-cover")}
              // className="object-cover"
            />
          </div>
        )
      }
      case "h1":
        return (
          <Title
            //
            className={cn(className, "text-balance")}
            level={1}
            key={i}
          >
            {serialize(node?.children)}
          </Title>
        )
      case "h2":
        return (
          <Title
            //
            className={cn(className, "text-balance")}
            level={2}
            key={i}
          >
            {serialize(node?.children)}
          </Title>
        )
      case "h3":
        return (
          <Title
            //
            className={cn(className, "text-balance")}
            level={3}
            key={i}
          >
            {serialize(node?.children)}
          </Title>
        )
      case "h4":
        return (
          <Title
            //
            className={cn(className, "text-balance")}
            level={4}
            key={i}
          >
            {serialize(node?.children)}
          </Title>
        )
      case "h5":
        return (
          <Title
            //
            className={cn(className, "text-balance")}
            level={5}
            key={i}
          >
            {serialize(node?.children)}
          </Title>
        )
      case "h6":
        return (
          <Title
            //
            className={cn(className, "text-balance")}
            level={6}
            key={i}
          >
            {serialize(node?.children)}
          </Title>
        )
      case "quote":
        return (
          <blockquote
            //
            className={cn(className, "prose")}
            key={i}
          >
            {serialize(node?.children)}
          </blockquote>
        )
      case "ul":
        return (
          <ul
            //
            className={cn(className, "prose")}
            key={i}
          >
            {serialize(node?.children)}
          </ul>
        )
      case "ol":
        return <ol key={i}>{serialize(node.children)}</ol>
      case "li":
        return <li key={i}>{serialize(node.children)}</li>
      // case "link":
      //   return (
      //     //   <CMSLink
      //     //     key={i}
      //     //     type={node.linkType === "internal" ? "reference" : "custom"}
      //     //     url={node.url}
      //     //     reference={node.doc as any}
      //     //     newTab={Boolean(node?.newTab)}
      //     //   >
      //     //     {serialize(node?.children)}
      //     //   </CMSLink>
      //     <span>TODO::: Support link component</span>
      //   )

      case "label":
        return (
          <Label className={cn(className, "text-balance")} key={i}>
            {serialize(node?.children)}
          </Label>
        )

      case "large-body": {
        return (
          <Paragraph
            className={cn(className, "text-balance")}
            size={"lg"}
            key={i}
          >
            {serialize(node?.children)}
          </Paragraph>
        )
      }

      default:
        return (
          <Paragraph className={cn(className, "text-balance")} key={i}>
            {serialize(node?.children)}
          </Paragraph>
        )
    }
  }) || []

export default serialize
