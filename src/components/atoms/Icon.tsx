import type React from "react"
import { cn } from "@/lib/utils"

interface IconProps {
  name: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  color?: string
}

const Icon: React.FC<IconProps> = ({ name, size = "md", className, color = "currentColor" }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  }

  // Aquí usarías tu librería de iconos preferida (Lucide, Heroicons, etc.)
  // Por simplicidad, uso un div con el nombre del icono
  return (
    <div className={cn(sizes[size], className)} style={{ color }} aria-label={name}>
      {/* Aquí iría el SVG del icono */}
      <svg fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
      </svg>
    </div>
  )
}

export default Icon
