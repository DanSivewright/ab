"use client"

import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"

type Props = {}
export const Logout: React.FC<Props> = ({}) => {
  const router = useRouter()
  return (
    <button
      className="text-xs text-muted-foreground/70"
      onClick={async () => {
        await signOut()
        router.push("/login")
      }}
    >
      Logout
    </button>
  )
}
