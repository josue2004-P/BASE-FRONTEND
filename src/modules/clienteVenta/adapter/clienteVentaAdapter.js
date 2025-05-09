export function adaptarClientes(clienteRaw) {
  return clienteRaw.map(cliente => ({
    id: cliente.nNoCuenta06Clientes,
    nombreCliente: cliente.sNombreCliente,
    apellidoPaternoCliente: cliente.sApellidoPaternoCliente,
    apellidoMaternoCliente: cliente.sApellidoMaternoCliente,
    activo: cliente.bInactivo,
    fechaCreacion: cliente.dFechaCreacion,
    nombreCompleto:cliente.sNombreCompleto
  }));
}

export function adaptarCliente(clienteRaw) {
  return {
    id: clienteRaw.nNoCuenta06Clientes,
    nombre: clienteRaw.sNombreCliente,
    apellidoPaterno: clienteRaw.sApellidoPaternoCliente,
    apellidoMaterno: clienteRaw.sApellidoMaternoCliente,
    activo: clienteRaw.bActivo,
    fechaCreacion: clienteRaw.dFechaCreacion,
  };
}

export function adaptarCrearCliente(clienteRaw) {
  return {
    nNoCuenta06Clientes: clienteRaw.noCuenta,
    sNombreCliente: clienteRaw.nombreCliente,
    sApellidoPaternoCliente: clienteRaw.apellidoClientePaterno,
    sApellidoMaternoCliente: clienteRaw.apellidoClienteMaterno,
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