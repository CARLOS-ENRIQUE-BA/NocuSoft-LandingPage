"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FaGlobe, FaMobile, FaDatabase, FaCog, FaShoppingCart, FaChartBar } from "react-icons/fa"
import Heading from "../atoms/Heading"
import Text from "../atoms/Text"
import Card from "../molecules/Card"
import Button from "../atoms/Button"
import AnimatedSection from "../atoms/AnimatedSection"
import StaggerContainer from "../atoms/StaggerContainer"

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaGlobe />,
      title: "Desarrollo Web",
      description:
        "Aplicaciones web modernas y responsivas utilizando las últimas tecnologías como React, Next.js y Node.js.",
      features: ["Diseño Responsivo", "SEO Optimizado", "Alta Performance", "Seguridad Avanzada"],
      price: "Desde $2,500",
    },
    {
      icon: <FaMobile />,
      title: "Apps Móviles",
      description: "Desarrollo de aplicaciones nativas para iOS y Android con experiencia de usuario excepcional.",
      features: ["iOS & Android", "UI/UX Nativo", "Push Notifications", "Offline Support"],
      price: "Desde $4,000",
    },
    {
      icon: <FaDatabase />,
      title: "Sistemas Empresariales",
      description: "Soluciones ERP y CRM personalizadas para optimizar los procesos de tu empresa.",
      features: ["Integración APIs", "Reportes Avanzados", "Multi-usuario", "Cloud Ready"],
      price: "Desde $8,000",
    },
    {
      icon: <FaCog />,
      title: "Automatización",
      description: "Automatización de procesos empresariales para aumentar la eficiencia y reducir costos.",
      features: ["Workflows", "Integraciones", "Monitoreo", "Escalabilidad"],
      price: "Desde $3,500",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-commerce",
      description: "Tiendas online completas con pasarelas de pago, gestión de inventario y analytics.",
      features: ["Pagos Seguros", "Gestión Stock", "Analytics", "Multi-moneda"],
      price: "Desde $3,000",
    },
    {
      icon: <FaChartBar />,
      title: "Business Intelligence",
      description: "Dashboards y reportes inteligentes para la toma de decisiones basada en datos.",
      features: ["Dashboards", "Reportes Real-time", "Data Mining", "Visualización"],
      price: "Desde $5,000",
    },
  ]

  return (
    <section id="services" className="p-8 bg-nucusoft-light-gray/30">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-nucusoft-beige/20 rounded-full">
              <span className="text-sm font-medium text-nucusoft-black">Nuestros Servicios</span>
            </div>

            <Heading level={2}>Soluciones Tecnológicas Integrales</Heading>

            <Text variant="lead" color="muted" className="max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios de desarrollo de software para cubrir todas las necesidades
              tecnológicas de tu empresa.
            </Text>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card hover className="h-full flex flex-col">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center justify-between">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-nucusoft-beige to-nucusoft-light-gray rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="text-nucusoft-black text-2xl">{service.icon}</div>
                    </motion.div>
                    <div className="text-right">
                      <Text variant="small" color="muted">
                        Desde
                      </Text>
                      <div className="text-2xl font-bold text-nucusoft-black">{service.price}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Heading level={4}>{service.title}</Heading>

                    <Text color="muted">{service.description}</Text>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-nucusoft-beige rounded-full"></div>
                          <Text variant="small" color="muted">
                            {feature}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="primary" className="w-full mt-6">
                    Solicitar Cotización
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default Services
