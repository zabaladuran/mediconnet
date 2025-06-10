export async function obtenerCitasDisponibles({ token, cargo, fechaSugerida }) {
  if (!token || typeof token != "string") throw Error("Ops, ocurrio un error.");
  try {
    return {
      exito: true,
      citasDisponibles: [
        {
          fecha: "2025-12-12",
          idCita: 1,
          nombreMedico: "Garcia G.",
          cargoProfesional: "Enfermero",
        },
        {
          fecha: "2025-05-12",
          idCita: 2,
          nombreMedico: "Garcia G.",
          cargoProfesional: "Enfermero",
        },
      ],
    };
  } catch {
    throw Error("Ops, error durante registro");
  }
}

export async function agendarCita({ idCita }) {
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
