import { validarPerfilPaciente } from "../zod";
export async function obtenerPerfilPaciente({ token }) {
  if (!token || typeof token != "string") throw Error("Ops, ocurrio un error.");
  try {
    return {
      exito: true,
      nombreCompleto: "Nicolas Cardenas",
      fechaNacimiento: "12/12/12",
      identificacionTipo: "cc",
      numeroIndentificacion: "12345566",
      telefono: "+57 333 333",
      alergias: ["buscapina", "cevedol"],
      grupoSanguineo: "o+",
      correoElectronico: "n@n.com",
      residencia: "cra 16 barrio Bucg",
    };
  } catch {
    throw Error("Ops, error durante carga de datos de su perfil");
  }
}

export async function actualizarPerfilPaciente(perfil) {
  // Valida el esquema del perfil (tipos de datos, etc) usando zod
  const validacion = validarPerfilPaciente(perfil);
  if (!validacion.exito) throw Error(validacion.sms);
  try {
    return {
      exito: true,
      sms: "Actulizacon confirmada",
    };
  } catch {
    throw Error("Ops, error durante carga de datos de su perfil");
  }
}
