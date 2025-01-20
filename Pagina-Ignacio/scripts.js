// Función para mostrar/ocultar el campo de búsqueda
function toggleBusqueda() {
    const barraBusqueda = document.getElementById('barraBusqueda');
    const inputBusqueda = barraBusqueda.querySelector('input');
    const isHidden = inputBusqueda.style.display === 'none' || inputBusqueda.style.display === '';
    
    inputBusqueda.style.display = isHidden ? 'block' : 'none'; // Muestra u oculta el campo de búsqueda
    if (isHidden) {
        inputBusqueda.focus(); // Enfocar el campo de búsqueda al abrirlo
    }
}

// Función para filtrar obras por título o autor
function filtrarObras() {
    const input = document.getElementById('buscar').value.toLowerCase();
    const obras = document.querySelectorAll('.obra');

    obras.forEach(obra => {
        const titulo = obra.getAttribute('data-titulo').toLowerCase();
        const autor = obra.getAttribute('data-autor').toLowerCase();
        obra.style.display = (titulo.includes(input) || autor.includes(input)) ? 'block' : 'none';
    });
}

// Función para abrir el modal con la imagen
function mostrarImagen(src) {
    const modal = document.getElementById('modal'); // Selección del modal
    const modalImg = document.getElementById('imgExpandida'); // Selección de la imagen dentro del modal

    // Configura la fuente de la imagen y muestra el modal
    modalImg.src = src; 
    modal.style.display = "flex"; // Usar flex para centrar el modal
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('modal'); // Selección del modal
    modal.style.display = "none"; // Oculta el modal
}

// Detectar la tecla "Escape" para cerrar el modal
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { // Verifica si la tecla presionada es "Escape"
        cerrarModal(); // Llama a la función para cerrar el modal
    }
});

