"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Heading from "../atoms/Heading"
import Text from "../atoms/Text"
import AnimatedSection from "../atoms/AnimatedSection"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined)

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar una aplicación web?",
      answer:
        "El tiempo de desarrollo varía según la complejidad del proyecto. Una aplicación web del paquete básico puede tomar alrededor de 1 semana, mientras que proyectos más complejos, como sistemas empresariales o CRM, pueden requerir entre 3 y 6 meses. Durante la consulta inicial, proporcionamos un cronograma detallado basado en tus requisitos específicos.",
    },
    {
      question: "¿Ofrecen soporte y mantenimiento después del lanzamiento?",
      answer:
        "Sí, ofrecemos planes de soporte y mantenimiento continuo que incluyen actualizaciones de seguridad, corrección de errores, optimizaciones de rendimiento y soporte técnico. Nuestros planes van desde soporte básico hasta soporte premium 24/7.",
    },
    {
      question: "¿Qué tecnologías utilizan para el desarrollo?",
      answer:
        "Utilizamos tecnologías modernas y probadas como React, Next.js, Node.js, Python, React Native para móviles, y bases de datos como PostgreSQL y MongoDB. Seleccionamos la stack tecnológica más adecuada según las necesidades específicas de cada proyecto.",
    },
    {
      question: "¿Pueden trabajar con nuestro equipo interno de IT?",
      answer:
        "Absolutamente. Tenemos experiencia colaborando con equipos internos de IT. Podemos trabajar como una extensión de tu equipo, proporcionando expertise especializado, o liderar el proyecto completo según tus preferencias y necesidades.",
    },
    {
      question: "¿Cómo manejan la seguridad de los datos?",
      answer:
        "La seguridad es nuestra prioridad. Implementamos las mejores prácticas de seguridad incluyendo encriptación de datos, autenticación segura, auditorías de seguridad regulares, y cumplimiento con estándares como GDPR. Todos nuestros desarrolladores están certificados en prácticas de desarrollo seguro.",
    },
  ]

  return (
    <section id="faq" className="py-32 bg-nucusoft-light-gray/30">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-nucusoft-beige/20 rounded-full">
              <span className="text-sm font-medium text-nucusoft-black">Preguntas Frecuentes</span>
            </div>

            <Heading level={2}>Resolvemos tus dudas</Heading>

            <Text variant="lead" color="muted" className="max-w-3xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de desarrollo de software.
            </Text>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4" value={openItem} onValueChange={setOpenItem}>
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-nucusoft-white rounded-lg shadow-sm border-0 px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-nucusoft-black hover:text-nucusoft-beige py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pb-6 overflow-hidden">
                      <AnimatePresence>
                        {openItem === `item-${index}` && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            {faq.answer}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default FAQ
