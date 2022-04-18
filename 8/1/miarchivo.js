/*Declarar un array con nombres de ciudades y
recorrerlo. Por cada ciudad, crear un etiqueta
h2 que contenga el nombre, y agregarla al
body.*/

const ciudades = ["Montevideo","Springfield","Buenos Aires","San Pablo","Barcelona"];

for(cont of ciudades){
    let h2 = document.createElement("h2");
    h2.innerHTML = cont;
    document.body.appendChild(h2);
}
