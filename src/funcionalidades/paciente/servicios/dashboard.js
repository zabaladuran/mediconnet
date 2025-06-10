export async function obtenerProximasCitas() {
  try {
    const response = await fetch("/api/paciente/ultimas-citas");
    return {
      exito: true,
      data: [
        {
          nombreMedico: "Carlos Ruiz",
          horaInicio: "9:00 am",
          horaFinal: "10:00 am",
          cargo: "Enfermero",
          fecha: "12-12-12",
        },
        {
          nombreMedico: "Carlos Ruiz",
          horaInicio: "9:00 am",
          horaFinal: "10:00 am",
          cargo: "Enfermero",
          fecha: "12-12-12",
        },
        {
          nombreMedico: "Carlos Ruiz",
          horaInicio: "9:00 am",
          horaFinal: "10:00 am",
          cargo: "Enfermero",
          fecha: "12-12-12",
        },
        {
          nombreMedico: "Carlos Ruiz",
          horaInicio: "9:00 am",
          horaFinal: "10:00 am",
          cargo: "Enfermero",
          fecha: "12-12-12",
        },
      ],
    };
  } catch (error) {
    console.error("Error en obtenerUltimasCitas:", error);
  }
}

import { pipePropsAgendarCita } from "../zod";
export async function obtenerProximasCitas({ token }) {
  if (!token || typeof token != "string") throw Error("Ops, ocurrio un error.");
  try {
    return {
      exito: true,
      proximasCitas: [
        { fecha: "12/12/12", nombreDoctor: "Garcia G.", cargo: "Enfermero" },
        { fecha: "12/12/12", nombreDoctor: "Garcia G.", cargo: "Enfermero" },
      ],
    };
  } catch {
    throw Error("Ops, error durante registro");
  }
}

export async function obtenerCitasPendientes({ token }) {
  if (!token || typeof token != "string") throw Error("Ops, ocurrio un error.");
  try {
    return {
      exito: true,
      citasPendientes: [
        { fecha: "12/12/12", nombreDoctor: "Garcia G.", cargo: "Enfermero" },
      ],
    };
  } catch {
    throw Error("Ops, error durante registro");
  }
}

export async function obtenerHistorialDeCitas({ token }) {
  if (!token || typeof token != "string") throw Error("Ops, ocurrio un error.");
  try {
    return {
      exito: true,
      historialDeCitas: [
        { fecha: "12/12/12", nombreDoctor: "Garcia G.", cargo: "Enfermero" },
        { fecha: "12/12/12", nombreDoctor: "Garcia G.", cargo: "Enfermero" },
      ],
    };
  } catch {
    throw Error("Ops, error durante registro");
  }
}
export async function obtenerUltimaVisita({ token }) {
  if (!token || typeof token != "string") throw Error("Ops, ocurrio un error.");
  try {
    return {
      exito: true,
      ultimaVisita: {
        fecha: "12/12/12",
        nombreDoctor: "Garcia G.",
        cargo: "Enfermero",
      },
    };
  } catch {
    throw Error("Ops, error durante registro");
  }
}

export async function obtenerProximaVisita({ token }) {
  if (!token || typeof token != "string") throw Error("Ops, ocurrio un error.");
  try {
    return {
      exito: true,
      proximaVisita: {
        fecha: "12/12/12",
        nombreDoctor: "Garcia G.",
        cargo: "Enfermero",
      },
    };
  } catch {
    throw Error("Ops, error durante registro");
  }
}
