export function adaptarPermisos(permisosRaw) {
    return permisosRaw.map(permiso => ({
      id: permiso.nId03Permiso,
      nombre: permiso.sNombre,
      descripcion: permiso.sDescripcion,
      fechaCreacion: permiso.dFechaCreacion,
    }));
  }

1
