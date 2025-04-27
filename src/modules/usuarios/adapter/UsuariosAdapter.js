export function adaptarUsuarios(usuariosRaw) {
  return usuariosRaw.map(usuario => ({
    id: usuario.nId01Usuario,
    usuario: usuario.sUsuario,
    email: usuario.sEmail,
    activo: usuario.bActivo,
    fechaCreacion: usuario.dFechaCreacion,
    nombreCompleto:usuario.sNombreCompleto
  }));
}

export function adaptarUsuario(usuariosRaw) {
  return {
    id: usuariosRaw.nId01Usuario,
    nombre: usuariosRaw.sNombre,
    apellidoPaterno: usuariosRaw.sApellidoPaterno,
    apellidoMaterno: usuariosRaw.sApellidoMaterno,
    email: usuariosRaw.sEmail,
    usuario: usuariosRaw.sUsuario,
    activo: usuariosRaw.bActivo,
    fechaCreacion: usuariosRaw.dFechaCreacion,
    fechaActualizacion: usuariosRaw.dFechaActualizacion,
  };
}
  
export function adaptarCrearActualizarUsuarios(usuariosRaw) {
  return {
    sNombre: usuariosRaw.nombre,
    sApellidoPaterno: usuariosRaw.apellidoPaterno,
    sApellidoMaterno: usuariosRaw.apellidoMaterno,
    sPassword: usuariosRaw.password,
  };
}
