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
// FUNCIONES ORIGINALES QUE AÚN NO TIENEN ENDPOINT REAL
// ===========================

// Validar autenticidad del token (usamos obtenerTipoUsuario como prueba)
export async function validarAutenticidadToken({ token }) {
  try {
    await obtenerTipoUsuario({ token });
    return { exito: true, autentico: true };
  } catch {
    return { exito: false, autentico: false };
  }
}

// Validar si la cuenta está verificada (no hay endpoint directo)
export async function validarCuentaVerificada({ token }) {
  try {
    await obtenerTipoUsuario({ token });
    return { exito: true, verificado: true };
  } catch {
    return { exito: false, verificado: false };
  }
}
