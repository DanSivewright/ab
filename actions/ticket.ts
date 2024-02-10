import * as z from "zod"

import { handler, HTTPError } from "@/lib/safe-fetch"

export const createTicket = handler({
  schema: z.object({
    body: z.record(z.any()),
  }),
  cb: async ({ body }) => {
    try {
      console.log("CREATING A TICKET::: ")
      const request = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tickets`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          credentials: "include",
          body: JSON.stringify({ ...body }),
        }
      )
      const json = await request.json()
      console.log("JSON::: ", JSON)
      return json
    } catch (error) {
      if (error instanceof HTTPError) {
        console.error("HTTP Error:", error.status, error.message)
      } else {
        throw new Error("Failed to fetch data")
      }
    }
  },
})
