import React from 'react'
    import { FaCheckCircle, FaUserTie, FaHandshake, FaChartLine } from 'react-icons/fa'
    import BenefitCard from './BenefitCard'

    export default function Benefits() {
      return (
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Beneficios del Programa
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <BenefitCard
                icon={<FaCheckCircle className="h-12 w-12" />}
                title="Trabajo Legal"
                description="Obtén autorización para trabajar legalmente en EE.UU."
              />
              <BenefitCard
                icon={<FaUserTie className="h-12 w-12" />}
                title="Crecimiento Profesional"
                description="Accede a mejores oportunidades laborales"
              />
              <BenefitCard
                icon={<FaHandshake className="h-12 w-12" />}
                title="Redes de Negocios"
                description="Conecta con profesionales y empresas líderes"
              />
              <BenefitCard
                icon={<FaChartLine className="h-12 w-12" />}
                title="Estabilidad Laboral"
                description="Disfruta de seguridad y beneficios laborales"
              />
            </div>
          </div>
        </section>
      )
    }
