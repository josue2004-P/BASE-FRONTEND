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

export function adaptarActualizarCliente(clienteRaw) {
  return {
    sNombreCliente: clienteRaw.nombreCliente,
    sApellidoPaternoCliente: clienteRaw.apellidoClientePaterno,
    sApellidoMaternoCliente: clienteRaw.apellidoClienteMaterno,
  };
}
  
