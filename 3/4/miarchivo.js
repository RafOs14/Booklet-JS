/*Solicitar al usuario la carga de
nombres de forma consecutiva, 
hasta que se ingrese “Voldemort”.
Luego realizar un única salida por
alerta, con todos los nombres
ingresados.*/

/*let nombre = "";
do{
    nombre += prompt("Ingrese un nombre: ") + " ";
}while(nombre != "Voldemort");

alert(nombre);*/

let nombre = prompt("Ingrese un nombre: ");
let listado = '';

while(nombre != 'Voldemort'){
    listado += nombre + "\n";
    nombre = prompt("Ingrese un nombre: ");
}

document.write(`<h1>${listado}</h1>`);