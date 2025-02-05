const eventos = [
    {
        titulo: "Desfile de navidad",
        fecha: "15 de Diciembre de 2024",
        imagen: "https://eltiempove.com/wp-content/uploads/2023/02/Carnaval-1.jpg",
        descripcion: "Celebración anual del carnaval de navidad con actividades para todos los estudiantes.",
        // Opcional, si el evento tiene un PDF
    },
    {
        titulo: "Inscripciones abiertas",
        fecha: "20 de Enero de 2025",
        imagen: "https://www.aycelaborytax.com/wp-content/uploads/2021/03/registro-mercantil.jpeg",
        descripcion: "Acerquese a la institucion para mas informacion",
        pdf: "../docs/noti361.pdf" 
    },
    {
        titulo: "Semana Santa",
        fecha: "13 de Abril de 2025",
        imagen: "https://jovenes.dominicos.org/wp-content/uploads/2019/04/Semana-Santa.jpe",
        descripcion: "No habra clase"
    }
];

function cargarEventos() {
    const container = document.getElementById("eventos-container");

    eventos.forEach(evento => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card" data-bs-toggle="modal" data-bs-target="#eventoModal" 
                     onclick="mostrarDetallesEvento('${evento.titulo}', '${evento.imagen}', '${evento.descripcion}', '${evento.pdf || ''}')">
                    <img src="${evento.imagen}" class="card-img-top" alt="${evento.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${evento.titulo}</h5>
                        <p class="card-text"><small class="text-muted">${evento.fecha}</small></p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

function mostrarDetallesEvento(titulo, imagen, descripcion, pdf) {
    document.getElementById("modalImagen").src = imagen;
    document.getElementById("modalDescripcion").textContent = descripcion;
    document.getElementById("eventoModalLabel").textContent = titulo;

    const botonPDF = document.getElementById("modalPDF");
    if (pdf) {
        botonPDF.href = pdf;
        botonPDF.style.display = "inline-block";
    } else {
        botonPDF.style.display = "none";
    }
}

// Cargar eventos al iniciar la página
document.addEventListener("DOMContentLoaded", cargarEventos);