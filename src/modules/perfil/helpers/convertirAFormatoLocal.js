export default function convertirAFormatoLocal(fechaISO) {
    const fecha = new Date(fechaISO);
    const offset = fecha.getTimezoneOffset(); // en minutos
    const fechaLocal = new Date(fecha.getTime() - offset * 60000); // compensar zona horaria
    return fechaLocal.toISOString().slice(0, 16); // formato: "YYYY-MM-DDTHH:MM"
  }
  