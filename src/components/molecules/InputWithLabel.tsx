import type React from "react"
import Input from "../atoms/Input"
import Text from "../atoms/Text"

interface InputWithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  required?: boolean
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, error, required, id, ...props }) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="block text-sm font-medium text-nucusoft-black">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <Input id={inputId} error={!!error} {...props} />
      {error && (
        <Text variant="small" color="muted" className="text-red-500">
          {error}
        </Text>
      )}
    </div>
  )
}

export default InputWithLabel
