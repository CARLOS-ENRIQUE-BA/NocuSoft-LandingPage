import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fillRule='evenodd'><g fill='%239C92AC' fillOpacity='0.1'><circle cx='30' cy='30' r='2'/></g></g></svg>")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-block rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-200 border border-blue-500/30">
              ¿Listo para comenzar?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Transformemos tu idea en realidad
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a llevar tu proyecto al siguiente nivel.
              Nuestro equipo de expertos está listo para convertir tu visión en una solución tecnológica exitosa.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 flex-1 py-4 text-lg font-semibold">
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Consulta
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 flex-1 py-4 text-lg bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contactar Ahora
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">24h</div>
              <div className="text-slate-300">Respuesta garantizada</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-slate-300">Consulta gratuita</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-slate-300">Años de experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
