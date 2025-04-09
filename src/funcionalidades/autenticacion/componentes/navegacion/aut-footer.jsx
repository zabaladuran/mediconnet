export function AutFooter() {
  return (
    <footer className="min-w-full flex justify-between border-t border-slate-200 px-6 py-6 items-center">
      <p>© 2024 MediconNet. Todos los derechos reservados</p>
      <ul className="flex justify-between space-x-5">
        <li>
          <a className="hover:underline" href="/terminos">
            Terminos
          </a>
        </li>
        <li>
          <a className="hover:underline" href="/ayuda">
            Ayuda
          </a>
        </li>
        <li>
          <a className="hover:underline" href="/privacidad">
            Privacidad
          </a>
        </li>
      </ul>
    </footer>
  );
}
