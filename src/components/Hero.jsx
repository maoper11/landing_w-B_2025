import React from 'react'

    export default function Hero() {
      return (
        <section className="bg-primary">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between min-h-[600px] py-12">
              <div className="text-white lg:w-1/2 lg:pr-8">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Obtén tu Visa EB-3 y Trabaja Legalmente en EE.UU.
                </h1>
                <p className="mt-6 text-lg md:text-xl">
                  Programa Work and Business EB-3 - Tu camino hacia el éxito profesional
                </p>
              </div>

              <div className="w-full lg:w-1/2 lg:max-w-md mt-12 lg:mt-0">
                <form className="bg-white rounded-lg shadow-xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    ¡Regístrate Ahora!
                  </h2>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="w-full rounded-lg border border-gray-200 p-3 text-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Correo"
                      className="w-full rounded-lg border border-gray-200 p-3 text-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className="w-full rounded-lg border border-gray-200 p-3 text-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
										<input
                      type="text"
                      placeholder="Ocupación o Profesión"
                      className="w-full rounded-lg border border-gray-200 p-3 text-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full rounded-lg bg-secondary py-3 font-semibold text-white hover:bg-primary-700 transition-colors duration-200"
                  >
                    Enviar Registro
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )
    }
