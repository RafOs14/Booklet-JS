// ACTIVIDAD 1 BOTÓN DEL NÚCLEO
// Incluir un botón con el ID ‘btnNucleo’ manipulando el DOM. Luego, escuchar el evento click sobre el 
// botón generado, asegurando que la función manejadora dispare una salida a elección en el HTML, 
// cuando se presione el elemento.

//Declaro variables y creo elemento html
let div = document.createElement('div');
let counter = document.createElement('div');
let clicks = 0;


//Agrego los elementos al DOM
div.innerHTML = `<button id='btnNucleo'>Nucleo</button>`;
document.body.appendChild(div);
document.body.appendChild(counter);


//Agrego el evento click al boton
document.getElementById('btnNucleo').addEventListener('click', function(){    
    counter.innerHTML = `<p>Clicks: ${clicks++}</p>`;    
})


//Solucion propuesta
/*************************************************************************/
//CREANDO EL BOTÓN DESDE JS
//const btnNucleo = document.createElement("button");
//ASIGNAR ID AL BOTÓN
//btnNucleo.id = 'btnNucleo';
//ASIGNAR EL INTERIOR DEL BOTÓN
//btnNucleo.innerHTML = 'BOTON DEL NUCLEO';
//ESCUCHAR EL EVENTO CLICK
// btnNucleo.addEventListener('click', function () {
//     const h3 = document.createElement('h3');
//     h3.innerHTML = 'HOLA CODER';
//     document.body.appendChild(h3);
// })
//AGREGAR EL BOTON AL DOM
//document.body.appendChild(btnNucleo);
