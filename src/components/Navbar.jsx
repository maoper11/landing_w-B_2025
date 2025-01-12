import React, { useState } from 'react'
    import { FaBars, FaTimes } from 'react-icons/fa'

    export default function Navbar() {
      const [isOpen, setIsOpen] = useState(false)

      const toggleMenu = () => setIsOpen(!isOpen)

      return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Work and Business EB-3 Logo"
                  className="h-10"
                />
              </div>

              <div className="hidden md:flex space-x-8">
                <a href="#programa" className="text-gray-700 hover:text-primary transition-colors">
                  Programa
                </a>
                <a href="#beneficios" className="text-gray-700 hover:text-primary transition-colors">
                  Beneficios
                </a>
                <a href="#proceso" className="text-gray-700 hover:text-primary transition-colors">
                  Proceso
                </a>
                <a href="#testimonios" className="text-gray-700 hover:text-primary transition-colors">
                  Testimonios
                </a>
                <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">
                  FAQ
                </a>
              </div>

              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-primary focus:outline-none"
                >
                  {isOpen ? (
                    <FaTimes className="h-6 w-6" />
                  ) : (
                    <FaBars className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a
                    href="#programa"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                  >
                    Programa
                  </a>
                  <a
                    href="#beneficios"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                  >
                    Beneficios
                  </a>
                  <a
                    href="#proceso"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                  >
                    Proceso
                  </a>
                  <a
                    href="#testimonios"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                  >
                    Testimonios
                  </a>
                  <a
                    href="#faq"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                  >
                    FAQ
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>
      )
    }
