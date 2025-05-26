import { EmailVerificationForm } from "../componentes";
import { useQueryCodeVerification } from "../hooks";
import { useEffect, useRef } from "react";
import { XCircle, CheckCircle } from "lucide-react";
export default function EmailVerificationPage() {
  const { sendCode, validarCodigo, usuarioFueAut, exitoValidacion } =
    useQueryCodeVerification();
  const codigoFueEnviado = useRef(false);
  useEffect(() => {
    !codigoFueEnviado.current && sendCode();
    codigoFueEnviado.current = true;
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
      </div>
    </div>
  );
}
