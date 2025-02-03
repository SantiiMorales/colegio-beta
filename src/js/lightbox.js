// lightbox.js

// Función para abrir el lightbox
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'block'; // Muestra el lightbox
    lightboxImg.src = imageSrc; // Asigna la imagen clickeada al lightbox
}

// Función para cerrar el lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Oculta el lightbox
}

// Navegación entre imágenes (opcional)
let currentImageIndex = 0;
const images = [
    '/public/assets/img/1.jpeg',
    '/public/assets/img/2.jpeg',
    '/public/assets/img/3.jpeg',
    '/public/assets/img/4.jpeg',
    '/public/assets/img/5.jpeg',
    '/public/assets/img/6.jpeg',
    '/public/assets/img/7.jpeg',
    '/public/assets/img/8.jpeg'
];

function changeImage(n) {
    currentImageIndex += n;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    document.getElementById('lightbox-img').src = images[currentImageIndex];
}