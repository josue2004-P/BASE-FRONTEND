// Función para formatear fecha y hora
export function formatearFechaHora(fecha) {
    // Verificar que la fecha sea válida
    if (isNaN(Date.parse(fecha))) {
      throw new Error('Fecha inválida');
    }
  
    // Convertir la fecha a un objeto Date
    const fechaObj = new Date(fecha);
  
    // Formatear la fecha
    const fechaFormateada = fechaObj.toLocaleString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  
    // Retornar un objeto con la fecha formateada
    return {
      fechaFormateada
    };
  }