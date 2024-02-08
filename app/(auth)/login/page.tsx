"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LoginFormSchema } from "@/schemas/auth"
import { signIn } from "next-auth/react"
import * as z from "zod"

import { LoaderButton } from "@/components/loader-button"
import { Title } from "@/components/title"

type Props = {}
const LoginPage: React.FC<Props> = ({}) => {
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()

  async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    // try {
    //   startTransition(async () => {
    //     await forceDelay(login({ ...values }), 500)
    //     push("/")
    //   })
    // } catch (error) {
    //   toast("Authentication Error", {
    //     description: "Something went wrong. Please try again.",
    //     action: {
    //       label: "Reset",
    //       onClick: () => form.reset(),
    //     },
    //   })
    // }
  }
  return (
    <div className="relative z-10 flex aspect-square w-full max-w-screen-sm flex-col justify-end bg-background p-2">
      <Title
        // style={{ marginBottom: 0 }}
        showAs={2}
        className="text-balance"
      >
        <span className="text-muted-foreground/50">Above Brooklyn</span> is a
        (ask bongani here) studio. We build experiences and craft influence.
      </Title>
      <LoaderButton
        onClick={() => {
          setLoading(true)
          signIn("google", { callbackUrl: "/" })
        }}
        icon="ArrowRight"
        pending={loading}
        size={"xl"}
      >
        CONTINUE WITH GOOGLE
      </LoaderButton>
    </div>
  )
}
export default LoginPage
