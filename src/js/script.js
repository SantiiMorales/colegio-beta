function showContent(contentId) {
    // Oculta todos los contenidos
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Muestra el contenido seleccionado
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
}

// Mostrar el primer contenido por defecto
document.addEventListener('DOMContentLoaded', () => {
    showContent('content1');
});

//Lista de utiles 
        // Definir las listas de útiles escolares con enlaces a PDFs
const utiles = {
    primaria: {
        "Primer Grado": "https://drive.google.com/file/d/ejemplo1/view",
        "Segundo Grado": "https://drive.google.com/file/d/ejemplo2/view",
        "Tercer Grado": "https://drive.google.com/file/d/ejemplo3/view",
        "Cuarto Grado": "https://drive.google.com/file/d/ejemplo4/view",
        "Quinto Grado": "https://drive.google.com/file/d/ejemplo5/view",
        "Sexto Grado": "https://drive.google.com/file/d/ejemplo6/view"
    },
    secundaria: {
        "Primer Año": "https://drive.google.com/file/d/ejemplo7/view",
        "Segundo Año": "https://drive.google.com/file/d/ejemplo8/view",
        "Tercer Año": "https://drive.google.com/file/d/ejemplo9/view",
        "Cuarto Año": "https://drive.google.com/file/d/ejemplo10/view",
        "Quinto Año": "https://drive.google.com/file/d/ejemplo11/view"
    }
};

// Función para mostrar los útiles según el nivel
function mostrarUtiles(nivel) {
    const utilesList = document.getElementById("utilesList");

    // Limpiar la lista actual
    utilesList.innerHTML = "";

    // Obtener los útiles correspondientes al nivel seleccionado
    const listaUtiles = utiles[nivel];

    // Mostrar los útiles en la lista como enlaces
    for (const [grado, enlace] of Object.entries(listaUtiles)) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = enlace;
        a.textContent = `Útiles de ${grado}`;
        a.target = "_blank"; // Para abrir el enlace en una nueva pestaña
        li.appendChild(a);
        utilesList.appendChild(li);
    }
}

// Mostrar la lista de primaria por defecto al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarUtiles("primaria");
});

//Horarios
const horarios = {
    primaria: {
        "Primer Grado": "https://drive.google.com/file/d/horario1/view",
        "Segundo Grado": "https://drive.google.com/file/d/horario2/view",
        "Tercer Grado": "https://drive.google.com/file/d/horario3/view",
        "Cuarto Grado": "https://drive.google.com/file/d/horario4/view",
        "Quinto Grado": "https://drive.google.com/file/d/horario5/view",
        "Sexto Grado": "https://drive.google.com/file/d/horario6/view"
    },
    secundaria: {
        "Primer Año": "https://drive.google.com/file/d/horario7/view",
        "Segundo Año": "https://drive.google.com/file/d/horario8/view",
        "Tercer Año": "https://drive.google.com/file/d/horario9/view",
        "Cuarto Año": "https://drive.google.com/file/d/horario10/view",
        "Quinto Año": "https://drive.google.com/file/d/horario11/view"
    }
};

// Función para mostrar los horarios según el nivel
function mostrarHorarios(nivel) {
    const horariosList = document.getElementById("horariosList");

    // Limpiar la lista actual
    horariosList.innerHTML = "";

    // Obtener los horarios correspondientes al nivel seleccionado
    const listaHorarios = horarios[nivel];

    // Mostrar los horarios en la lista como enlaces
    for (const [grado, enlace] of Object.entries(listaHorarios)) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = enlace;
        a.textContent = `Horario de ${grado}`;
        a.target = "_blank"; // Para abrir el enlace en una nueva pestaña
        li.appendChild(a);
        horariosList.appendChild(li); // Corregido: usar horariosList en lugar de utilesList
    }
}

// Mostrar los horarios de primaria por defecto al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarHorarios("primaria");
});