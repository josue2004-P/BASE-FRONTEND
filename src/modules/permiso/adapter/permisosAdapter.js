// ADAPTADOR DE TODOS LOS PERMISOS
export function adaptarPermisos(permisosRaw) {
  return permisosRaw.map((permiso) => ({
    id: permiso.nId03Permiso,
    nombre: permiso.sNombre,
    descripcion: permiso.sDescripcion,
    fechaCreacion: permiso.dFechaCreacion,
  }));
}

// ADAPTADOR PARA CREAR Y ACTUALIZAR PERMISOS
export function adaptarCrearActualizarPermisos(permisosRaw) {
  return {
    sNombre: permisosRaw.nombre,
    sDescripcion: permisosRaw.descripcion,
  };
}

// ADAPTADOR PARA UN SOLO PERMISO
export function adaptarPermiso(permisosRaw) {
  return {
    id: permisosRaw.nId03Permiso,
    nombre: permisosRaw.sNombre,
    descripcion: permisosRaw.sDescripcion,
    fechaCreacion: permisosRaw.dFechaCreacion,
    fechaActualizacion: permisosRaw.dFechaActualizacion,
  };
}
