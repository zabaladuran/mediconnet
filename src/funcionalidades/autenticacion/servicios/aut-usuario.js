export async function signInUsuario({ email, pass }) {
  if (!email || !pass || typeof email != "string" || typeof pass != "string")
    throw Error("Ops, ocurrio un error.");
  try {
    return {
      exito: true,
      token: "aftwas",
      cuentaVerificada: false,
      tipoUsuario: "paciente",
    };
  } catch {
    throw Error("Ops, error durante registro");
  }
}

export async function signUpUsuario({
  email,
  pass,
  nombreCompleto,
  tipoUsuario,
}) {
  if (
    !email ||
    !pass ||
    !nombreCompleto ||
    !tipoUsuario ||
    typeof email != "string" ||
    typeof pass != "string" ||
    typeof nombreCompleto != "string" ||
    typeof tipoUsuario != "string"
  )
    throw Error("Ops, ocurrio un error.");
  try {
    return { exito: true, token: "aftwas", verificado: false };
  } catch {
    throw Error("Ops, error durante inicio de sesion");
  }
}

export async function obtenerTipoUsuario({ token }) {
  if (!token || typeof token != "string") throw Error("Ops, ocurrio un error.");
  try {
    return { exito: true, tipoUsuario: "Paciente" };
  } catch {
    throw Error("Ops, error durante registro");
  }
}

export async function validarAutenticidadToken({ token }) {
  if (!token || typeof token != "string") throw Error("Ops, ocurrio un error.");
  try {
    return { exito: true, autentico: true };
  } catch {
    throw Error("Ops, error durante registro");
  }
}

export async function validarCuentaVerificada({ token }) {
  if (!token || typeof token != "string") throw Error("Ops, ocurrio un error.");
  try {
    return { exito: true, verificado: false };
  } catch {
    throw Error("Ops, error durante registro");
  }
}

export async function validarCodigoDeAutenticacion({ token, codigo }) {
  try {
    // VALIDACION DE DATOS DE ENTRADA
    if (!token || typeof token != "string")
      throw Error("Error en el parametro token en validar codigo");
    if (!codigo || typeof codigo != "number")
      throw Error("Error en el parametro codigo en validar codigo");

    // OBJETO DE RESPUESTA ESPERADO
    return { exito: true, sms: "Codigo fue autenticado" };
  } catch (e) {
    console.error(e);
    return { exito: false, sms: "No se puedo completar la autenticacioin" };
  }
}

export async function enviarCorreoDeVerificacion({ token }) {
  try {
    // VALIDACION DE DATOS DE ENTRADA
    if (!token || typeof token != "string")
      throw Error("Error en el parametro token en validar codigo");

    // OBJETO DE RESPUESTA ESPERADO
    return { exito: true, sms: "Codigo enviado" };
  } catch (e) {
    console.error(e);
    return { exito: false, sms: "No se puedo enviar el codigo..." };
  }
}
