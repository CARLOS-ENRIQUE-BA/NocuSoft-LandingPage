import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Desarrollo Web", href: "#" },
    { name: "Apps Móviles", href: "#" },
    { name: "Sistemas Empresariales", href: "#" },
    { name: "E-commerce", href: "#" },
    { name: "Automatización", href: "#" },
    { name: "Business Intelligence", href: "#" },
  ],
  company: [
    { name: "Sobre Nosotros", href: "#" },
    { name: "Nuestro Equipo", href: "#" },
    { name: "Carreras", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Casos de Éxito", href: "#" },
    { name: "Contacto", href: "#" },
  ],
  resources: [
    { name: "Documentación", href: "#" },
    { name: "Soporte", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Términos de Servicio", href: "#" },
    { name: "Política de Privacidad", href: "#" },
    { name: "Cookies", href: "#" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold">Nucúsoft</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Transformamos ideas en soluciones digitales innovadoras. Especialistas en desarrollo de software
              personalizado con más de 5 años de experiencia.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contacto@nucusoft.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+52 (55) 1234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">CDMX, México</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
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
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
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
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <span className="text-slate-400 text-sm">Síguenos:</span>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Nucúsoft. Todos los derechos reservados.
              </p>
              <p className="text-slate-500 text-xs mt-1">Hecho con ❤️ en México</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
