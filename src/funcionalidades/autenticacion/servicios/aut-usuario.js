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
    return { exito: true, tipoUsuario: "paciente" };
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
  if (!token || typeof token != "string") throw Error("Ops, ocurrio un error.");
  if (!codigo || typeof codigo != "number")
    throw Error("Ops, ocurrio un error.");
  try {
    return { exito: true, verificado: true };
  } catch {
    throw Error("Ops, error durante registro");
  }
}

export async function enviarCorreoDeVerificacion({ token }) {
  if (!token || typeof token != "string") throw Error("Ops, ocurrio un error.");
  try {
    return { exito: true };
  } catch {
    throw Error("Ops, error durante registro");
  }
}
