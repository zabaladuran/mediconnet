import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function formatDateToString(dateObject) {
  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Los meses son base 0, por eso se suma 1. padStart asegura 2 dígitos.
  const day = dateObject.getDate().toString().padStart(2, "0"); // padStart asegura 2 dígitos.

  return `${year}-${month}-${day}`;
}
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
