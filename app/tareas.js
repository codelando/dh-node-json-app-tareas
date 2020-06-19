const fs = require('fs');

function leerArchivoJSON() {
    const tareasJson = fs.readFileSync('./tareas.json', 'utf-8');
    return JSON.parse(tareasJson);
}

function escribirArchivoJSON(tareas) {
    let tareasJson = JSON.stringify(tareas, null, ' ');
    fs.writeFileSync('./tareas.json', tareasJson);
}

let tareasNuevas = [
    {
     titulo: "Practicar el switch",
     descripcion: "Entender para qué puedo usarlo",
     estado: "pendiente"
    },
    {
     titulo: "Practicar el for",
     descripcion: "Entender cómo se usa",
     estado: "en progreso"
    },
    {
     titulo: "Objeto literal vs JSON",
     descripcion: "¿Qué tienen de diferente?",
     estado: "terminada"
    },
    {
     titulo: "Refactorear con un forEach()",
     descripcion: "Magic magic magic",
     estado: "terminada"
    },
    {
     titulo: "Esta es una nueva tarea",
     descripcion: "Agregada a mano",
     estado: "terminada"
    }
]