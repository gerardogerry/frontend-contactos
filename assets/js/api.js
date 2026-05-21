const API = "http://localhost/backend-contactos/index.php";

export default class APIService {

    static async obtenerContactos(){

        const response = await fetch(
            `${API}?action=recientes&limite=100`
        );

        return await response.json();

    }

    static async agregarContacto(data){

        await fetch(`${API}?action=agregar`,{

            method: "POST",

            headers:{
                "Content-Type":"application/json"
            },

            body: JSON.stringify(data)

        });

    }

    static async actualizarContacto(data){

        await fetch(`${API}?action=actualizar`,{

            method:"PUT",

            headers:{
                "Content-Type":"application/json"
            },

            body: JSON.stringify(data)

        });

    }

    static async eliminarContacto(id_contacto){

        await fetch(`${API}?action=eliminar`,{

            method:"DELETE",

            headers:{
                "Content-Type":"application/json"
            },

            body: JSON.stringify({
                id_contacto
            })

        });

    }

}