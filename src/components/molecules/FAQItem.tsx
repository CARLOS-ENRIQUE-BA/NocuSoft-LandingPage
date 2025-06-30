"use client"

import type React from "react"
import { useState } from "react"
import Heading from "../atoms/Heading"
import Text from "../atoms/Text"
import Icon from "../atoms/Icon"

interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-nucusoft-light-gray last:border-b-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left hover:bg-nucusoft-light-gray/20 transition-colors duration-200 px-4 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Heading level={4} className="pr-4">
          {question}
        </Heading>
        <Icon
          name={isOpen ? "minus" : "plus"}
          className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-6">
          <Text color="muted">{answer}</Text>
        </div>
      )}
    </div>
  )
}

export default FAQItem
