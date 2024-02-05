import * as z from "zod"

import { handler, HTTPError, safeFetch } from "@/lib/safe-fetch"

export const stripe = handler({
  schema: z.any(),
  cb: async () => {
    try {
      const request = await safeFetch(
        z.any(),
        `${process.env.NEXT_PUBLIC_API_URL}/`,
        {
          method: "GET",
          credentials: "include",
          next: {
            tags: ["stripe"],
          },
        }
      )
      return request
    } catch (error) {
      if (error instanceof HTTPError) {
        console.error("HTTP Error:", error.status, error.message)
      } else {
        throw new Error("Failed to fetch data")
      }
    }
  },
})
