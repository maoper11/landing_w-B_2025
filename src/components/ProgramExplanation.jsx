import React from 'react'

    export default function ProgramExplanation() {
      return (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              ¿Qué es el Programa Work and Business EB-3?
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  El programa Work and Business EB-3 es una oportunidad única para profesionales
                  calificados que desean trabajar legalmente en los Estados Unidos.
                </p>
                <p className="text-lg text-gray-600">
                  Ofrecemos soporte completo desde la aplicación hasta la obtención de la visa,
                  incluyendo asesoría legal y administrativa especializada.
                </p>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/-_97vMy9RQ8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      )
    }
