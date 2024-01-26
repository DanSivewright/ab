import qs from "qs"
import * as z from "zod"

import { Collection, Event, Page } from "@/types/payload-types"
import { handler, HTTPError } from "@/lib/safe-fetch"

export const archive = handler({
  schema: z.object({
    revalidate: z.number().optional(),
    relationTo: z.string(),
  }),
  cb: async (input) => {
    const { revalidate, relationTo, ...rest } = input ?? {}
    const query = qs.stringify({ ...rest }, { addQueryPrefix: true })
    console.log("query::: ", query)
    try {
      const request = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/${relationTo}${query}`,
        {
          method: "GET",
          credentials: "include",
          next: {
            // ...(revalidate ? { revalidate } : {}),
            tags: ["archive", relationTo],
          },
        }
      )
      const json = (await request.json()) as Collection & {
        // TODO: support multiple types
        docs: (Page | Event)[]
        // docs: Page[] | Event[]
      }
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
