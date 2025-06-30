"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FaRocket, FaPlay, FaArrowRight, FaCheckCircle, FaClock } from "react-icons/fa"
import Heading from "../atoms/Heading"
import Text from "../atoms/Text"
import Button from "../atoms/Button"
import AnimatedSection from "../atoms/AnimatedSection"

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-nucusoft-white via-nucusoft-light-gray/30 to-nucusoft-beige/20 pt-20 pb-32"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="inline-flex items-center px-4 py-2 bg-nucusoft-beige/20 rounded-full">
                <FaRocket className="mr-2 text-nucusoft-black" />
                <span className="text-sm font-medium text-nucusoft-black">Innovación Tecnológica</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Heading level={1}>
                Transformamos Ideas en <span className="gradient-text">Soluciones Digitales</span>
              </Heading>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <Text variant="lead" color="muted">
                En Nucúsoft desarrollamos software personalizado, aplicaciones web y móviles que impulsan el crecimiento
                de tu negocio con tecnología de vanguardia.
              </Text>
            </AnimatedSection>

            <AnimatedSection delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="primary" size="lg">
                    Comenzar Proyecto
                    <FaArrowRight className="ml-2" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg">
                    <FaPlay className="mr-2" />
                    Ver Demo
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={1.0}>
              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>+200 Proyectos Exitosos</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-nucusoft-beige" />
                  <span>5 Años de Experiencia</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.6} direction="right">
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-nucusoft-beige to-nucusoft-light-gray rounded-3xl blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10 aspect-[4/5] bg-gradient-to-br from-nucusoft-dark-gray to-nucusoft-black rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-nucusoft-beige/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  >
                    <div className="h-4 bg-nucusoft-white/20 rounded w-3/4"></div>
                    <div className="h-4 bg-nucusoft-white/20 rounded w-1/2"></div>
                    <div className="h-4 bg-nucusoft-white/20 rounded w-2/3"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default Hero
