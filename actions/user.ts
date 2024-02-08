import qs from "qs"
import * as z from "zod"

import { Collection, Update, User } from "@/types/payload-types"
import { handler, HTTPError } from "@/lib/safe-fetch"

export const updateUser = handler({
  schema: z.object({
    id: z.string(),
    body: z.record(z.any()),
  }),
  cb: async ({ id, body }) => {
    try {
      const request = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          body: JSON.stringify({ ...body }),
          credentials: "include",
          cache: "no-store",
        }
      )
      const json = (await request.json()) as Update & { doc: User }
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
export const updateUserByWhere = handler({
  schema: z.object({
    body: z.record(z.any()),
  }),
  cb: async ({ body, where }) => {
    try {
      const query = qs.stringify({ where }, { addQueryPrefix: true })
      const request = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users${query}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          body: JSON.stringify({ ...body }),
          credentials: "include",
          cache: "no-store",
        }
      )
      const json = (await request.json()) as Update & { doc: User }
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

export const getUserById = handler({
  schema: z.object({
    id: z.string(),
  }),
  cb: async (input) => {
    try {
      const request = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${input.id}`,
        {
          method: "GET",
          credentials: "include",
          next: {
            revalidate: 60,
          },
        }
      )
      const json = (await request.json()) as User
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
export const getUserByWhere = handler({
  schema: z.object({}),
  cb: async ({ where }) => {
    try {
      const query = qs.stringify({ where }, { addQueryPrefix: true })
      const request = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users${query}`,
        {
          method: "GET",
          credentials: "include",
          // next: {
          //   revalidate: 60,
          // },
        }
      )
      const json = (await request.json()) as Collection & { docs: User[] }
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
