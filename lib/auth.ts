import { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  debug: true,
  session: {
    strategy: "jwt",
  },
  pages: {
    verifyRequest: "/verifyRequest",
    signIn: "/login",
  },
  providers: [],
  callbacks: {},
}
