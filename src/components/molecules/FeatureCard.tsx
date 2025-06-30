"use client"

import type React from "react"
import { motion } from "framer-motion"
import Card from "./Card"
import Heading from "../atoms/Heading"
import Text from "../atoms/Text"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <Card hover className="text-center h-full">
        <div className="flex flex-col items-center space-y-6">
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-nucusoft-beige to-nucusoft-light-gray rounded-2xl flex items-center justify-center shadow-lg"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="text-nucusoft-black text-2xl">{icon}</div>
          </motion.div>
          <Heading level={4}>{title}</Heading>
          <Text color="muted">{description}</Text>
        </div>
      </Card>
    </motion.div>
  )
}

export default FeatureCard
