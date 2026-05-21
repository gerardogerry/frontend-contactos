const API =
"https://gerardosilvaescorza22201128.com/backend-contactos/index.php";

export async function obtenerContactos(){

    const respuesta = await fetch(API_URL);

    return await respuesta.json();

}

export async function agregarContacto(contacto){

    await fetch(API_URL, {

        method: "POST",

        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify(contacto)

    });

}

export async function actualizarContacto(id, contacto){

    await fetch(`${API_URL}/${id}`, {

        method:"PUT",

        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify(contacto)

    });

}

export async function eliminarContacto(id){

    await fetch(`${API_URL}/${id}`, {

        method:"DELETE"

    });

}
