import React from 'react'

    export default function BenefitCard({ icon, title, description }) {
      return (
        <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
          <div className="mx-auto mb-4 text-primary">{icon}</div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      )
    }
