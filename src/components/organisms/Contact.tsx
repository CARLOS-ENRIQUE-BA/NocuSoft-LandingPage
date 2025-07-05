"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FaFacebookMessenger } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io";
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

        {/* Contact Information ÚNICA Y CENTRADA */}
        <AnimatedSection direction="right" delay={0.2}>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div>
              <Heading level={3} className="mb-4 text-center">
                Información de contacto
              </Heading>
              <Text color="muted" className="text-center">
                También puedes contactarnos directamente a través de cualquiera de estos medios.
              </Text>
            </div>

            <div className="space-y-6">
              <motion.div whileHover={{ scale: 1.02, y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
                <a href="https://m.me/716402411552215" target="_blank" rel="noopener noreferrer" className="block">
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-nucusoft-beige to-nucusoft-light-gray rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                        <FaFacebookMessenger className="text-nucusoft-black" />
                      </div>
                      <div>
                        <Heading level={5} className="mb-1">
                          Messenger
                        </Heading>
                        <Text color="muted">NucúSoft</Text>
                      </div>
                    </div>
                  </Card>
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
                <a href="https://wa.me/5219612134751" target="_blank" rel="noopener noreferrer" className="block">
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-nucusoft-beige to-nucusoft-light-gray rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                        <IoLogoWhatsapp className="text-nucusoft-black" />
                      </div>
                      <div>
                        <Heading level={5} className="mb-1">
                          Whatsapp
                        </Heading>
                        <Text color="muted">+52 1 961 213 4751</Text>
                      </div>
                    </div>
                  </Card>
                </a>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Contact
