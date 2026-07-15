document.addEventListener('DOMContentLoaded', () => {
    
    // === LÓGICA DEL BOTÓN INTERACTIVO ===
    const boton = document.getElementById('btn-cambiar');
    const mensaje = document.getElementById('mensaje-dinamico');

    const mensajes = [
        "¡Genial! El mensaje ha sido cambiado con éxito mediante JavaScript. 🚀",
        "Este es otro mensaje interactivo diferente.",
        "¡Volviste a hacer clic! El evento funciona a la perfección.",
        "Haz clic una vez más para regresar al inicio."
    ];

    let indice = 0;

    boton.addEventListener('click', () => {
        mensaje.textContent = mensajes[indice];
        indice = (indice + 1) % mensajes.length;
    });

    // === LÓGICA DEL CONTADOR DE HORA ===
    const relojElemento = document.getElementById('reloj');

    function actualizarReloj() {
        const ahora = new Date();
        
        // Formato de dos dígitos para la hora, minutos y segundos
        const horas = String(ahora.getHours()).padStart(2, '0');
        const minutos = String(ahora.getMinutes()).padStart(2, '0');
        const segundos = String(ahora.getSeconds()).padStart(2, '0');
        
        relojElemento.textContent = `Hora actual: ${horas}:${minutos}:${segundos}`;
    }

    // Iniciar reloj inmediatamente y actualizar cada 1 segundo (1000ms)
    actualizarReloj();
    setInterval(actualizarReloj, 1000);
});