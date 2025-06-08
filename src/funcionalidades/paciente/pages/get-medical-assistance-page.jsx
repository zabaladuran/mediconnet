import { GetMedicalAssistanceForm } from "../componentes/forms/get-medical-assistance-form";
import { ScheduleProvider } from "../contexto/schedule-provider";

export function GetMedicalAssistancePage() {
  return (
    <ScheduleProvider>
      <div className="w-full h-screen flex items-center justify-center">
        <GetMedicalAssistanceForm />
      </div>
    </ScheduleProvider>
  );
}
