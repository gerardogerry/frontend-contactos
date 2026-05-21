export default class UI {

    static mostrarContactos(contactos){

        const tabla = document.getElementById("tablaContactos");

        tabla.innerHTML = "";

        contactos.forEach(contacto => {

            tabla.innerHTML += `

                <tr>

                    <td>${contacto.id_contacto}</td>
                    <td>${contacto.nombre}</td>
                    <td>${contacto.apellido}</td>
                    <td>${contacto.fecha_registro}</td>
                    <td>${contacto.id_contacto}</td>

                    <td>

                        <button class="btn btn-warning btn-sm btnEditar"
                            data-id="${contacto.id_contacto}"
                            data-bs-toggle="modal"
                            data-bs-target="#modalActualizar">

                            <i class="bi bi-pencil-square"></i>

                        </button>

                        <button class="btn btn-danger btn-sm btnEliminar"
                            data-id="${contacto.id_contacto}"
                            data-bs-toggle="modal"
                            data-bs-target="#modalEliminar">

                            <i class="bi bi-trash-fill"></i>

                        </button>

                    </td>

                </tr>

            `;

        });

    }

}