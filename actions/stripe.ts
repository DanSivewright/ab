"use server"

import { getServerSession } from "next-auth"
import * as z from "zod"

import { authOptions } from "@/lib/auth"
import { handler, HTTPError } from "@/lib/safe-fetch"
import { stripe } from "@/lib/stripe"

export const checkoutSession = handler({
  schema: z.object({
    priceId: z.string(),
    slug: z.string(),
    eventId: z.string(),
  }),
  cb: async ({ priceId, eventId, slug }) => {
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
        mode: "payment",
        customer: session.user.stripeCustomerId,
        line_items: [
          {
            price: priceId,
            quantity: 1,
            adjustable_quantity: {
              enabled: false,
            },
          },
        ],
        success_url:
          process.env.NEXT_PUBLIC_APP_URL +
          `/${slug}` +
          `?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: process.env.NEXT_PUBLIC_APP_URL + `/${slug}`,
        metadata: {
          payingUserId: session.user.id,
          eventId,
          slug,
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
      const payment = await stripe.paymentIntents.list({
        customer: session.user.stripeCustomerId,
      })

      return Boolean(payment.data.length > 0)
    } catch (error) {
      if (error instanceof HTTPError) {
        console.error("HTTP Error:", error.status, error.message)
      } else {
        throw new Error("Failed to fetch data")
      }
    }
  },
})
