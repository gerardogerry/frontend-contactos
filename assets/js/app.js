import {
    obtenerContactos,
    agregarContacto,
    actualizarContacto,
    eliminarContacto
}
from "./api.js";

import {
    mostrarContactos
}
from "./ui.js";

const form = document.getElementById("formContacto");

async function cargarDatos(){

    const contactos = await obtenerContactos();

    mostrarContactos(contactos);

}

cargarDatos();

form.addEventListener("submit", async(e)=>{

    e.preventDefault();

    const id = document.getElementById("id_contacto").value;

    const contacto = {

        nombre: document.getElementById("nombre").value,

        apellido: document.getElementById("apellido").value,

        id_categoria: document.getElementById("id_categoria").value

    };

    if(id){

        await actualizarContacto(id, contacto);

    }else{

        await agregarContacto(contacto);

    }

    form.reset();

    cargarDatos();

});

document.addEventListener("click", async(e)=>{

    if(e.target.closest(".eliminar")){

        const id = e.target.closest(".eliminar").dataset.id;

        const confirmar = confirm("¿Eliminar contacto?");

        if(confirmar){

            await eliminarContacto(id);

            cargarDatos();

        }

    }

});