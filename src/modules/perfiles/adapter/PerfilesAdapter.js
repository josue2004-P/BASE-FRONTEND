export function adaptarPerfiles(perfilesRaw) {
  return perfilesRaw.map((perfil) => ({
    id: perfil.nId02Perfil,
    nombre: perfil.sNombre,
    descripcion: perfil.sDescripcion,
    fechaCreacion: perfil.dFechaCreacion,
  }));
}

// ADAPTADOR PARA CREAR Y ACTUALIZAR PERFILES
export function adaptarCrearActualizarPerfiles(perfilesRaw) {
  return {
    sNombre: perfilesRaw.nombre,
    sDescripcion: perfilesRaw.descripcion,
  };
}

export function adaptarPerfil(perfilRaw) {
  return {
    id: perfilRaw.nId02Perfil,
    nombre: perfilRaw.sNombre,
    descripcion: perfilRaw.sDescripcion,
    fechaCreacion: perfilRaw.dFechaCreacion,
    fechaActualizacion: perfilRaw.dFechaActualizacion,
  };
}
