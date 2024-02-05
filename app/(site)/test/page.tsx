import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { Section } from "@/components/section"
import { Title } from "@/components/title"

type Props = {}
const Test: React.FC<Props> = async ({}) => {
  const session = await getServerSession(authOptions)
  return (
    <Section className="gutter">
      <Title>Test EP Page</Title>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </Section>
  )
}
export default Test
