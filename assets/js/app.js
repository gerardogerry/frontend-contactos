import APIService from "./api.js";
import UI from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {

    cargarContactos();

});

async function cargarContactos(){

    const contactos = await APIService.obtenerContactos();

    UI.mostrarContactos(contactos);

}

// ==========================================
// AGREGAR
// ==========================================

document
.getElementById("formAgregar")
.addEventListener("submit", async e => {

    e.preventDefault();

    const data = {

        nombre:
        document.getElementById("nombre").value,

        apellido:
        document.getElementById("apellido").value,

        fecha_nacimiento:
        document.getElementById("fecha_nacimiento").value,

        id_categoria:
        document.getElementById("id_categoria").value

    };

    await APIService.agregarContacto(data);

    location.reload();

});

// ==========================================
// ELIMINAR
// ==========================================

document.addEventListener("click", e => {

    if(e.target.closest(".btnEliminar")){

        const id =
        e.target.closest(".btnEliminar")
        .dataset.id;

        document.getElementById("delete_id").value = id;

    }

});

document
.getElementById("btnEliminar")
.addEventListener("click", async ()=>{

    const id =
    document.getElementById("delete_id").value;

    await APIService.eliminarContacto(id);

    location.reload();

});