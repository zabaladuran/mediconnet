export function SignUpInfo() {
  return (
    <div className="flex flex-col gap-4 p-6 md:p-10 border-r">
      <div className="flex flex-1 flex-col justify-between">
        <div className="my-8">
          <h1 className="text-3xl font-bold mb-2">Bienvenido a MediconNet</h1>
          <p className="text-muted-foreground">
            Tu plataforma integral de servicios médicos
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Agenda citas médicas fácilmente",
              "Acceso seguro a tu historial clínico",
              "Recordatorios automáticos",
              "Gestión de medicamentos",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <img
            src="/placeholder.svg?height=300&width=400"
            alt="Doctor usando smartphone"
            className="rounded-lg object-cover w-full"
          />
        </div>

        <div className="text-xs text-muted-foreground">
          © 2024 MediconNet. Todos los derechos reservados
        </div>
      </div>
    </div>
  );
}
