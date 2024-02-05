"use client"

import { signOut } from "next-auth/react"

type Props = {}
export const Logout: React.FC<Props> = ({}) => {
  return (
    <button
      className="text-xs text-muted-foreground/70"
      onClick={() => signOut()}
    >
      Logout
    </button>
  )
}
