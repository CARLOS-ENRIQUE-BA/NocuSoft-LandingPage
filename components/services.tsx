import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Database, Cog, ShoppingCart, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas y responsivas utilizando las últimas tecnologías como React, Next.js y Node.js.",
    features: ["Diseño Responsivo", "SEO Optimizado", "Alta Performance", "Seguridad Avanzada"],
    price: "Desde $2,500",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Desarrollo de aplicaciones nativas para iOS y Android con experiencia de usuario excepcional.",
    features: ["iOS & Android", "UI/UX Nativo", "Push Notifications", "Offline Support"],
    price: "Desde $4,000",
  },
  {
    icon: Database,
    title: "Sistemas Empresariales",
    description: "Soluciones ERP y CRM personalizadas para optimizar los procesos de tu empresa.",
    features: ["Integración APIs", "Reportes Avanzados", "Multi-usuario", "Cloud Ready"],
    price: "Desde $8,000",
  },
  {
    icon: Cog,
    title: "Automatización",
    description: "Automatización de procesos empresariales para aumentar la eficiencia y reducir costos.",
    features: ["Workflows", "Integraciones", "Monitoreo", "Escalabilidad"],
    price: "Desde $3,500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tiendas online completas con pasarelas de pago, gestión de inventario y analytics.",
    features: ["Pagos Seguros", "Gestión Stock", "Analytics", "Multi-moneda"],
    price: "Desde $3,000",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Dashboards y reportes inteligentes para la toma de decisiones basada en datos.",
    features: ["Dashboards", "Reportes Real-time", "Data Mining", "Visualización"],
    price: "Desde $5,000",
  },
]

export default function Services() {
  return (
    <section className="w-full py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 font-medium">
              Nuestros Servicios
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">
              Soluciones Tecnológicas Integrales
            </h2>
            <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos una amplia gama de servicios de desarrollo de software para cubrir todas las necesidades
              tecnológicas de tu empresa.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                <div className="text-2xl font-bold text-blue-600">{service.price}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-slate-600 leading-relaxed">{service.description}</CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-6">Solicitar Cotización</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
