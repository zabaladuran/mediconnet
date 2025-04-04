export const obtenerDeLocalStorage = ({ clave }) => {
  if (typeof window === "undefined" || !window.localStorage)
    throw Error("Entorno no soportado");
  if (!clave)
    throw Error(
      "No fueron dadas los valores minimos para guardar datos en local storage",
      `clave: ${clave}`
    );
  try {
    const datosGuardados = window.localStorage.getItem(clave);
    if (!datosGuardados | (datosGuardados == "undefined")) return null;
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
  if (!clave || !data)
    throw Error(
      "No fueron dadas los valores minimos para guardar datos en local storage",
      `clave: ${clave}. data: ${data}`
    );
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
  if (!clave || !nuevosDatos)
    throw Error(
      "No fueron dadas los valores minimos para actulizar datos en local storage",
      `clave: ${clave}. nuevosDatos: ${nuevosDatos}`
    );
  try {
    const datosActuales = obtenerDeLocalStorage({ clave });
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
  if (!clave)
    throw Error(
      "No fueron dadas los valores minimos para guardar datos en local storage",
      `clave: ${clave}`
    );
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
