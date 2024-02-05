import {
  createUser,
  getAccount,
  getUserById,
  getUserByWhere,
  updateUser,
} from "@/actions/user"
import type { Adapter } from "@auth/core/adapters"

import type { User } from "@/types/payload-types"

export const PayloadAdapter: Adapter = {
  async createUser(user) {
    const existingUser = await getUser({ id: user.id })
    if (existingUser) return existingUser

    const create = await createUser({ email: user.email })
    return create
  },
  async getUser(id) {
    const existingUser = await getUser({ id })
    if (!existingUser) throw new Error("User not found")
    return existingUser
  },
  async getUserByEmail(email): Promise<any | null> {
    const existingUser = await getUserByWhere({
      where: {
        email: {
          equals: email,
        },
      },
    })
    return existingUser && existingUser.docs[0]
  },
  async getUserByAccount({ providerAccountId, provider }): Promise<any | null> {
    const account = await getAccount({
      where: {
        provider: {
          equals: provider,
        },
        providerAccountId: {
          equals: providerAccountId,
        },
      },
    })
    if (!account || !account.docs.length) return null
    const user = await getUserById({
      id: account?.docs[0].userId as string,
    })
    return user
  },
  async updateUser(user) {
    const { id, ...rest } = user
    const updatedUser = await updateUser({
      id: user.id,
      body: { ...rest },
    })
    return updatedUser
  },
  async deleteUser(userId) {
    return
  },
  async linkAccount(account) {
    return
  },
  async unlinkAccount({ providerAccountId, provider }) {
    return
  },
  async createSession({ sessionToken, userId, expires }) {
    return
  },
  async getSessionAndUser(sessionToken) {
    return
  },
  async updateSession({ sessionToken }) {
    return
  },
  async deleteSession(sessionToken) {
    return
  },
  async createVerificationToken({ identifier, expires, token }) {
    return
  },
  async useVerificationToken({ identifier, token }) {
    return
  },
}
