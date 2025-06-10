import FormularioPaciente from "../formulario-paciente/FormularioPaciente"

const ConfiguracionPaciente = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-white shadow-md rounded-xl border">
      <h2 className="text-xl font-semibold mb-6">Información Personal</h2>
      <FormularioPaciente />
    </div>
  )
}

export default ConfiguracionPaciente
