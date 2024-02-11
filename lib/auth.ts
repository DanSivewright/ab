import { getUserByWhere, updateUser } from "@/actions/user"
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
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      const userQuery = await getUserByWhere({
        where: {
          email: {
            equals: token.email!,
          },
        },
      })
      const dbUser = userQuery?.docs[0]
      if (!dbUser || !userQuery.docs.length) {
        console.log("NO USER FOUND")
        return token
      }
      return {
        ...token,
        id: dbUser.id,
        stripeCustomerId: dbUser.stripeCustomerId,
        isActive: dbUser.isActive,
      }
    },
    session: async ({ session, token, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          stripeCustomerId: token.stripeCustomerId,
          isActive: token.isActive,
        },
      }
    },
  },
  events: {
    signIn: async ({ user }) => {
      if (user.stripeCustomerId) return
      const createStripeUser = await stripe.customers.create({
        email: user.email!,
        name: user.name!,
      })
      await updateUser({
        id: user.id as string,
        body: {
          stripeCustomerId: createStripeUser.id,
        },
      })
    },
    createUser: async ({ user }) => {
      const createStripeUser = await stripe.customers.create({
        email: user.email!,
        name: user.name!,
      })
      await updateUser({
        id: user.id as string,
        body: {
          stripeCustomerId: createStripeUser.id,
        },
      })
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
