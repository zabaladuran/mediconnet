export const obtenerDeLocalStorage = ({ clave }) => {
  if (typeof window === "undefined" || !window.localStorage)
    throw Error("Entorno no soportado");

  try {
    const datosGuardados = window.localStorage.getItem(clave);
    if (!datosGuardados) return null;
    return JSON.parse(datosGuardados);
  } catch (error) {
    console.error(
      `Error al obtener los datos de localStorage para la clave "${clave}":`,
      error
    );
    throw Error("Error al obtener los datos de localStorage");
  }
};

export const guardarEnLocalStorage = ({ clave, data }) => {
  if (typeof window === "undefined" || !window.localStorage)
    throw Error("Entorno no soportado");
  try {
    window.localStorage.setItem(clave, JSON.stringify(data));
  } catch (error) {
    console.error(
      `Error al guardar datos en localStorage para la clave "${clave}":`,
      error
    );
    throw Error("Error al guardar datos en localStorage");
  }
};

export const actualizarLocalStorage = ({ clave, nuevosDatos }) => {
  if (typeof window === "undefined" || !window.localStorage)
    throw Error("Entorno no soportado");

  try {
    const datosActuales = obtenerDeLocalStorage(clave);
    if (!datosActuales) throw Error("No se encontraron datos en localStorage");

    const datosFinales = { ...datosActuales, ...nuevosDatos };
    window.localStorage.setItem(clave, JSON.stringify(datosFinales));
  } catch (error) {
    console.error(
      `Error al actualizar los datos en localStorage para la clave "${clave}":`,
      error
    );
    throw Error("Error al actualizar datos en localStorage");
  }
};

export const eliminarDeLocalStorage = ({ clave }) => {
  if (typeof window === "undefined" || !window.localStorage)
    throw Error("Entorno no soportado");
  try {
    window.localStorage.removeItem(clave);
  } catch (error) {
    console.error(
      `Error al eliminar los datos de localStorage para la clave "${clave}":`,
      error
    );
    throw Error("Error al eliminar datos en localStorage");
  }
};
