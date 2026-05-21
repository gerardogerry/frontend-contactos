export function mostrarContactos(contactos){

    const tabla = document.getElementById("tablaContactos");

    tabla.innerHTML = "";

    contactos.forEach(contacto => {

        tabla.innerHTML += `

            <tr>

                <td>${contacto.id_contacto}</td>
                <td>${contacto.nombre}</td>
                <td>${contacto.apellido}</td>
                <td>${contacto.nombre_categoria}</td>

                <td>

                    <button
                        class="btn btn-warning btn-sm editar"
                        data-id="${contacto.id_contacto}">

                        <i class="fa-solid fa-pen"></i>

                    </button>

                    <button
                        class="btn btn-danger btn-sm eliminar"
                        data-id="${contacto.id_contacto}">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </td>

            </tr>

        `;

    });

}