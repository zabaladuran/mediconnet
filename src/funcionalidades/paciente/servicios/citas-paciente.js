// 11. Inserción de una nueva cita médica (Insertar-cita)
// 13. Mostrar citas disponibles por especialidad y fecha (Mostrar-citas-fecha)
// 14. Inserción de una cita médica por ID de horario (Inserta-cita-Id)
const API_URL = "https://api-mediconnet.onrender.com";

export async function obtenerEspecialidadesMedicas({ token }) {
  try {
    if (!token || typeof token != "string")
      throw Error(
        "No se recibio el parametro token en: obtenerEspecialidadesMedicas."
      );

    const res = await fetch(`${API_URL}/Api/Lista-Especialidades`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return {
      exito: true,
      sms: data.mensaje,
      listaEspecialidades: data.listaEspecialidades,
    };
  } catch (e) {
    console.error(e);
    return {
      exito: false,
      sms: "Error inesperado al obtener la lista de especialidades usuario",
    };
  }
}

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
