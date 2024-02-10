import { NextRequest, NextResponse } from "next/server"
import { createTicket } from "@/actions/ticket"
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

    const session = event.data.object as Stripe.Checkout.Session

    switch (event.type) {
      case "checkout.session.completed":
        const ticket = await createTicket({
          body: {
            paid: true,
            user: session?.metadata?.payingUserId,
            event: session?.metadata?.eventId,
          },
        })
        // console.log("ticket::: ", ticket)

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
