"use server"

import { getServerSession } from "next-auth"
import * as z from "zod"

import { authOptions } from "@/lib/auth"
import { handler, HTTPError, safeFetch } from "@/lib/safe-fetch"
import { stripe } from "@/lib/stripe"

export const checkoutSession = handler({
  schema: z.object({}),
  cb: async () => {
    try {
      const session = await getServerSession(authOptions)
      if (!session?.user)
        return {
          error: {
            code: "no-access",
            message: "You are not signed in.",
          },
        }
      const checkoutSession = await stripe.checkout.sessions.create({
        mode: "subscription",
        customer: session.user.stripeCustomerId,
        line_items: [
          {
            price: "price_1OgjY3CGa1SLQ2e5jFeWoEUC",
            quantity: 1,
          },
        ],
        success_url:
          process.env.NEXT_PUBLIC_APP_URL + `?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: process.env.NEXT_PUBLIC_APP_URL,
        subscription_data: {
          metadata: {
            payingUserId: session.user.id,
          },
        },
      })
      return checkoutSession.url
    } catch (error) {
      if (error instanceof HTTPError) {
        console.error("HTTP Error:", error.status, error.message)
      } else {
        throw new Error("Failed to fetch data")
      }
    }
  },
})

export const createCustomerPortalLink = handler({
  schema: z.object({
    returnUrl: z.string().optional(),
  }),
  cb: async ({ returnUrl }) => {
    const session = await getServerSession(authOptions)
    if (!session?.user)
      return {
        error: {
          code: "no-access",
          message: "You are not signed in.",
        },
      }

    const portal = await stripe.billingPortal.sessions.create({
      customer: session.user.stripeCustomerId,
      return_url:
        `${process.env.NEXT_PUBLIC_APP_URL}/${returnUrl}` ??
        process.env.NEXT_PUBLIC_APP_URL + "/profile",
    })
    return portal.url
  },
})

export const hasSubscription = handler({
  schema: z.object({}),
  cb: async () => {
    try {
      const session = await getServerSession(authOptions)
      if (!session?.user) return false
      const subscription = await stripe.subscriptions.list({
        customer: session.user.stripeCustomerId,
      })

      return Boolean(subscription.data.length > 0)
    } catch (error) {
      if (error instanceof HTTPError) {
        console.error("HTTP Error:", error.status, error.message)
      } else {
        throw new Error("Failed to fetch data")
      }
    }
  },
})
