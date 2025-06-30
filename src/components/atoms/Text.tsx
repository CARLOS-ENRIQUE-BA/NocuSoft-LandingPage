import type React from "react"
import { cn } from "@/lib/utils"

interface TextProps {
  variant?: "body" | "caption" | "lead" | "small"
  children: React.ReactNode
  className?: string
  color?: "default" | "muted" | "accent"
}

const Text: React.FC<TextProps> = ({ variant = "body", children, className, color = "default" }) => {
  const variants = {
    lead: "text-xl sm:text-2xl font-light leading-relaxed",
    body: "text-base sm:text-lg leading-relaxed",
    caption: "text-sm sm:text-base leading-relaxed",
    small: "text-xs sm:text-sm leading-relaxed",
  }

  const colors = {
    default: "text-nucusoft-black",
    muted: "text-gray-600",
    accent: "text-nucusoft-beige",
  }

  return <p className={cn(variants[variant], colors[color], className)}>{children}</p>
}

export default Text
