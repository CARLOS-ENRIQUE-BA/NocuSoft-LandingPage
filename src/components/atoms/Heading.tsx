import type React from "react"
import { cn } from "@/lib/utils"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
  gradient?: boolean
}

const Heading: React.FC<HeadingProps> = ({ level, children, className, gradient = false }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const baseStyles = "font-display font-semibold text-nucusoft-black"
  const gradientStyles = gradient ? "gradient-text" : ""

  const sizes = {
    1: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl",
    2: "text-3xl sm:text-4xl lg:text-5xl",
    3: "text-2xl sm:text-3xl lg:text-4xl",
    4: "text-xl sm:text-2xl lg:text-3xl",
    5: "text-lg sm:text-xl lg:text-2xl",
    6: "text-base sm:text-lg lg:text-xl",
  }

  return <Tag className={cn(baseStyles, sizes[level], gradientStyles, className)}>{children}</Tag>
}

export default Heading
