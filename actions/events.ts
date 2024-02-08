import qs from "qs"
import * as z from "zod"

import { Collection, Event } from "@/types/payload-types"
import { handler, HTTPError } from "@/lib/safe-fetch"

export const events = handler({
  schema: z.object({}),
  cb: async ({ where }) => {
    try {
      const query = qs.stringify({ where }, { addQueryPrefix: true })
      const request = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/events${query}`,
        {
          method: "GET",
          credentials: "include",
          // next: {
          //   revalidate: 60,
          //   tags: ["events"],
          // },
        }
      )
      const json = (await request.json()) as Collection & { docs: Event[] }
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
