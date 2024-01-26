import { Title } from "@/components/title"

type Props = {
  text: string
}

export const MinimalHero: React.FC<Props> = ({ text }) => {
  const parts = text.split(/(\[[^\]]+\])/)

  return (
    <Title showAs={2} className="text-balance px-4 pt-[45dvh]">
      {parts.map((part, index) => {
        if (part.startsWith("[") && part.endsWith("]")) {
          return (
            <span key={index} className="text-muted-foreground/50">
              {part.slice(1, -1)}{" "}
            </span>
          )
        }
        return part + " "
      })}
    </Title>
  )
}
