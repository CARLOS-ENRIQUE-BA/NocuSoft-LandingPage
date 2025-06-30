"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FaUsers, FaCheckCircle, FaArrowRight } from "react-icons/fa"
import Heading from "../atoms/Heading"
import Text from "../atoms/Text"
import Button from "../atoms/Button"
import AnimatedSection from "../atoms/AnimatedSection"

const About: React.FC = () => {
  const achievements = [
    "Más de 200 proyectos completados exitosamente",
    "Equipo de desarrolladores certificados",
    "Metodologías ágiles y entregas puntuales",
    "Soporte técnico 24/7 para nuestros clientes",
  ]

  return (
    <section id="about" className="py-32 bg-nucusoft-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left" className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-nucusoft-beige/20 to-nucusoft-light-gray/20 rounded-3xl transform rotate-3"></div>
            <motion.div
              className="relative z-10 aspect-[5/4] bg-gradient-to-br from-nucusoft-dark-gray to-nucusoft-black rounded-3xl shadow-xl overflow-hidden"
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-nucusoft-beige/10 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-center space-y-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-nucusoft-beige to-nucusoft-light-gray rounded-full mx-auto flex items-center justify-center shadow-lg">
                    <FaUsers className="text-nucusoft-black text-3xl" />
                  </div>
                  <div className="text-nucusoft-white">
                    <motion.div
                      className="text-4xl font-bold"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      200+
                    </motion.div>
                    <div className="text-sm opacity-80">Proyectos Exitosos</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>

          <div className="space-y-8 order-1 lg:order-2">
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-nucusoft-beige/20 rounded-full">
                  <span className="text-sm font-medium text-nucusoft-black">Sobre Nucúsoft</span>
                </div>

                <Heading level={2}>
                  Innovación y Excelencia en <span className="gradient-text">Desarrollo de Software</span>
                </Heading>

                <Text color="muted">
                  Somos una empresa especializada en el desarrollo de soluciones tecnológicas personalizadas. Nuestro
                  equipo de expertos combina creatividad, experiencia técnica y las últimas tecnologías para transformar
                  ideas en productos digitales exitosos.
                </Text>

                <Text color="muted">
                  Desde aplicaciones web hasta sistemas empresariales complejos, nos enfocamos en entregar soluciones
                  que no solo cumplan con los requisitos técnicos, sino que también generen valor real para nuestros
                  clientes.
                </Text>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <FaCheckCircle className="text-green-600 flex-shrink-0" />
                    <Text variant="caption" color="muted">
                      {achievement}
                    </Text>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="primary" size="lg">
                    Conocer Más
                    <FaArrowRight className="ml-2" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg">
                    Ver Portfolio
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
