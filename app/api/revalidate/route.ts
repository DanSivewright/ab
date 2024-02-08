import { revalidateTag } from "next/cache"
import { headers } from "next/headers"

export async function POST(request: Request) {
  const headersList = headers()
  const body = await request.json()

  const secret = headersList.get("secret")
  if (secret !== process.env.REVALIDATE_SECRET)
    return new Response("Unauthorized", { status: 401 })
  try {
    revalidateTag(body)
  } catch (error) {
    return new Response(`Webhook error: ${JSON.stringify(error as any)}`, {
      status: 400,
    })
  }

  return new Response("Success!", {
    status: 200,
  })
}
