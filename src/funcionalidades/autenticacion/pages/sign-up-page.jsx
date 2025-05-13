import { AutHeader, AutFooter, SignUpForm, SignUpInfo } from "../componentes";

function SignUpPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <AutHeader />

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
        <SignUpInfo />
        <div className="bg-white p-6 md:p-10 flex items-center justify-center">
          <div className="w-full max-w-md">
            <SignUpForm />
          </div>
        </div>
      </div>

      <AutFooter />
    </main>
  );
}

export default SignUpPage;
