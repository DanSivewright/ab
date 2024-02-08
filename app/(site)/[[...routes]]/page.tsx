import { redirect } from "next/navigation"

import { Section } from "@/components/section"

import { Event } from "./_views/event"
import { Pages } from "./_views/pages"

type Props = {
  params: {
    routes: string[]
  }
}
const Page: React.FC<Props> = async ({ params: { routes } }) => {
  if (!routes || routes?.length < 1) return redirect("/home")
  if (routes?.length < 2) return <Pages slug={routes?.[0]} />
  return <Event slug={routes[1]} />
}
export default Page
