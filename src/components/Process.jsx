import React from 'react'
    import ProcessStep from './ProcessStep'

    export default function Process() {
      const steps = [
        {
          title: "Entrevista Inicial y Evaluación",
          details: "Recopilación de información y evaluación de elegibilidad por comité de expertos."
        },
        {
          title: "Firma de Contrato",
          details: "Formalización de la aceptación con contrato y pago inicial en 10 días hábiles."
        },
        {
          title: "Certificación Laboral (PERM)",
          details: "Solicitud al DOL para demostrar necesidad de contratación extranjera (12-24 meses)."
        },
        {
          title: "Petición I-140",
          details: "Presentación al USCIS para permiso de residencia (9-12 meses, reducible con Premium Processing)."
        },
        {
          title: "Entrevista Consular",
          details: "Validación de documentos y emisión de visa de residente permanente."
        },
        {
          title: "Inicio Laboral",
          details: "Acuerdo de fecha de inicio con el empleador en EE. UU."
        }
      ]

      return (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
              Proceso Paso a Paso
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <ProcessStep
                  key={index}
                  number={index + 1}
                  title={step.title}
                  details={step.details}
                />
              ))}
            </div>
          </div>
        </section>
      )
    }
