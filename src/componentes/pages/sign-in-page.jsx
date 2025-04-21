import {
  AutHeader,
  AutFooter,
  SignInForm,
} from "../../funcionalidades/autenticacion/componentes";

function SignInPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <AutHeader />
      <SignInForm />
      <AutFooter />
    </main>
  );
}

export default SignInPage;
