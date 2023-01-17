// ACTIVIDAD 1 BIENVENIDO A...
// Declarar un array con nombres de ciudades y recorrerlo. Por cada ciudad, crear un etiqueta h2 que 
// contenga el nombre, y agregarla al body.


let ciudades = [];

for (let i = 0; i < 10; i++) {
    ciudades.push(prompt("Ingrese una ciudad"));
}

for (let x = 0; x < ciudades.length; x++){
    let h2 = document.createElement("h2");
    h2.textContent = ciudades[x];
    document.body.appendChild(h2);    
}


//Solucion propuesta
// const ciudades = [  "Springfield",
//                     "Shelbyville",
//                     "Capital City",
//                     "Cypress Creek",
//                     "Ogdenville"];
// for (const ciudad of ciudades) {
//     let h2 = document.createElement('h2');
//     h2.innerHTML = ciudad;
//     document.body.appendChild(h2);
// }
