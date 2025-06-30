import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Cloud, Shield, Zap, Users } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Desarrollo Personalizado",
    description:
      "Creamos soluciones a medida que se adaptan perfectamente a las necesidades específicas de tu negocio.",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles Nativas",
    description:
      "Desarrollamos aplicaciones móviles para iOS y Android con rendimiento óptimo y experiencia de usuario excepcional.",
  },
  {
    icon: Cloud,
    title: "Soluciones en la Nube",
    description: "Implementamos arquitecturas escalables en la nube para garantizar disponibilidad y rendimiento 24/7.",
  },
  {
    icon: Shield,
    title: "Seguridad Avanzada",
    description: "Aplicamos las mejores prácticas de seguridad para proteger tus datos y los de tus usuarios.",
  },
  {
    icon: Zap,
    title: "Alto Rendimiento",
    description: "Optimizamos cada línea de código para obtener la máxima velocidad y eficiencia en tus aplicaciones.",
  },
  {
    icon: Users,
    title: "Soporte Continuo",
    description:
      "Brindamos mantenimiento y soporte técnico continuo para asegurar el funcionamiento óptimo de tus sistemas.",
  },
]

export default function Features() {
  return (
    <section className="w-full py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 font-medium">
              Nuestras Fortalezas
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">
              ¿Por qué elegir Nucúsoft?
            </h2>
            <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Combinamos experiencia técnica, metodologías ágiles y tecnologías de vanguardia para entregar soluciones
              que superan expectativas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
