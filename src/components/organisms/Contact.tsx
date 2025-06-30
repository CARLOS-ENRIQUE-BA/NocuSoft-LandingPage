"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa"
import Heading from "../atoms/Heading"
import Text from "../atoms/Text"
import Button from "../atoms/Button"
import InputWithLabel from "../molecules/InputWithLabel"
import Card from "../molecules/Card"
import AnimatedSection from "../atoms/AnimatedSection"

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-nucusoft-white">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-nucusoft-beige/20 rounded-full">
              <span className="text-sm font-medium text-nucusoft-black">Contacto</span>
            </div>

            <Heading level={2}>Hablemos de tu proyecto</Heading>

            <Text variant="lead" color="muted" className="max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos y comencemos a trabajar juntos en tu próxima solución tecnológica.
            </Text>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <AnimatedSection direction="left">
            <div className="space-y-8">
              <div>
                <Heading level={3} className="mb-4">
                  Envíanos un mensaje
                </Heading>
                <Text color="muted">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                </Text>
              </div>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputWithLabel label="Nombre" placeholder="Tu nombre" required />
                  <InputWithLabel label="Apellido" placeholder="Tu apellido" required />
                </div>

                <InputWithLabel label="Email" type="email" placeholder="tu@email.com" required />

                <InputWithLabel label="Teléfono" type="tel" placeholder="+1 (555) 123-4567" />

                <InputWithLabel label="Empresa" placeholder="Nombre de tu empresa" />

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-nucusoft-black">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-nucusoft-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-nucusoft-beige focus:border-nucusoft-beige transition-colors duration-200 min-h-[120px] resize-vertical"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="primary" size="lg" className="w-full">
                    <FaPaperPlane className="mr-2" />
                    Enviar Mensaje
                  </Button>
                </motion.div>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-8">
              <div>
                <Heading level={3} className="mb-4">
                  Información de contacto
                </Heading>
                <Text color="muted">
                  También puedes contactarnos directamente a través de cualquiera de estos medios.
                </Text>
              </div>

              <div className="space-y-6">
                <motion.div whileHover={{ scale: 1.02, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-nucusoft-beige to-nucusoft-light-gray rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                        <FaEnvelope className="text-nucusoft-black" />
                      </div>
                      <div>
                        <Heading level={5} className="mb-1">
                          Email
                        </Heading>
                        <Text color="muted">contacto@nucusoft.com</Text>
                        <Text color="muted">ventas@nucusoft.com</Text>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-nucusoft-beige to-nucusoft-light-gray rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                        <FaPhone className="text-nucusoft-black" />
                      </div>
                      <div>
                        <Heading level={5} className="mb-1">
                          Teléfono
                        </Heading>
                        <Text color="muted">+52 (55) 1234-5678</Text>
                        <Text color="muted">+52 (55) 8765-4321</Text>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-nucusoft-beige to-nucusoft-light-gray rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                        <FaMapMarkerAlt className="text-nucusoft-black" />
                      </div>
                      <div>
                        <Heading level={5} className="mb-1">
                          Oficina
                        </Heading>
                        <Text color="muted">
                          Av. Insurgentes Sur 1234
                          <br />
                          Col. Del Valle, CDMX
                          <br />
                          México, 03100
                        </Text>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default Contact
