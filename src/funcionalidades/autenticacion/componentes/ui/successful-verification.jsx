// components/EmailVerified.tsx
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmailVerified() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-6 border rounded-2xl shadow-sm text-center space-y-6">
        <h2 className="text-lg font-semibold">Verificación de Correo</h2>

        <div className="flex justify-center">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>

        <div>
          <p className="text-lg font-bold">¡Correo Verificado!</p>
          <p className="text-sm text-gray-600 mt-1">
            Tu dirección de correo electrónico ha sido verificada exitosamente. Ya puedes continuar usando nuestros servicios.
          </p>
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
          Continuar a la aplicación
        </Button>
      </div>
    </div>
  )
}
