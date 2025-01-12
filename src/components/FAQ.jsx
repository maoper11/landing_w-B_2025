import React, { useState } from 'react'

    export default function FAQ() {
      const faqItems = [
        {
          question: "¿Cuáles son los requisitos para aplicar?",
          answer: "Debes tener una oferta de trabajo válida en EE.UU. y cumplir con los requisitos de educación o experiencia."
        },
        {
          question: "¿Cuánto tiempo toma el proceso?",
          answer: "El proceso completo puede tomar entre 6 y 12 meses, dependiendo de cada caso."
        },
        {
          question: "¿Puedo llevar a mi familia?",
          answer: "Sí, tu cónyuge e hijos menores de 21 años pueden obtener visas derivadas."
        },
        {
          question: "¿Qué tipo de trabajos califican?",
          answer: "Cualquier trabajo que requiera al menos una licenciatura o su equivalente en experiencia."
        }
      ]

      return (
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
              Preguntas Frecuentes
            </h2>
            <div className="max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isFirst={index === 0}
                />
              ))}
            </div>
          </div>
        </section>
      )
    }

    function FAQItem({ question, answer, isFirst }) {
      const [isOpen, setIsOpen] = useState(isFirst)

      return (
        <div className="border-b border-gray-200 last:border-b-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full py-5 text-left flex items-center justify-between focus:outline-none hover:bg-gray-50 rounded-lg px-4 transition-colors duration-300"
          >
            <span className="text-lg font-medium text-gray-900">
              {question}
            </span>
            <svg
              className={`w-6 h-6 text-primary transform transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-40' : 'max-h-0'
            }`}
          >
            <div className="pb-5 text-gray-600 px-4">
              {answer}
            </div>
          </div>
        </div>
      )
    }
