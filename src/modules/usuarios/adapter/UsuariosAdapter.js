export function adaptarUsuarios(usuariosRaw) {
    return usuariosRaw.map(usuario => ({
      id: usuario.nId01Usuario,
      nombre: usuario.sNombre,
      apellidoPaterno: usuario.sApellidoPaterno,
      apellidoMaterno: usuario.sApellidoMaterno,
      usuario: usuario.sUsuario,
      email: usuario.sEmail,
      activo: usuario.bActivo,
      fechaCreacion: usuario.dFechaCreacion,
    }));
  }