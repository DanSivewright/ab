"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { LoginFormSchema } from "@/schemas/auth"
import { signIn } from "next-auth/react"
import * as z from "zod"

import { LoaderButton } from "@/components/loader-button"
import { Paragraph } from "@/components/paragraph"
import { Title } from "@/components/title"

type Props = {}
const LoginPage: React.FC<Props> = ({}) => {
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()

  async function onSubmit(values: z.infer<typeof LoginFormSchema>) {}
  return (
    <div className="relative z-10 flex h-[90dvh] w-full max-w-screen-sm flex-col justify-between bg-background p-2">
      <div className="">
        <div className="w-full h-64 relative overflow-hidden">
          <Image className="object-fit" fill src="/banner.png" alt="logo" />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 items-center">
        <Title
          // style={{ marginBottom: 0 }}
          showAs={2}
          className="text-balance"
        >
          <span className="text-muted-foreground/50">A home </span>for those
          with taste
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
        <Paragraph size="sm" className="text-muted-foreground/50">
          Members Only
        </Paragraph>
      </div>
    </div>
  )
}
export default LoginPage
