import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function Contact() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 font-medium">
              Contacto
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">Hablemos de tu proyecto</h2>
            <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Estamos aquí para ayudarte. Contáctanos y comencemos a trabajar juntos en tu próxima solución tecnológica.
            </p>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Envíanos un mensaje</h3>
              <p className="text-slate-600">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-slate-700">
                    Nombre *
                  </label>
                  <Input id="firstName" placeholder="Tu nombre" className="border-slate-300 focus:border-blue-500" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-slate-700">
                    Apellido *
                  </label>
                  <Input id="lastName" placeholder="Tu apellido" className="border-slate-300 focus:border-blue-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="border-slate-300 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="border-slate-300 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-slate-700">
                  Empresa
                </label>
                <Input
                  id="company"
                  placeholder="Nombre de tu empresa"
                  className="border-slate-300 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="min-h-[120px] border-slate-300 focus:border-blue-500"
                />
              </div>

              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                <Send className="mr-2 h-4 w-4" />
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Información de contacto</h3>
              <p className="text-slate-600">
                También puedes contactarnos directamente a través de cualquiera de estos medios.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                      <p className="text-slate-600">contacto@nucusoft.com</p>
                      <p className="text-slate-600">ventas@nucusoft.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Teléfono</h4>
                      <p className="text-slate-600">+52 (55) 1234-5678</p>
                      <p className="text-slate-600">+52 (55) 8765-4321</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Oficina</h4>
                      <p className="text-slate-600">
                        Av. Insurgentes Sur 1234
                        <br />
                        Col. Del Valle, CDMX
                        <br />
                        México, 03100
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Horarios</h4>
                      <p className="text-slate-600">
                        Lunes - Viernes: 9:00 - 18:00
                        <br />
                        Sábados: 10:00 - 14:00
                        <br />
                        Domingos: Cerrado
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
