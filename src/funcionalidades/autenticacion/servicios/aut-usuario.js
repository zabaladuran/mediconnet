const API_URL = "https://api-mediconnet.onrender.com";

// ===========================
// ENDPOINTS REALES
// ===========================

// Registro de usuarios
export async function signUpUsuario({
  email,
  pass,
  nombreCompleto,
  tipoUsuario,
}) {
  if (!email || !pass || !nombreCompleto || !tipoUsuario) {
    throw Error(
      "No fueron dados los parametros minimos necesarios en signUpUsuario"
    );
  }

  const res = await fetch(`${API_URL}/Api/Registro`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: nombreCompleto,
      email,
      pass,
      tipo: tipoUsuario,
    }),
  });

  const data = await res.json();

  if (data.error) {
    return {
      exito: false,
      sms: data.error,
    };
  } else {
    return {
      exito: true,
      token: data.token,
      verificado: false,
    };
  }
}

// Enviar código de verificación
export async function enviarCorreoDeVerificacion({ token }) {
  try {
    const res = await fetch(`${API_URL}/Api/Registro/Enviar-codigo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // CAMBIO IMPORTANTE: Usar el token de sesión
      },
    });

    const data = await res.json();

    if (!res.ok || data.error || data.message) {
      return { exito: false, sms: data.error || data.message };
    }

    return {
      exito: true,
      tokenCodigo: data.tokenCodigo,
      sms: data.mensaje,
    };
  } catch (e) {
    return { exito: false, sms: "Error inesperado al enviar el código" };
  }
}

// Confirmar código
export async function validarCodigoDeAutenticacion({
  token,
  tokenCodigo,
  codigo,
}) {
  try {
    const res = await fetch(`${API_URL}/Api/Registro/Confirmar-codigo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // token de sesión
        TokenCodigo: tokenCodigo, // token del código
      },
      body: JSON.stringify({ codigo }),
    });

    const data = await res.json();

    if (!res.ok || data.error || data.message) {
      return { exito: false, sms: data.error || data.message };
    }

    return { exito: true, sms: "Código fue autenticado" };
  } catch (e) {
    return { exito: false, sms: "Error inesperado al validar código" };
  }
}

// Inicio de sesión
export async function signInUsuario({ email, pass }) {
  // VALIDACION DE ENTRADAS
  if (
    !email ||
    !pass ||
    typeof email !== "string" ||
    typeof pass !== "string"
  ) {
    throw Error("Campos inválidos");
  }

  // PETICION AL BACKEND
  const res = await fetch(`${API_URL}/Api/Login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, pass }),
  });

  const data = await res.json();

  // RESPUESTA CON ERROR DEL BACKEND
  if (!res.ok || data.error || data.message) {
    return {
      exito: false,
      sms: data.error || data.message || "Error desconocido",
    };
  }

  // RESPUESTA EXITOSA
  return {
    exito: true,
    token: data.token,
    cuentaVerificada: true,
    tipoUsuario: data.user_type,
  };
}

// Obtener tipo de usuario
export async function obtenerTipoUsuario({ token }) {
  try {
    const res = await fetch(`${API_URL}/Api/Tipo-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // AQUE SE USA EL TOKEN DE SESIÓN
      },
    });

    const data = await res.json();
    if (!res.ok || data.error) {
      return {
        exito: false,
        sms: data.error || data.mensaje || "Error desconocido",
      };
    }

    return {
      exito: true,
      tipoUsuario: data.tipo,
    };
  } catch (e) {
    return { exito: false, sms: "Error inesperado al obtener tipo de usuario" };
  }
}

// ===========================
// ENDPOINTS QUE NO SE HAN IMPLEMENTADO AÚN EN LA APLICACIÓN
// ===========================

// Registrar información personal del paciente
export async function registrarInformacionPersonalPaciente({
  token,
  cell,
  tipoId,
  personalId,
  bloodGroup,
  direccion,
  alergiasGeneral = [],
  alergiasMedications = [],
}) {
  if (!token || !cell || !tipoId || !personalId || !bloodGroup || !direccion) {
    throw Error(
      "Faltan campos obligatorios para registrar información del paciente"
    );
  }

  try {
    const res = await fetch(`${API_URL}/Api/Informacion-Personal-Paciente`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        cell,
        tipoId,
        personalId,
        bloodGroup,
        direccion,
        alergiasGeneral,
        alergiasMedications,
      }),
    });

    const data = await res.json();

    if (!res.ok || data.error || data.message) {
      return {
        exito: false,
        sms: data.error || data.message || "Error al guardar información",
      };
    }

    return {
      exito: true,
      sms: data.mensaje || "Información del paciente registrada correctamente",
    };
  } catch (e) {
    return {
      exito: false,
      sms: "Error inesperado al registrar información del paciente",
    };
  }
}

