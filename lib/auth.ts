import { MongoDBAdapter } from "@auth/mongodb-adapter"
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import clientPromise from "./adapters/mongo-client"
import { stripe } from "./stripe"

export const authOptions: NextAuthOptions = {
  // @ts-ignore
  adapter: MongoDBAdapter(clientPromise as any),
  debug: true,
  session: {
    strategy: "jwt",
  },
  pages: {
    verifyRequest: "/verifyRequest",
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {},
  events: {
    createUser: async ({ user }) => {
      const createStripeUser = await stripe.customers.create({
        email: user.email!,
        name: user.name!,
      })
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
