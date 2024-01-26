"use server"

import { LoginFormSchema } from "@/schemas/auth"
import * as z from "zod"

import { handler, HTTPError, safeFetch } from "@/lib/safe-fetch"

export const login = handler({
  schema: LoginFormSchema,
  cb: async ({ email, password }) => {
    try {
      const data = await safeFetch(
        z.object({
          exp: z.number(),
          message: z.string(),
          token: z.string(),
          user: z.object({
            createdAt: z.string(),
            email: z.string(),
            id: z.string(),
            loginAttempts: z.number(),
            updatedAt: z.string(),
          }),
        }),
        `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      return data
    } catch (error) {
      if (error instanceof HTTPError) {
        console.error("HTTP Error:", error.status, error.message)
      } else {
        throw new Error("Failed to fetch data")
      }
    }
  },
})