// Registrar información personal del médico
export async function registrarInformacionPersonalMedico({
  token,
  cell,
  tipoId,
  personalId,
  direccion,
  especialidad = [],
}) {
  if (!token || !cell || !tipoId || !personalId || !direccion) {
    throw Error(
      "Faltan campos obligatorios para registrar información del médico"
    );
  }

  try {
    const res = await fetch(`${API_URL}/Api/Informacion-Personal-Profesional`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        cell,
        tipoId,
        personalId,
        direccion,
        especialidad,
      }),
    });

    const data = await res.json();

    if (!res.ok || data.error || data.message) {
      return {
        exito: false,
        sms: data.error || data.message || "Error al guardar información",
      };
    }

    return {
      exito: true,
      sms: data.mensaje || "Información del médico registrada correctamente",
    };
  } catch (e) {
    return {
      exito: false,
      sms: "Error inesperado al registrar información del médico",
    };
  }
}

// Insertar horario médico
export async function insertarHorarioMedico({ token, dia, horaInicio, horaFin }) {
  if (!token) {
    throw Error("Token requerido para insertar horario médico");
  }

  try {
    const res = await fetch(`${API_URL}/Api/Horario-medico`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(
        dia && horaInicio && horaFin
          ? { dia, horaInicio, horaFin }
          : {}
      ),
    });

    const data = await res.json();

    if (!res.ok || data.error || data.message) {
      return {
        exito: false,
        sms: data.error || data.message || "Error al insertar horario",
      };
    }

    return {
      exito: true,
      sms: data.mensaje || "Horario insertado correctamente",
    };
  } catch (e) {
    return {
      exito: false,
      sms: "Error inesperado al insertar horario",
    };
  }
}
// Buscar médicos por especialidad
export async function buscarMedicosPorEspecialidad({ token, especialidad }) {
  if (!token || !especialidad) {
    throw Error("Token y especialidad son requeridos para buscar médicos");
  }

  try {
    const res = await fetch(`${API_URL}/Api/Clasificar-medico`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ especialidad }),
    });

    const data = await res.json();

    if (!res.ok || data.error || data.message) {
      return {
        exito: false,
        sms: data.error || data.message || "Error al buscar médicos",
        medicos: [],
      };
    }

    return {
      exito: true,
      sms: data.mensaje || "Médicos encontrados correctamente",
      medicos: data.medicos || [],
    };
  } catch (e) {
    return {
      exito: false,
      sms: "Error inesperado al buscar médicos",
      medicos: [],
    };
  }
}
// Consultar horarios disponibles por médico
export async function obtenerHorariosPorMedico({ token, nombre }) {
  if (!token || !nombre) {
    throw Error("Faltan datos para obtener los horarios del médico");
  }

  try {
    const res = await fetch(`${API_URL}/Api/Medico-fecha`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ nombre }),
    });

    const data = await res.json();

    if (!res.ok || data.error || data.message) {
      return {
        exito: false,
        sms: data.error || data.message || "No se pudieron obtener horarios",
      };
    }

    return {
      exito: true,
      horarios: data,
    };
  } catch (e) {
    return {
      exito: false,
      sms: "Error inesperado al obtener horarios del médico",
    };
  }
}
// Insertar nueva cita médica
export async function insertarCita({
  token,
  nombre,
  fechaInicial,
  fechaFinal,
  diaFecha,
  motivoConsulta,
}) {
  if (
    !token ||
    !nombre ||
    !fechaInicial ||
    !fechaFinal ||
    !diaFecha ||
    !motivoConsulta
  ) {
    throw Error("Faltan campos obligatorios para insertar la cita");
  }

  try {
    const res = await fetch(`${API_URL}/Api/Insertar-cita`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        nombre,
        fechaInicial,
        fechaFinal,
        diaFecha,
        motivoConsulta,
      }),
    });

    const data = await res.json();

    if (!res.ok || data.error || data.message) {
      return {
        exito: false,
        sms: data.error || data.message || "No se pudo agendar la cita",
      };
    }

    return {
      exito: true,
      sms: data.Mensaje || "Cita agendada exitosamente",
    };
  } catch (e) {
    return {
      exito: false,
      sms: "Error inesperado al agendar la cita médica",
    };
  }
}
// Obtener lista de especialidades médicas
export async function obtenerListaEspecialidades({ token }) {
  if (!token) {
    throw Error("Token requerido para obtener especialidades");
  }

  try {
    const res = await fetch(`${API_URL}/Api/Lista-Especialidades`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok || data.error || data.message) {
      return {
        exito: false,
        sms: data.error || data.message || "No se pudo obtener la lista",
      };
    }

    return {
      exito: true,
      sms: data.mensaje || "Especialidades obtenidas correctamente",
      especialidades: data.listaEspecialidades || [],
    };
  } catch (e) {
    return {
      exito: false,
      sms: "Error inesperado al obtener especialidades",
    };
  }
}
//Mostrar citas disponibles por especialidad y fecha
export async function mostrarCitasPorEspecialidadYFecha({ token, especialidad, fecha }) {
  if (!token || !especialidad || !fecha) {
    throw Error("Faltan datos para consultar citas disponibles");
  }

  try {
    const res = await fetch(`${API_URL}/Api/Mostrar-citas-fecha`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ especialidad, fecha }),
    });

    const data = await res.json();

    if (!res.ok || data.error || data.message) {
      return {
        exito: false,
        sms: data.error || data.message || "Error al obtener citas disponibles",
      };
    }

    return {
      exito: true,
      citas: data.lista || [],
      sms: data.mensaje || "Citas obtenidas correctamente",
    };
  } catch (e) {
    return {
      exito: false,
      sms: "Error inesperado al mostrar citas por especialidad y fecha",
    };
  }
}

