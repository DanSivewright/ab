import { VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { ArrowRight, Circle, Loader2, Plus } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button, buttonVariants } from "./ui/button"

export interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode
  pending: boolean
  icon: "Plus" | "ArrowRight"
  className?: string
}
export const LoaderButton: React.FC<Props> = ({
  children,
  pending,
  icon,
  className = "",
  ...rest
}) => {
  const IconRenderer: React.FC<{ iconName: string }> = ({ iconName }) => {
    const iconMapping: { [key: string]: React.ComponentType<any> } = {
      Plus: Plus,
      ArrowRight: ArrowRight,
    }

    const IconComponent = iconMapping[iconName]

    if (!IconComponent) {
      return <ArrowRight className="ml-2 h-3 w-3" />
    }

    return <IconComponent className="ml-2 h-3 w-3" />
  }
  return (
    <Button className={cn(className)} {...rest}>
      {children}
      <motion.div
        animate={
          pending
            ? { y: 0, opacity: 1 }
            : { y: "100%", opacity: 0, display: "none" }
        }
      >
        <Loader2 className="ml-2 h-3 w-3 animate-spin" />
      </motion.div>
      <motion.div
        animate={
          !pending
            ? { y: 0, opacity: 1 }
            : { y: "-100%", opacity: 0, display: "none" }
        }
      >
        <IconRenderer iconName={icon} />
      </motion.div>
    </Button>
  )
}
