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

export async function obtenerCitasDisponibles({
  token,
  especialidad,
  fechaSugerida,
}) {
  try {
    console.log(especialidad, fechaSugerida);
    const res = await fetch(`${API_URL}/Api/Mostrar-citas-fecha`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        especialidad: especialidad,
        fecha: fechaSugerida,
      }),
    });
    const data = await res.json();
    console.log(data);
    return {
      exito: true,
      sms: data.mensaje,
      citasDisponibles: data.lista,
    };
  } catch (e) {
    console.error(e);
    return {
      exito: false,
      sms: "Error inesperado al obtener la lista de citas disponibles",
    };
  }
}

export async function agendarCita({ token, idCita, observacioenes }) {
  try {
    const res = await fetch(`${API_URL}/Api/Inserta-cita-Id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: idCita,
        motivoConsulta: observacioenes,
      }),
    });
    const data = await res.json();
    console.log(data, token, idCita, observacioenes);
    return {
      exito: true,
      sms: data.mensaje,
    };
  } catch (e) {
    console.error(e);
    return {
      exito: false,
      sms: "Error inesperado al obtener la lista de citas disponibles",
    };
  }
}
