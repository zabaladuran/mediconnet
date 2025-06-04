import { GetMedicalAssistanceForm } from "../componentes/forms/get-medical-assistance-form";
import { ScheduleProvider } from "../contexto/schedule-provider";

export function GetMedicalAssistancePage() {
  return (
    <ScheduleProvider>
      <GetMedicalAssistanceForm />;
    </ScheduleProvider>
  );
}
