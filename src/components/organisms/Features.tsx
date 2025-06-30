"use client"

import type React from "react"
import { FaCode, FaMobile, FaCloud, FaShieldAlt, FaBolt, FaUsers } from "react-icons/fa"
import Heading from "../atoms/Heading"
import Text from "../atoms/Text"
import FeatureCard from "../molecules/FeatureCard"
import AnimatedSection from "../atoms/AnimatedSection"
import StaggerContainer from "../atoms/StaggerContainer"

const Features: React.FC = () => {
  const features = [
    {
      icon: <FaCode />,
      title: "Desarrollo Personalizado",
      description:
        "Creamos soluciones a medida que se adaptan perfectamente a las necesidades específicas de tu negocio.",
    },
    {
      icon: <FaMobile />,
      title: "Apps Móviles Nativas",
      description:
        "Desarrollamos aplicaciones móviles para iOS y Android con rendimiento óptimo y experiencia excepcional.",
    },
    {
      icon: <FaCloud />,
      title: "Soluciones en la Nube",
      description: "Implementamos arquitecturas escalables en la nube para garantizar disponibilidad 24/7.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Seguridad Avanzada",
      description: "Aplicamos las mejores prácticas de seguridad para proteger tus datos y los de tus usuarios.",
    },
    {
      icon: <FaBolt />,
      title: "Alto Rendimiento",
      description: "Optimizamos cada línea de código para obtener la máxima velocidad y eficiencia.",
    },
    {
      icon: <FaUsers />,
      title: "Soporte Continuo",
      description: "Brindamos mantenimiento y soporte técnico continuo para el funcionamiento óptimo.",
    },
  ]

  return (
    <section id="features" className="py-32 bg-nucusoft-light-gray/30">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-nucusoft-beige/20 rounded-full">
              <span className="text-sm font-medium text-nucusoft-black">Nuestras Fortalezas</span>
            </div>

            <Heading level={2}>¿Por qué elegir Nucúsoft?</Heading>

            <Text variant="lead" color="muted" className="max-w-3xl mx-auto">
              Combinamos experiencia técnica, metodologías ágiles y tecnologías de vanguardia para entregar soluciones
              que superan expectativas.
            </Text>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default Features
