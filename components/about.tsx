import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"

const achievements = [
  "Más de 200 proyectos completados exitosamente",
  "Equipo de desarrolladores certificados",
  "Metodologías ágiles y entregas puntuales",
  "Soporte técnico 24/7 para nuestros clientes",
]

export default function About() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-3"></div>
            <Image
              src="/placeholder.svg?height=500&width=600"
              width={600}
              height={500}
              alt="Equipo Nucúsoft"
              className="relative z-10 mx-auto aspect-[6/5] overflow-hidden rounded-3xl object-cover shadow-xl"
            />
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 font-medium">
                Sobre Nucúsoft
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
                Innovación y Excelencia en
                <span className="text-blue-600"> Desarrollo de Software</span>
              </h2>
              <p className="text-slate-600 md:text-lg leading-relaxed">
                Somos una empresa especializada en el desarrollo de soluciones tecnológicas personalizadas. Nuestro
                equipo de expertos combina creatividad, experiencia técnica y las últimas tecnologías para transformar
                ideas en productos digitales exitosos.
              </p>
              <p className="text-slate-600 md:text-lg leading-relaxed">
                Desde aplicaciones web hasta sistemas empresariales complejos, nos enfocamos en entregar soluciones que
                no solo cumplan con los requisitos técnicos, sino que también generen valor real para nuestros clientes.
              </p>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700">{achievement}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Conocer Más
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
              >
                Ver Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
