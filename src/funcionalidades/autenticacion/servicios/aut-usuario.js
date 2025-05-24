const API_URL = "https://api-mediconnet.onrender.com";

// ===========================
// ENDPOINTS REALES
// ===========================

// Registro de usuarios
export async function signUpUsuario({ email, pass, nombreCompleto, tipoUsuario }) {
  if (!email || !pass || !nombreCompleto || !tipoUsuario) {
    throw Error("Campos inválidos");
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

  if (!res.ok) throw Error("Error al registrar");

  const data = await res.json();
  return {
    exito: true,
    token: data.token,
    verificado: false, // aún no se ha verificado
  };
}

// Enviar código de verificación
export async function enviarCorreoDeVerificacion({ token }) {
  const res = await fetch(`${API_URL}/Api/Registro/Enviar-codigo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });

  if (!res.ok) throw Error("Error al enviar el código");

  const data = await res.json();
  return {
    exito: true,
    tokenCodigo: data.tokenCodigo,
    sms: data.mensaje,
  };
}

// Confirmar código
export async function validarCodigoDeAutenticacion({ token, codigo }) {
  const res = await fetch(`${API_URL}/Api/Registro/Confirmar-codigo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tokenCodigo: token, codigo }),
  });

  if (!res.ok) throw Error("Código incorrecto");

  return { exito: true, sms: "Código fue autenticado" };
}

// Inicio de sesión
export async function signInUsuario({ email, pass }) {
  if (!email || !pass || typeof email !== "string" || typeof pass !== "string") {
    throw Error("Campos inválidos");
  }

  const res = await fetch(`${API_URL}/Api/Login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, pass }),
  });

  if (!res.ok) throw Error("Error al iniciar sesión");

  const data = await res.json();
  return {
    exito: true,
    token: data.token,
    cuentaVerificada: true,
    tipoUsuario: data.user_type,
  };
}

// Obtener tipo de usuario
export async function obtenerTipoUsuario({ token }) {
  const res = await fetch(`${API_URL}/Api/Tipo-user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });

  if (!res.ok) throw Error("Error al obtener tipo de usuario");

  const data = await res.json();
  return {
    exito: true,
    tipoUsuario: data.tipo,
  };
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
