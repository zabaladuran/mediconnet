import { Calendar } from "lucide-react";
import { SignInSvg } from "../../svg";

export function SignUpForm() {
  return (
    <main className="flex ">
      <section className="flex-col space-y-3 p-6 hidden lg:flex w-1/2">
        <div className="flex-col space-y-2">
          <h1 className="font-bold text-3xl">Bienvenido a MediconNet</h1>
          <h4>Tu plataforma integral de servicios médicos</h4>
        </div>
        <SignUpList>
          <ServiceItem
            icon={<Calendar />}
            msg={"Agenda citas médicas fácilmente"}
          />
          <ServiceItem
            icon={<Calendar />}
            msg={"Agenda citas médicas fácilmente"}
          />
          <ServiceItem
            icon={<Calendar />}
            msg={"Agenda citas médicas fácilmente"}
          />
          <ServiceItem
            icon={<Calendar />}
            msg={"Agenda citas médicas fácilmente"}
          />
        </SignUpList>
        <SignInSvg className="w-[400px]" />
      </section>
      <section className="w-1/2">
        <h1>Crear Una Cuenta</h1>
      </section>
    </main>
  );
}

function SignUpList({ children }) {
  return <ul className="flex-col space-y-4">{children}</ul>;
}

function ServiceItem({ icon, msg }) {
  return (
    <li className="flex justify-around">
      {icon}
      <p>{msg}</p>
    </li>
  );
}
