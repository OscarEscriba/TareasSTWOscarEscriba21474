function enviarMensaje() {
    // Obtén el valor del textarea por su ID
    var mensajeTextArea = document.getElementById("mensaje-chat");
    // Obtén el valor del textarea sin necesidad de .value aquí
    var mensaje = mensajeTextArea.value.trim();

    if (mensaje.length > 0) {
        // Crea un nuevo elemento div para representar el mensaje
        var nuevoMensaje = document.createElement("div");
        nuevoMensaje.className = "chat";
        nuevoMensaje.textContent = mensaje;

        // agrega la clase de animacion de desvanecimiento
        nuevoMensaje.classList.add("fade-in");
        
        // Agrega el nuevo mensaje al contenedor de mensajes
        var contenedorMensajes = document.getElementById("mensaje");
        contenedorMensajes.appendChild(nuevoMensaje);

        // Limpia el área de texto después de enviar el mensaje
        mensajeTextArea.value = "";
    }
}

function enviarConEnter(event) {
    if (event.key === "Enter") {
        // Evita que se realice un salto de línea en el área de texto
        event.preventDefault();
        // Llama a la función enviarMensaje al presionar Enter
        enviarMensaje();
    }
}

