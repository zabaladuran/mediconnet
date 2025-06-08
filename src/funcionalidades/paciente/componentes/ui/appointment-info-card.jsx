import { Card, CardContent } from "../../../../components/ui/card";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { UserCircle, Calendar, Clock } from "lucide-react";
export function AppointmentInfoCard({
  nombreMedico,
  horaFinal,
  horaInicio,
  fechaSugerida,
}) {
  return (
    <div className="flex items-center w-full h-[70px] border border-gray-200 rounded-lg px-4 py-3">
      <div className="bg-green-100 rounded-full p-2 mr-4">
        <UserCircle className="w-7 h-7 text-green-600" />
      </div>
      <div className="flex-1">
        <p className="text-gray-900">Dr. {nombreMedico}</p>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-center gap-1 text-gray-700 font-medium">
          <Calendar className="w-4 h-4 mr-1" />
          {fechaSugerida || "Fecha Sugerida"}
        </div>
        <span className="flex items-center text-xs text-gray-400 mt-1">
          <Clock className="w-3 h-3 mr-1" />
          {horaInicio} - {horaFinal}
        </span>
      </div>
    </div>
  );
}
