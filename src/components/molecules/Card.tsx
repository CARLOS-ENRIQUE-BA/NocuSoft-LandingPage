import type React from "react"
import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: "sm" | "md" | "lg"
}

const Card: React.FC<CardProps> = ({ children, className, hover = false, padding = "md" }) => {
  const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  }

  return (
    <div
      className={cn(
        "bg-nucusoft-white rounded-xl border border-nucusoft-light-gray shadow-sm",
        hover && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        paddingStyles[padding],
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Card