//Insertar una cita médica por ID de horario
export async function agendarCitaPorId({ token, id, motivoConsulta }) {
  if (!token || !id || !motivoConsulta) {
    throw Error("Faltan datos obligatorios para agendar la cita");
  }

  try {
    const res = await fetch(`${API_URL}/Api/Inserta-cita-Id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id, motivoConsulta }),
    });

    const data = await res.json();

    if (!res.ok || data.error || data.message) {
      return {
        exito: false,
        sms: data.error || data.message || "Error al agendar la cita",
      };
    }

    return {
      exito: true,
      sms: data.mensaje || "Cita agendada correctamente",
    };
  } catch (e) {
    return {
      exito: false,
      sms: "Error inesperado al agendar la cita",
    };
  }
}

//  Confirmar validez de token JWT (Confirmar-jwt-id)
export async function confirmarTokenValido({ token }) {
  if (!token) {
    throw Error("Token requerido para confirmar validez");
  }

  try {
    const res = await fetch(`${API_URL}/Api/Confirmar-jwt-id`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok || data.error || data.message) {
      return {
        exito: false,
        sms: data.error || data.message || "Token inválido",
      };
    }

    return {
      exito: true,
      sms: data.mensaje || "Token válido",
    };
  } catch (e) {
    return {
      exito: false,
      sms: "Error inesperado al confirmar token",
    };
  }
}

// Verificar estado de verificación del usuario
export async function obtenerEstadoDeVerificacion({ token }) {
  if (!token) {
    throw Error("Token requerido para obtener el estado de verificación");
  }

  try {
    const res = await fetch(`${API_URL}/Api/Estado-user-verificacion`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok || data.error || data.message) {
      return {
        exito: false,
        sms: data.error || data.message || "Error al obtener estado de verificación",
      };
    }

    return {
      exito: true,
      estado: data.estadoUser,
      sms: data.mensaje || "Estado de verificación obtenido correctamente",
    };
  } catch (e) {
    return {
      exito: false,
      sms: "Error inesperado al verificar estado del usuario",
    };
  }
}

// Obtener nombre completo del usuario
export async function obtenerNombreDelUsuario({ token }) {
  if (!token) {
    throw Error("Token requerido para obtener el nombre del usuario");
  }

  try {
    const res = await fetch(`${API_URL}/Api/Nombre-Usuario`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok || data.error || data.message) {
      return {
        exito: false,
        sms: data.error || data.message || "Error al obtener nombre del usuario",
      };
    }

    return {
      exito: true,
      nombre: data.nombreCompleto,
      sms: data.mensaje || "Nombre del usuario obtenido correctamente",
    };
  } catch (e) {
    return {
      exito: false,
      sms: "Error inesperado al obtener nombre del usuario",
    };
  }
}
