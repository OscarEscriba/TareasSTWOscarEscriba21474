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

// ------------------ METODOS DE LA API -----------------------
//FUNCION GET DE LA API 
// Esta función realiza una solicitud GET al API y maneja los mensajes obtenidos
function obtenerMensajes() {
    fetch('http://uwu-guate.site:3000/messages')
        .then(response => response.json())
        .then(data => {
            // Filtrar los mensajes únicos por username
            const usuariosUnicos = [...new Set(data.map(msg => msg.username))];

            // Crear elementos para el listado de chats y mensajes
            const listadoChats = document.getElementById("listado-chats");
            const contenedorMensajes = document.getElementById("mensaje");

            // Agregar cada usuario único al listado de chats
            usuariosUnicos.forEach(username => {
                const chatUsuario = document.createElement("div");
                chatUsuario.textContent = username;
                listadoChats.appendChild(chatUsuario);
            });

            // Agregar cada mensaje al contenedor de mensajes
            data.forEach(msg => {
                const nuevoMensaje = document.createElement("div");
                nuevoMensaje.className = "chat";

                //comprobar si el mensaje contiene enlaces.
                if (contieneEnlaces(msg.content)) {

                    //si hay enlaces, se crean elementos img para cada enlace
                    const enlaces = obtenerEnlaces(msg.content);
                    enlaces.forEach((enlace) => {
                        const imagenElement = document.createElement("img");
                        imagenElement.src = enlace;
                        imagenElement.alt = "Imagen del mensaje";

                        // Agregar el elemento de imagen al mensaje
                        nuevoMensaje.appendChild(imagenElement);
                    });
                } else {
                    //Si no hay enlace, mostrar el contenido del mensaje.
                    nuevoMensaje.textContent = `${msg.username}: ${msg.content}`;
                }
                //agregar el nuevo mensaje al contenedor de mensajes.
                contenedorMensajes.appendChild(nuevoMensaje);
            });

            //funcion para verificar si un texto contiene enlaces.
            function contieneEnlaces(texto){
                const urlRegex = /(https?:\/\/[^\s]+)/g;
                return urlRegex.test(texto);
            }
            
            //Funcion para obtener todos los enlaces del texto
            function obtenerEnlaces(texto){
                const urlRegex = /(https?:\/\/[^\s]+)/g;
                return texto.match(urlRegex) || [];
            }

            // Función para obtener mensajes periódicamente
    function autoRefreshMensajes() {
    // Configurar un intervalo para obtener mensajes cada 30 segundos
    setInterval(function() {
        obtenerMensajes();
    }, 30000); // 30000 milisegundos = 30 segundos
}

        })
        .catch(error => {
            console.error('Error:', error);
        });
}
// Llama a la función para obtener mensajes cuando se carga la página
window.onload = function(){
    obtenerMensajes();
    autoRefreshMensajes(); 
}

function enviarMensajeAPI() {
    var mensajeTextArea = document.getElementById("mensaje-chat");
    var mensaje = mensajeTextArea.value.trim();

    if (mensaje.length > 0) {
        // Estructura del mensaje que la API espera
        var mensajeAPI = {
            username: "Oscar", // Puedes cambiar esto según el usuario actual
            message: mensaje,
        };

        // Realiza una solicitud POST a la API
        fetch('http://uwu-guate.site:3000/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mensajeAPI),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud POST');
            }
            return response.json();
        })
        .then(data => {
            // Imprime en la consola la respuesta de la API
            console.log('Mensaje enviado correctamente:', data);

            // Después de enviar el mensaje, obtén los mensajes actualizados
            obtenerMensajes();
        })
        .catch(error => {
            console.error('Error al enviar el mensaje:', error);
        });

        // Resto del código para agregar el mensaje localmente en el chat
        var nuevoMensaje = document.createElement("div");
        nuevoMensaje.className = "chat";
        nuevoMensaje.textContent = `${mensajeAPI.username}: ${mensajeAPI.message}`;
        var contenedorMensajes = document.getElementById("mensaje");
        contenedorMensajes.appendChild(nuevoMensaje);

        // Limpia el área de texto después de enviar el mensaje
        mensajeTextArea.value = "";
    }
}



