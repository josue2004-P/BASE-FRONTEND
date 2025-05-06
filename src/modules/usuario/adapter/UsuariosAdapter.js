export function adaptarUsuarios(usuariosRaw) {
  return usuariosRaw.map(usuario => ({
    id: usuario.nId01Usuario,
    usuario: usuario.sUsuario,
    email: usuario.sEmail,
    activo: usuario.bInactivo,
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
    usuarioImg: usuariosRaw.sUsuarioImg,
    activo: usuariosRaw.bActivo,
    fechaCreacion: usuariosRaw.dFechaCreacion,
    fechaActualizacion: usuariosRaw.dFechaActualizacion,
  };
}
  
export function adaptarCrearActualizarUsuarios(usuariosRaw) {
  return usuariosRaw.map(usuario => ({
    sNOMBRE: usuario.nombre,                // Asignamos el nombre a 'sNOMBRE'
    sAPELLIDO_PATERNO: usuario.apellidoPaterno,  // Asignamos el apellido paterno a 'sAPELLIDO_PATERNO'
    sEMAIL: usuario.email,                    // Asignamos el email a 'sEMAIL'
    sUSUARIO: usuario.usuario,                // Asignamos el usuario a 'sUSUARIO'
    sAPELLIDO_MATERNO: usuario.apellidoMaterno,  // Asignamos el apellido materno a 'sAPELLIDO_MATERNO'
    sPASSWORD: usuario.password,              // Asignamos la contraseña a 'sPASSWORD'
  }));
}