import { EmailVerificationForm } from "../componentes";
import { useQueryCodeVerification } from "../hooks";
import { useEffect } from "react";
export default function EmailVerificationPage() {
  const { sendCode, validarCodigo, usuarioFueAut } = useQueryCodeVerification();
  useEffect(() => {
    sendCode();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Verifica tu correo</h1>
        <div className="flex justify-center">
          <EmailVerificationForm validarCodigoQuery={validarCodigo} />
        </div>
        <p
          onClick={sendCode}
          className="mt-4 text-blue-600 hover:underline cursor-pointer text-sm"
        >
          Reenviar código
        </p>

        {usuarioFueAut && (
          <div className="mt-6 flex items-center justify-center text-green-600">
            <CheckCircle className="w-6 h-6 mr-2" />
            <span className="text-base font-medium">Correo verificado</span>
          </div>
        )}

        {usuarioFueAut && exito === "success" && (
          <div className="mt-4 text-green-600 flex justify-center items-center gap-2">
            <CheckCircle size={20} />
            <span>Correo verificado</span>
          </div>
        )}

        {usuarioFueAut && exito === "error" && (
          <div className="mt-4 text-red-600 flex justify-center items-center gap-2">
            <XCircle size={20} />
            <span>Código incorrecto</span>
          </div>
        )}
      </div>
    </div>
  );
}
