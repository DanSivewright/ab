import { NextRequest, NextResponse } from "next/server"
import { updateUserByWhere } from "@/actions/user"
import Stripe from "stripe"

import { stripe } from "@/lib/stripe"

const webhookHandler = async (req: NextRequest) => {
  try {
    const buf = await req.text()
    const sig = req.headers.get("stripe-signature")!

    let event: Stripe.Event
    try {
      event = stripe.webhooks.constructEvent(
        buf,
        sig,
        process.env.STRIPE_WEBHOOK_SIGNING_SECRET as string
      )
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error"
      // On error, log and return the error message.
      if (err! instanceof Error) console.log(err)
      console.log(`❌ Error message: ${errorMessage}`)

      return NextResponse.json(
        {
          error: {
            message: `Webhook Error: ${errorMessage}`,
          },
        },
        { status: 400 }
      )
    }

    // Successfully constructed event.
    console.log("✅ Success:", event.id)

    // getting to the data we want from the event
    const subscription = event.data.object as Stripe.Subscription
    const subscriptionId = subscription.id

    switch (event.type) {
      case "customer.subscription.created":
        const user = await updateUserByWhere({
          where: {
            stripeCustomerId: {
              equals: subscription.customer as string,
            },
          },
          body: {
            isActive: true,
            subscriptionId,
          },
        })

        break
      case "customer.subscription.deleted":
        await updateUserByWhere({
          where: {
            stripeCustomerId: {
              equals: subscription.customer as string,
            },
          },
          body: {
            isActive: false,
          },
        })
        break

      default:
        console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`)
        break
    }

    return NextResponse.json({ received: true })
  } catch {
    return NextResponse.json(
      {
        error: {
          message: `Method Not Allowed`,
        },
      },
      { status: 405 }
    ).headers.set("Allow", "POST")
  }
}

export { webhookHandler as POST }
