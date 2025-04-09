export function AutHeader() {
  return (
    <header className="min-w-full flex p-6 items-center justify-between border-b border-slate-200">
      <h1 className="text-2xl font-bold text-green-500">Mediconnet</h1>
      <ul>
        <li>
          <a className="font-bold hover:underline" href="/home">
            Home
          </a>
        </li>
      </ul>
    </header>
  );
}
