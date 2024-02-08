"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

type Props = {
  condition: boolean
  href: string | null
  children: React.ReactNode
  className?: string
}
export const ConditionalLink: React.FC<Props> = ({
  condition,
  href,
  children,
  className,
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
          toast("Coming soon", {
            description: "Check our instagram for announcements.",
            action: {
              label: "Instagram",
              onClick: () =>
                router.push("https://www.instagram.com/abovebrooklyn/", {}),
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
