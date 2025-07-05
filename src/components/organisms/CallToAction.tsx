"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FaCalendarAlt, FaComments } from "react-icons/fa"
import Heading from "../atoms/Heading"
import Text from "../atoms/Text"
import Button from "../atoms/Button"
import AnimatedSection from "../atoms/AnimatedSection"

const CallToAction: React.FC = () => {
  return (
    <section className="py-32 bg-nucusoft-black text-nucusoft-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-nucusoft-dark-gray to-nucusoft-black"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fillRule='evenodd'><g fill='%23D2C2B0' fillOpacity='0.3'><circle cx='30' cy='30' r='2'/></g></g></svg>")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-nucusoft-beige/20 rounded-full">
                <span className="text-sm font-medium text-nucusoft-beige">¿Listo para comenzar?</span>
              </div>

              <Heading level={2} className="text-nucusoft-white">
                Transformemos tu idea en realidad
              </Heading>

              <Text variant="lead" className="text-nucusoft-light-gray">
              Contáctanos a través de nuestra página de Facebook y descubre cómo podemos ayudarte a llevar tu 
              proyecto al siguiente nivel. Estamos listos para convertir tu visión en una solución tecnológica 
              funcional y personalizada.
              </Text>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                <Button variant="secondary" size="lg" className="w-full">
                  <FaCalendarAlt className="mr-2" />
                  Agendar Consulta
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-nucusoft-white text-nucusoft-white hover:bg-nucusoft-white hover:text-nucusoft-black bg-transparent"
                >
                  <FaComments className="mr-2" />
                  Contactar Ahora
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-4xl font-bold text-nucusoft-beige mb-2">24h</div>
                <Text variant="caption" className="text-nucusoft-light-gray">
                  Respuesta garantizada
                </Text>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-4xl font-bold text-nucusoft-beige mb-2">100%</div>
                <Text variant="caption" className="text-nucusoft-light-gray">
                Atención rápida y directa
                </Text>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-4xl font-bold text-nucusoft-beige mb-2">1+</div>
                <Text variant="caption" className="text-nucusoft-light-gray">
                  Proyectos exitosos
                </Text>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
