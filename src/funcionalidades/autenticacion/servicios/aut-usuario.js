const BASE_URL = "https://api-mediconnet.onrender.com";

export async function signUpUsuario({ email, pass, nombreCompleto, tipoUsuario }) {
  if (!email || !pass || !nombreCompleto || !tipoUsuario) {
    throw new Error("Faltan campos requeridos.");
  }

  const [nombres, ...resto] = nombreCompleto.trim().split(" ");
  const apellidos = resto.join(" ") || "Desconocido";

  try {
    const response = await fetch(`${BASE_URL}/Api/Registro`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombres,
        apellidos,
        correoElectronico: email,
        contrasena: pass
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Error en el registro: ${error}`);
    }

    const result = await response.json();
    return { exito: true, ...result };
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return { exito: false, mensaje: error.message };
  }
}

export async function enviarCorreoDeVerificacion({ token, correo }) {
  try {
    const response = await fetch(`${BASE_URL}/Api/Registro/Enviar-codigo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      },
      body: JSON.stringify({ correoElectronico: correo })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Error al enviar el código: ${error}`);
    }

    const result = await response.json();
    return { exito: true, ...result };
  } catch (error) {
    console.error("Error al enviar código:", error);
    return { exito: false, mensaje: error.message };
  }
}

export async function validarCodigoDeAutenticacion({ correo, codigo }) {
  try {
    const response = await fetch(`${BASE_URL}/Api/Registro/Confirmar-codigo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        correoElectronico: correo,
        codigoVerificacion: codigo
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Error al confirmar el código: ${error}`);
    }

    const result = await response.json();
    return { exito: true, ...result };
  } catch (error) {
    console.error("Error al confirmar código:", error);
    return { exito: false, mensaje: error.message };
  }
}

export async function signInUsuario({ email, pass }) {
  if (!email || !pass) {
    throw new Error("Correo o contraseña inválidos.");
  }

  try {
    const response = await fetch(`${BASE_URL}/Api/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        correoElectronico: email,
        contrasena: pass
      })
    });

    if (!response.ok) {
      const error = await response.text();
      return { exito: false, mensaje: error };
    }

    const result = await response.json();
    return {
      exito: true,
      token: result.token,
      tipoUsuario: result.tipoUsuario,
      cuentaVerificada: result.cuentaVerificada
    };
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return { exito: false, mensaje: error.message };
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

