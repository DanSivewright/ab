"use client"

import { combineProviders } from "./combine-providers"
import { NextAuthProvider } from "./next-auth-provider"

type Props = {
  children?: React.ReactNode
}
export const Providers: React.FC<Props> = ({ children }) => {
  return combineProviders({
    children,
    providers: [
      {
        Provider: NextAuthProvider,
      },
    ],
  })
}
