/*Incluir un botón con el ID ‘btnNucleo’ manipulando el DOM. Luego, escuchar el
evento click sobre el botón generado, asegurando que la función manejadora dispare
una salida a elección en el HTML, cuando se presione el elemento. */

//Se crea el boton
const btnNucleo = document.createElement("button");

//Asigna el id al boton
btnNucleo.id = "btnNucleo";

//Asignamos el texto al boton
btnNucleo.innerText = "Button Core";

//Escuchamos el evento click
btnNucleo.addEventListener("click", function(){
    //Creamos el elemento que se va a mostrar
    const mensaje = document.createElement("h2");
    //Asignamos el texto al elemento
    mensaje.innerText = "Core JS";
    //Agregamos el mensaje al DOM
    document.body.appendChild(mensaje);
});
//Agregamos el boton al DOM
document.body.appendChild(btnNucleo);

