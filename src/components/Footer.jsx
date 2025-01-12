import React from 'react'

    export default function Footer() {
      return (
        <footer className="bg-gray-900 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div>
                <h3 className="text-lg font-bold">Work and Business EB-3</h3>
                <p className="mt-4 text-sm text-gray-400">
                  Tu camino hacia el éxito profesional en Estados Unidos.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Enlaces Rápidos</h4>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Política de Privacidad</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Términos y Condiciones</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Contacto</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Contacto</h4>
                <p className="mt-4 text-sm text-gray-400">
                  Email: info@workbusinesseb3.com<br />
                  Teléfono: +1 (800) 123-4567
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Redes Sociales</h4>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                  <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              © 2023 Work and Business EB-3. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      )
    }
