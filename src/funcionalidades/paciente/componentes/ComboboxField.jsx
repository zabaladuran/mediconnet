"use client"

import { useState } from "react"
import { useFormContext, Controller } from "react-hook-form"

const ComboboxField = ({ label, name, options, placeholder = "Seleccionar..." }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredOptions = options.filter((option) => option.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      <Controller
        name={name}
        control={control}
        render={({ field: { value = [], onChange } }) => (
          <div className="mt-1">
            {/* Input de búsqueda */}
            <div className="relative">
              <input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsOpen(true)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Dropdown */}
            {isOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {filteredOptions.length === 0 ? (
                  <div className="px-4 py-2 text-gray-500">No se encontraron resultados</div>
                ) : (
                  filteredOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => {
                        if (!value.includes(option)) {
                          onChange([...value, option])
                        }
                        setSearchTerm("")
                        setIsOpen(false)
                      }}
                      className={`px-4 py-2 cursor-pointer hover:bg-blue-50 flex items-center justify-between ${
                        value.includes(option) ? "bg-blue-100" : ""
                      }`}
                    >
                      <span>{option}</span>
                      {value.includes(option) && (
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Items seleccionados */}
            {value.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {value.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                  >
                    {item}
                    <button
                      type="button"
                      onClick={() => onChange(value.filter((v) => v !== item))}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      />

      {/* Click outside para cerrar */}
      {isOpen && <div className="fixed inset-0 z-0" onClick={() => setIsOpen(false)} />}

      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
    </div>
  )
}

export default ComboboxField
