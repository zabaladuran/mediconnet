import {
  AutHeader,
  AutFooter,
  SignInForm,
  SignUpInfo,
} from "../../funcionalidades/autenticacion/componentes";

function SignInPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <AutHeader />

      <section className="flex flex-1 flex-col md:flex-row">
        {/* Columna izquierda: info visual (ahora visible en móvil también) */}
        <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r">
          <SignUpInfo />
        </div>

        {/* Columna derecha: formulario de inicio */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
            <SignInForm />
          </div>
        </div>
      </section>

      <AutFooter />
    </main>
  );
}

export default SignInPage;
