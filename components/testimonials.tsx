import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "María González",
    position: "CEO, TechStart",
    company: "TechStart Solutions",
    content:
      "Nucúsoft transformó completamente nuestra visión en una aplicación web excepcional. Su profesionalismo y atención al detalle superaron nuestras expectativas. El equipo es altamente competente y siempre dispuesto a ir más allá.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Carlos Mendoza",
    position: "Director de IT",
    company: "Innovate Corp",
    content:
      "El sistema ERP que desarrollaron para nosotros ha optimizado todos nuestros procesos. La implementación fue perfecta y el soporte post-lanzamiento ha sido excepcional. Definitivamente recomiendo sus servicios.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ana Rodríguez",
    position: "Fundadora",
    company: "E-Shop Plus",
    content:
      "Nuestra tienda online desarrollada por Nucúsoft ha incrementado nuestras ventas en un 300%. La plataforma es robusta, segura y fácil de administrar. Excelente trabajo en todos los aspectos.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Roberto Silva",
    position: "Gerente General",
    company: "LogiTrans",
    content:
      "La aplicación móvil que crearon para nuestros conductores ha revolucionado nuestras operaciones. Es intuitiva, rápida y ha mejorado significativamente la comunicación con nuestro equipo en campo.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 font-medium">
              Testimonios
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">
              Lo que dicen nuestros clientes
            </h2>
            <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              La satisfacción de nuestros clientes es nuestra mayor recompensa. Conoce sus experiencias trabajando con
              Nucúsoft.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-0 shadow-lg bg-slate-50 hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        width={60}
                        height={60}
                        alt={testimonial.name}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-slate-900">{testimonial.name}</div>
                        <div className="text-sm text-slate-600">{testimonial.position}</div>
                        <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
