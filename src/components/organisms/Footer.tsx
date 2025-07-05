"use client"

import type React from "react"
import { motion } from "framer-motion"
import {
  FaCode,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa"
import Text from "../atoms/Text"
import Image from "next/image"
import Logo from "../../assets/Logo.png"
import AnimatedSection from "../atoms/AnimatedSection"

const Footer: React.FC = () => {
  const footerLinks = {
    services: [
      { name: "Desarrollo Web a Medida", href: "#" },
      { name: "Apps Móviles", href: "#" },
      { name: "Sistemas Empresariales o CRM", href: "#" },
      { name: "Paquete Basico", href: "#" },
      { name: "E-commerce", href: "#" },
      { name: "Menú de restaurant", href: "#" },
    ],
    company: [
      { name: "Sobre Nosotros", href: "#about" },
      { name: "Nuestro Equipo", href: "#" },
      { name: "Carreras", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Casos de Éxito", href: "#" },
      { name: "Contacto", href: "#contact" },
    ],
    resources: [
      { name: "Documentación", href: "#" },
      { name: "Soporte", href: "#" },
      { name: "FAQ", href: "#faq" },
      { name: "Términos de Servicio", href: "#" },
      { name: "Política de Privacidad", href: "#" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61577296095846" }
  ]

  return (
    <footer className="bg-nucusoft-dark-gray text-nucusoft-white">
      <div className="container-custom p-8">
        <AnimatedSection>
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                className="flex items-center gap-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
              <Image
                src={Logo}
                alt="Log Nucusoft"
                width={200}
                style={{ objectFit: "cover" }}
                priority
              />
              </motion.div>
              <Text className="text-nucusoft-light-gray mb-6">
                Transformamos ideas en soluciones digitales innovadoras. Especialistas en desarrollo de software
                personalizado con más de 5 años de experiencia.
              </Text>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-nucusoft-light-gray">
                  <FaFacebook className="w-4 h-4" />
                  <Text variant="small" className="text-nucusoft-light-gray">NucúSoft</Text>
                </div>
                <div className="flex items-center gap-3 text-nucusoft-light-gray">
                  <FaPhone className="w-4 h-4" />
                  <Text variant="small" className="text-nucusoft-light-gray">+52 1 961 213 4751</Text>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Servicios</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-nucusoft-light-gray hover:text-nucusoft-beige transition-colors text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-nucusoft-light-gray hover:text-nucusoft-beige transition-colors text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Recursos</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-nucusoft-light-gray hover:text-nucusoft-beige transition-colors text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Social Links & Copyright */}
          <div className="border-t border-nucusoft-light-gray/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <Text variant="small" className="text-nucusoft-light-gray">
                  Síguenos:
                </Text>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-nucusoft-black rounded-lg flex items-center justify-center hover:bg-nucusoft-beige hover:text-nucusoft-black transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <social.icon className="w-4 h-4" />
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="text-center md:text-right">
                <Text variant="small" className="text-nucusoft-light-gray">
                  © {new Date().getFullYear()} Nucúsoft. Todos los derechos reservados.
                </Text>
                <Text variant="small" className="text-nucusoft-light-gray/60 mt-1">
                  Hecho con ❤️ en México
                </Text>
              </div>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer
