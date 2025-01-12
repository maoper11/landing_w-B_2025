import React from 'react'

    export default function ProcessStep({ number, title, details }) {
      return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out h-full">
          <div className="p-5">
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                {number}
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {details}
            </p>
          </div>
        </div>
      )
    }
