"use client"
import { useFormularioPaciente } from "../hooks/useFormularioPaciente"
import { useFormContext, FormProvider } from "react-hook-form"
import ComboboxField from "../componentes/ComboboxField"

// Listas de opciones para los comboboxes
const ALERGIAS_GENERALES = [
  "Polen",
  "Ácaros del polvo",
  "Caspa de animales",
  "Mariscos",
  "Frutos secos",
  "Huevos",
  "Leche",
  "Soja",
  "Trigo",
  "Látex",
  "Picaduras de insectos",
  "Moho",
  "Perfumes",
  "Productos químicos",
  "Sol (fotosensibilidad)",
  "Frío",
  "Calor",
  "Níquel",
  "Colorantes alimentarios",
  "Conservantes",
]

const MEDICAMENTOS = [
  "Penicilina",
  "Amoxicilina",
  "Aspirina",
  "Ibuprofeno",
  "Paracetamol",
  "Diclofenaco",
  "Metamizol",
  "Cefalexina",
  "Ciprofloxacina",
  "Omeprazol",
  "Losartán",
  "Metformina",
  "Atorvastatina",
  "Levotiroxina",
  "Warfarina",
  "Insulina",
  "Prednisona",
  "Salbutamol",
  "Furosemida",
  "Captopril",
  "Enalapril",
  "Amlodipino",
  "Simvastatina",
  "Clopidogrel",
  "Digoxina",
]

function InputField({ label, name, type = "text", placeholder }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
    </div>
  )
}

function FormularioPaciente() {
  const { form, onSubmit } = useFormularioPaciente((datos) => {
    console.log("Formulario enviado:", datos) // Aquí después haces el fetch
  })

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-5xl mx-auto mt-10 p-8 bg-white shadow-md rounded-xl border grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <InputField name="personalId" label="Número de identificación" />
        <InputField name="cell" label="Teléfono" />
        <InputField name="direccion" label="Dirección" />

        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo de Identificación</label>
          <select {...form.register("tipoId")} className="mt-1 w-full px-4 py-2 border rounded-md">
            <option value="CC">Cédula de Ciudadanía</option>
            <option value="TI">Tarjeta de Identidad</option>
            <option value="CE">Cédula de Extranjería</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Grupo Sanguíneo</label>
          <select {...form.register("bloodGroup")} className="mt-1 w-full px-4 py-2 border rounded-md">
            <option value="">Seleccione grupo</option>
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        {/* Combobox para Alergias Generales */}
        <ComboboxField
          name="alergiasGeneral"
          label="Alergias Generales"
          options={ALERGIAS_GENERALES}
          placeholder="Buscar alergias generales..."
        />

        {/* Combobox para Alergias a Medicamentos */}
        <ComboboxField
          name="alergiasMedications"
          label="Alergias a Medicamentos"
          options={MEDICAMENTOS}
          placeholder="Buscar medicamentos..."
        />

        <div className="md:col-span-2 flex justify-end mt-6">
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-700"
          >
            💾 Guardar cambios
          </button>
        </div>
      </form>
    </FormProvider>
  )
}

export default FormularioPaciente
