import React from 'react'

    export default function TestimonialCard({ name, role, testimonial }) {
      return (
        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
          <div className="mb-4 h-16 w-16 rounded-full bg-gray-200"></div>
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="mt-4 text-gray-600">"{testimonial}"</p>
        </div>
      )
    }
