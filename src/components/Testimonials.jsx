import React from 'react'
    import TestimonialCard from './TestimonialCard'

    export default function Testimonials() {
      const testimonials = [
        {
          name: "Juan Pérez",
          role: "Ingeniero de Software",
          testimonial: "Gracias al programa EB-3 pude cumplir mi sueño de trabajar en Silicon Valley."
        },
        {
          name: "María Gómez",
          role: "Gerente de Marketing",
          testimonial: "El soporte legal fue excepcional, todo el proceso fue muy claro y profesional."
        },
        {
          name: "Carlos Ruiz",
          role: "Empresario",
          testimonial: "Ahora tengo mi propio negocio en Miami gracias al programa EB-3."
        },
        {
          name: "Ana Martínez",
          role: "Diseñadora UX/UI",
          testimonial: "El proceso fue más rápido de lo esperado. ¡Totalmente recomendado!"
        },
        {
          name: "Luis González",
          role: "Consultor Financiero",
          testimonial: "La asesoría que recibí fue invaluable. Ahora trabajo en Wall Street."
        },
        {
          name: "Sofía Ramírez",
          role: "Arquitecta",
          testimonial: "Pude validar mi título y ahora trabajo en una firma reconocida en Nueva York."
        }
      ]

      return (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Testimonios de Éxito
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  role={testimonial.role}
                  testimonial={testimonial.testimonial}
                />
              ))}
            </div>
          </div>
        </section>
      )
    }
