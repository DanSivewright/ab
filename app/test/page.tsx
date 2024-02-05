import {
  createUser,
  getAccount,
  getUserById,
  getUserByWhere,
  linkAccount,
  updateUser,
} from "@/actions/user"

import { Section } from "@/components/section"
import { Title } from "@/components/title"

type Props = {}
const TestPage: React.FC<Props> = async ({}) => {
  const payload = await linkAccount({
    body: {
      name: "dan Sivewright",
    },
  })

  return (
    <Section className="gutter">
      <Title>Testing out any eps that you wan</Title>
      <pre>{JSON.stringify(payload, null, 2)}</pre>
    </Section>
  )
}
export default TestPage
