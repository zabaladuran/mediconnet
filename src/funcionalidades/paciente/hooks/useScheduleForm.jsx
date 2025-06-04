import { useContext } from "react";
import { ScheduleFormContext } from "../contexto/schedule-provider";

export const useScheduleForm = () => {
  const contexto = useContext(ScheduleFormContext);
  if (contexto === null)
    throw new Error("useScheduleForm debe estar dentro del ScheduleProvider");
  return contexto;
};
