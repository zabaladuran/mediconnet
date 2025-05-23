import { EmailVerificationForm } from "../componentes";
import { useQueryCodeVerification } from "../hooks";
import { useEffect } from "react";
export default function EmailVerificationPage() {
  const { sendCode } = useQueryCodeVerification();
  useEffect(() => {
    sendCode();
  }, []);

  return (
    <div>
      <EmailVerificationForm />
      <p onClick={() => sendCode()} className="hover:underline sm">
        Renviar codigo
      </p>
    </div>
  );
}
