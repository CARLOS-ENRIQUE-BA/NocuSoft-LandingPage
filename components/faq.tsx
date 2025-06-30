import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar una aplicación web?",
    answer:
      "El tiempo de desarrollo varía según la complejidad del proyecto. Una aplicación web básica puede tomar entre 4-8 semanas, mientras que proyectos más complejos pueden requerir 3-6 meses. Durante la consulta inicial, proporcionamos un cronograma detallado basado en tus requisitos específicos.",
  },
  {
    question: "¿Ofrecen soporte y mantenimiento después del lanzamiento?",
    answer:
      "Sí, ofrecemos planes de soporte y mantenimiento continuo que incluyen actualizaciones de seguridad, corrección de errores, optimizaciones de rendimiento y soporte técnico. Nuestros planes van desde soporte básico hasta soporte premium 24/7.",
  },
  {
    question: "¿Qué tecnologías utilizan para el desarrollo?",
    answer:
      "Utilizamos tecnologías modernas y probadas como React, Next.js, Node.js, Python, React Native para móviles, y bases de datos como PostgreSQL y MongoDB. Seleccionamos la stack tecnológica más adecuada según las necesidades específicas de cada proyecto.",
  },
  {
    question: "¿Pueden trabajar con nuestro equipo interno de IT?",
    answer:
      "Absolutamente. Tenemos experiencia colaborando con equipos internos de IT. Podemos trabajar como una extensión de tu equipo, proporcionando expertise especializado, o liderar el proyecto completo según tus preferencias y necesidades.",
  },
  {
    question: "¿Cómo manejan la seguridad de los datos?",
    answer:
      "La seguridad es nuestra prioridad. Implementamos las mejores prácticas de seguridad incluyendo encriptación de datos, autenticación segura, auditorías de seguridad regulares, y cumplimiento con estándares como GDPR. Todos nuestros desarrolladores están certificados en prácticas de desarrollo seguro.",
  },
  {
    question: "¿Ofrecen garantía en sus desarrollos?",
    answer:
      "Sí, ofrecemos garantía de 6 meses en todos nuestros desarrollos que cubre corrección de errores y problemas relacionados con la funcionalidad especificada. Además, proporcionamos documentación completa y capacitación para tu equipo.",
  },
  {
    question: "¿Cuál es su proceso de desarrollo?",
    answer:
      "Seguimos metodologías ágiles con entregas incrementales. Nuestro proceso incluye: análisis de requisitos, diseño de arquitectura, desarrollo iterativo, pruebas continuas, y despliegue. Mantenemos comunicación constante con el cliente a través de reuniones semanales y demos regulares.",
  },
  {
    question: "¿Pueden migrar nuestro sistema actual a una nueva plataforma?",
    answer:
      "Sí, tenemos amplia experiencia en migración de sistemas legacy a plataformas modernas. Realizamos un análisis detallado de tu sistema actual, planificamos la migración para minimizar el tiempo de inactividad, y aseguramos que no se pierda ningún dato durante el proceso.",
  },
]

export default function FAQ() {
  return (
    <section className="w-full py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 font-medium">
              Preguntas Frecuentes
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">Resolvemos tus dudas</h2>
            <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de desarrollo de software.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border-0 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
