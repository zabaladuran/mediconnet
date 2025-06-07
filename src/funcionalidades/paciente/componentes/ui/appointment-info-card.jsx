import { Card, CardContent } from "../../../../components/ui/card";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { CircleUser, CalendarIcon, ClockIcon } from "lucide-react";
export function AppointmentInfoCard({
  nombreMedico,
  horaFinal,
  horaInicio,
  fechaSugerida,
}) {
  return (
    <Card className="w-full h-[70px] shadow-sm">
      <CardContent className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-1 bg-amber-400">
          <Avatar className="bg-green-100 text-green-700">
            <AvatarFallback>
              <CircleUser className="size-12" />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-base text-gray-800">
              Dr. {nombreMedico}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end space-y-1 text-gray-600 bg-amber-400">
          <div className="flex items-center space-x-1 text-sm">
            <CalendarIcon className="h-4 w-4 text-gray-400" />
            <span>{fechaSugerida || "Fecha sugerida"}</span>
          </div>
          <div className="flex flex-row items-center space-x-1 text-sm">
            <ClockIcon className="h-4 w-4 text-gray-400" />
            <span>
              {horaInicio} - {horaFinal}
            </span>{" "}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
