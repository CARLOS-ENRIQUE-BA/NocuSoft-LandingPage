"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FaRocket, FaPlay, FaArrowRight, FaCheckCircle, FaClock } from "react-icons/fa"
import Heading from "../atoms/Heading"
import Text from "../atoms/Text"
import Button from "../atoms/Button"
import AnimatedSection from "../atoms/AnimatedSection"
import Image from "next/image"
import HeroImg from "../../assets/HeroImg.jpg"

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-nucusoft-white via-nucusoft-light-gray/30 to-nucusoft-beige/20 pt-20 pb-32"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 p-8">
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

          </div>

          <AnimatedSection delay={0.6} direction="right">
            <div className="relative">
              <div className="relative z-10 aspect-[4/5] rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src={HeroImg}
                  alt="Imagen Hero Nucusoft"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
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
