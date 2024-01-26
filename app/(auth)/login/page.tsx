"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { login } from "@/actions/auth"
import { LoginFormSchema } from "@/schemas/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { forceDelay } from "@/lib/force-delay"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoaderButton } from "@/components/loader-button"
import { Title } from "@/components/title"

type Props = {}
const LoginPage: React.FC<Props> = ({}) => {
  const { push } = useRouter()
  const [pending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    try {
      startTransition(async () => {
        await forceDelay(login({ ...values }), 500)
        push("/")
      })
    } catch (error) {
      toast("Authentication Error", {
        description: "Something went wrong. Please try again.",
        action: {
          label: "Reset",
          onClick: () => form.reset(),
        },
      })
    }
    // const res = await login({ ...values })
  }
  return (
    // <div className="relative z-10 flex h-fit w-fit max-w-screen-xl  flex-col items-center justify-center rounded-lg bg-background p-2">
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative z-10 flex aspect-square w-full max-w-screen-sm flex-col justify-end bg-background p-2"
      >
        <Title
          // style={{ marginBottom: 0 }}
          showAs={2}
          className="text-balance"
        >
          <span className="text-muted-foreground/50">Above Brooklyn</span> is a
          (ask bongani here) studio. We build experiences and craft influence.
        </Title>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    sizing="xl"
                    rounded="none"
                    type="email"
                    placeholder="email@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    sizing="xl"
                    rounded="none"
                    type="password"
                    placeholder="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LoaderButton
            size="jumbo"
            rounded="none"
            className="w-fit"
            type="submit"
            pending={pending}
            icon="ArrowRight"
          >
            Login
          </LoaderButton>
        </div>
        {/* 
          

           */}
      </form>
    </Form>
  )
}
export default LoginPage
