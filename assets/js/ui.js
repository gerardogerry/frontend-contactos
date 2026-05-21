export function mostrarContactos(contactos){

    const tabla = document.getElementById("tablaContactos");

<<<<<<< HEAD
    tabla.innerHTML = "";
=======
        const tabla =
        document.getElementById("tablaContactos");
>>>>>>> 089316df9b966e1481b9261f3b6dd0f93797f5cf

    contactos.forEach(contacto => {

        tabla.innerHTML += `

            <tr>

                <td>${contacto.id_contacto}</td>
                <td>${contacto.nombre}</td>
                <td>${contacto.apellido}</td>
                <td>${contacto.nombre_categoria}</td>

<<<<<<< HEAD
                <td>
=======
                    <td>${contacto.id_contacto}</td>

                    <td>${contacto.nombre}</td>

                    <td>${contacto.apellido}</td>

                    <td>${contacto.fecha_nacimiento}</td>

                    <td>${contacto.nombre_categoria}</td>

                    <td>${contacto.valor}</td>
>>>>>>> 089316df9b966e1481b9261f3b6dd0f93797f5cf

                    <button
                        class="btn btn-warning btn-sm editar"
                        data-id="${contacto.id_contacto}">

<<<<<<< HEAD
                        <i class="fa-solid fa-pen"></i>
=======
                        <button
                            class="btn btn-warning btn-sm rounded-pill btn-editar"
                            data-id="${contacto.id_contacto}">
>>>>>>> 089316df9b966e1481b9261f3b6dd0f93797f5cf

                    </button>

                    <button
                        class="btn btn-danger btn-sm eliminar"
                        data-id="${contacto.id_contacto}">

<<<<<<< HEAD
                        <i class="fa-solid fa-trash"></i>
=======
                        <button
                            class="btn btn-danger btn-sm rounded-pill btn-eliminar"
                            data-id="${contacto.id_contacto}">
>>>>>>> 089316df9b966e1481b9261f3b6dd0f93797f5cf

                    </button>

                </td>

            </tr>

        `;

    });

}
