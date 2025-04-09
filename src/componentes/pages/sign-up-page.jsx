import {
  AutHeader,
  AutFooter,
  SignUpForm,
} from "../../funcionalidades/autenticacion/componentes";

function SignUpPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <AutHeader />
      <SignUpForm />
      <AutFooter />
    </main>
  );
}

export default SignUpPage;
