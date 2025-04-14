const enviarMensajeWhatsApp = (titulo, precio) => {
    const numero = "+522841022581";
    // Construir el mensaje
    let mensaje = `Hola, quiero comprar:\n${titulo}: ${precio}`;
    
    // Codificar el mensaje en formato URL
    const mensajeCodificado = encodeURIComponent(mensaje);
  
    // Construir el enlace de WhatsApp
    const url = `https://wa.me/${numero}?text=${mensajeCodificado}`;
  
    // Abrir la URL en una nueva pestaña
    window.open(url, "_blank");
  };
  
  export default enviarMensajeWhatsApp;
  