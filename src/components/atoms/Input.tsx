import type React from "react"
import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const Input: React.FC<InputProps> = ({ className, error, ...props }) => {
  return (
    <input
      className={cn(
        "w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-nucusoft-beige",
        error ? "border-red-500 focus:border-red-500" : "border-nucusoft-light-gray focus:border-nucusoft-beige",
        "placeholder:text-gray-500 text-nucusoft-black bg-nucusoft-white",
        className,
      )}
      {...props}
    />
  )
}

export default Input
