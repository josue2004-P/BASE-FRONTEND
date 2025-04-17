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