import { Event } from "./_views/event"
import { Pages } from "./_views/pages"

type Props = {
  params: {
    routes: string[]
  }
}
const Page: React.FC<Props> = async ({ params: { routes } }) => {
  if (routes?.length < 2 || !routes?.[0]) {
    return <Pages slug={routes?.[0] ?? "home"} />
  }
  switch (routes[0]) {
    case "events":
      return <Event slug={routes[1]} />

    default:
      break
  }
}
export default Page
