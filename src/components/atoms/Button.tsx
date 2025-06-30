import type React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", size = "md", className, children, ...props }) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    primary: "bg-nucusoft-black text-nucusoft-white hover:bg-nucusoft-dark-gray focus:ring-nucusoft-beige",
    secondary: "bg-nucusoft-beige text-nucusoft-black hover:bg-opacity-90 focus:ring-nucusoft-black",
    outline:
      "border-2 border-nucusoft-black text-nucusoft-black hover:bg-nucusoft-black hover:text-nucusoft-white focus:ring-nucusoft-beige",
    ghost: "text-nucusoft-black hover:bg-nucusoft-light-gray focus:ring-nucusoft-beige",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-lg",
    xl: "px-10 py-5 text-xl rounded-xl",
  }

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}

export default Button
