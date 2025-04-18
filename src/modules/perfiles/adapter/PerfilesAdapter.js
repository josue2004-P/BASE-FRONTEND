export function adaptarPerfiles(perfilesRaw) {
  return perfilesRaw.map((perfil) => ({
    id: perfil.nId02Perfil,
    nombre: perfil.sNombre,
    descripcion: perfil.sDescripcion,
    fechaCreacion: perfil.dFechaCreacion,
  }));
}

export function adaptarCrearPerfiles(perfilesRaw) {
  return {
    sNombre: perfilesRaw.nombre,
    sDescripcion: perfilesRaw.descripcion,
  };

}
