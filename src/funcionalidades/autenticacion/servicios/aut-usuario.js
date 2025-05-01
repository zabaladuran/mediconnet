export async function signInUsuario({ email, pass }) {
  if (!email || !pass || typeof email != "string" || typeof pass != "string")
    throw Error("Ops, ocurrio un error.");
  try {
    return { exito: true, token: "aftwas", verificado: true };
<<<<<<< HEAD
    // return { status: 200, message: "Correctamente iniciado", token: "aftwas", idUsuario: 10 };
    // return { status: 400, message: "Error iniciar sesion"
=======
>>>>>>> 78bdddc (se termino las funcionalidades minimas para el funcionamiento de autenticacion, redireccion y manejo de sesion)
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
    return { exito: true, token: "aftwas", verificado: true };
<<<<<<< HEAD
    // { status: 200, message: "Correctamente registrado", token: "aftwas", idUsuario: 10 };
    // { status: 400, message: "Error crear usuario" };
=======
>>>>>>> 78bdddc (se termino las funcionalidades minimas para el funcionamiento de autenticacion, redireccion y manejo de sesion)
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
    return { exito: true, verificado: true };
  } catch {
    throw Error("Ops, error durante registro");
  }
}
<<<<<<< HEAD

export async function validarCodigoDeAutenticacion({ idUsuario, codigo }) {
  if (!idUsuario || typeof idUsuario != "number")
    throw Error("Ops, ocurrio un error.");
  if (!codigo || typeof codigo != "number")
    throw Error("Ops, ocurrio un error.");
  try {
    return { exito: true, verificado: true };
  } catch {
    throw Error("Ops, error durante registro");
  }
}

export async function enviarCorreoDeVerificacion({ idUsuario }) {
  if (!idUsuario || typeof token != "number")
    throw Error("Ops, ocurrio un error.");
  try {
    return { exito: true, verificado: true };
  } catch {
    throw Error("Ops, error durante registro");
  }
}
=======
>>>>>>> 78bdddc (se termino las funcionalidades minimas para el funcionamiento de autenticacion, redireccion y manejo de sesion)
