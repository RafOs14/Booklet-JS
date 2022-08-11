/*Declarar un array con nombres de asignatura, y generar un select, donde los values de las etiquetas
option sean la posición de la asignatura en la colección. Luego, escuchar el evento change sobre el select,
asegurando que la función manejadora dispare una salida en el HTML, especificando el elemento escogido por el usuario.*/

//Declaramos el array
const asignaturas = ["Programación", "Base de Datos", "Sistemas Operativos", "Sistemas Embebidos", "Redes", "Seguridad Informática", "Lenguajes de Programación", "Sistemas Móviles", "Sistemas Embebidos", "Redes", "Seguridad Informática", "Lenguajes de Programación", "Sistemas Móviles"];

//Creamos el select
let select = document.createElement("select");

//Asignamos el id al select
for(let i = 0; i < asignaturas.length; i++){
    select.innerHTML += "<option value=" + i + ">" + asignaturas[i] + "</option>";
}

//Asignamos el evento al select
select.addEventListener('change', function(e){
    //Creamos el elemento que se va a mostrar
    const mensaje = document.createElement("h2");
    //Mostramos la asignatura seleccionada
    mensaje.innerText = "Asignatura elegida: " + asignaturas[e.target.value];
    //Mostramos el mensaje en el HTML
    document.body.appendChild(mensaje);
});

//Agregamos el select al HTML
document.body.appendChild(select);

