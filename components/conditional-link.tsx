"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

type Props = {
  condition: boolean
  href: string | null
  children: React.ReactNode
  className?: string
  toastOpts?: {
    title?: string
    description?: string
    action?: {
      label?: string
      onClick?: () => void
    }
  }
}
export const ConditionalLink: React.FC<Props> = ({
  condition,
  href,
  children,
  className,
  toastOpts,
  ...rest
}) => {
  const router = useRouter()
  if (condition && href) {
    return (
      <Link className={className} href={href!}>
        {children}
      </Link>
    )
  } else {
    return (
      <div
        {...rest}
        onClick={() =>
          !toastOpts
            ? toast("Coming soon", {
                description: "Check our instagram for announcements.",
                action: {
                  label: "Instagram",
                  onClick: () =>
                    router.push("https://www.instagram.com/abovebrooklyn/", {}),
                },
              })
            : toast(toastOpts.title, {
                description: toastOpts.description,
                action: {
                  label: toastOpts.action?.label ?? "",
                  onClick: toastOpts.action?.onClick ?? (() => {}),
                },
              })
        }
        className={className}
      >
        {children}
      </div>
    )
  }
}
