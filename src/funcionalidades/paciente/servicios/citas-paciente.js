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

export async function obtenerCitasDisponibles({
  nombreDoctor,
  cargoDoctor,
  fechaSugeridad,
}) {
  if (!token || typeof token != "string") throw Error("Ops, ocurrio un error.");
  if (!token || typeof token != "string") throw Error("Ops, ocurrio un error.");
  if (!token || typeof token != "string") throw Error("Ops, ocurrio un error.");
  try {
    return {
      exito: true,
      citasDisponibles: [
        { fecha: "12/12/12", nombreDoctor: "Garcia G.", cargo: "Enfermero" },
        { fecha: "12/12/12", nombreDoctor: "Garcia G.", cargo: "Enfermero" },
        { fecha: "12/12/12", nombreDoctor: "Garcia G.", cargo: "Enfermero" },
      ],
    };
  } catch {
    throw Error("Ops, error durante registro");
  }
}

export async function agendarCita({ cita }) {
  try {
    // DATA PIPE LINE VERIFIER AND INPUT DATA
    const pipeResponse = pipePropsAgendarCita({ cita: cita });
    if (!pipeResponse.valido) {
      throw Error(
        `Parametros invalidos en cita-paciente-servicios: ${pipeResponse.sms}`
      );
    }

    // FETCH TO BACKEND
    const { idCita, ubicacionPaciente, token, observaciones } =
      pipeResponse.cita;

    // FEEDBACK
    return {
      exito: true,
      sms: "Cita creada",
    };
  } catch (e) {
    // ERROR FEEDBACK
    return {
      exito: false,
      sms: e.message,
    };
  }
}
