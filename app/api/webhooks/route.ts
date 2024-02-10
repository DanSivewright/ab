import { NextRequest, NextResponse } from "next/server"
import { events } from "@/actions/events"
import { createTicket } from "@/actions/ticket"
import { getServerSession } from "next-auth"
import { Resend } from "resend"
import Stripe from "stripe"

import { authOptions } from "@/lib/auth"
import { stripe } from "@/lib/stripe"
import { ReceiptEmailHtml } from "@/components/emails/ticket-email"

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
        const authSession = await getServerSession(authOptions)
        const ticket = await createTicket({
          body: {
            paid: true,
            user: session?.metadata?.payingUserId,
            event: session?.metadata?.eventId,
          },
        })

        const eventQuery = await events({
          where: {
            id: {
              equals: session?.metadata?.eventId,
            },
          },
        })

        const resend = new Resend(process.env.RESEND_API_KEY)
        const email = await resend.emails.send({
          from: "Above Brooklyn <noreply@wixels.com>",
          to: [session?.metadata?.payingUserId!],
          subject: "Thank you for booking! This is your receipt.",
          html: ReceiptEmailHtml({
            date: new Date(),
            email: authSession?.user?.email!,
            orderId: session?.metadata?.orderId!,
            event: eventQuery?.docs?.[0]!,
          }),
        })

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
