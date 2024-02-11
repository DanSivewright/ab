import qs from "qs"
import * as z from "zod"

import { Global as GlobalType, Menu } from "@/types/payload-types"
import { handler, HTTPError } from "@/lib/safe-fetch"

export const menu = handler({
  schema: z.object({}),
  cb: async (input) => {
    const query = qs.stringify(input, { addQueryPrefix: true })
    try {
      const request = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/globals/menu${query}`,
        {
          method: "GET",
          credentials: "include",
          next: {
            // revalidate: 60,
            tags: ["menu"],
          },
        }
      )
      const json = (await request.json()) as GlobalType & { nav: Menu["nav"] }
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
