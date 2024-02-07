"use client"

import { motion } from "framer-motion"

import { Title } from "./title"

type Props = {
  children: React.ReactNode
}
const marqueeVariants = {
  animate: {
    x: [0, -1036],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
}
export const Marquee: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="relative w-screen h-[206px] overflow-x-hidden">
        <motion.div
          className="absolute whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}
