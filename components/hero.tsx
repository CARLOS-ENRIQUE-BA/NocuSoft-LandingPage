import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fillRule='evenodd'><g fill='%239C92AC' fillOpacity='0.1'><circle cx='30' cy='30' r='2'/></g></g></svg>")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-200 border border-blue-500/30">
                🚀 Innovación Tecnológica
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Transformamos Ideas en
                <span className="text-blue-400"> Soluciones Digitales</span>
              </h1>
              <p className="max-w-[600px] text-xl text-slate-300 leading-relaxed">
                En Nucúsoft desarrollamos software personalizado, aplicaciones web y móviles que impulsan el crecimiento
                de tu negocio con tecnología de vanguardia.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Comenzar Proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Demo
              </Button>
            </div>
            <div className="flex items-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>+200 Proyectos Exitosos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>5 Años de Experiencia</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
            <Image
              src="/placeholder.svg"
              width={500}
              height={600}
              alt="Nucúsoft - Desarrollo de Software"
              className="relative z-10 mx-auto aspect-[5/6] overflow-hidden rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
