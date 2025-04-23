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

export function adaptarPerfilesUsuario(perfilesRaw) {
  if (!Array.isArray(perfilesRaw)) return []; // Si no es array, regreso vacío

  return perfilesRaw.map((perfil) => ({
    idPerfilUsuario: perfil.nId04PerfilUsuario,
    idUsuario: perfil.nId01Usuario,
    idPerfil: perfil.nId02Perfil,
    perfilNombre: perfil.perfil.sNombre
  }));
}

export function adaptarAsignarPerfilesUsuario(perfilUsuariosRaw) {
  return {
    nId01Usuario: perfilUsuariosRaw.idUsuario,
    nId02Perfiles: perfilUsuariosRaw.idPerfiles,
  };
}

