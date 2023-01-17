// ACTIVIDAD 1 LA TIENDA
// Declarar un clase Tienda que permita registrar:
// Nombre de la tienda.
// Dirección de la tienda.
// Propietario de la tienda.
// Rubro de la tienda.
// Luego invocar al menos tres (3) objetos usando esta clase.

class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

for(let i = 0; i < 3; i++){
    let nombre = prompt('Ingrese el nombre de la tienda');
    let direccion = prompt('Ingrese la direccion de la tienda');
    let propietario = prompt('Ingrese el propietario de la tienda');
    let rubro = prompt('Ingrese el rubro de la tienda');
    let tienda = new Tienda(nombre, direccion, propietario, rubro);
    console.log(tienda);
}

//Solucion Propuesta

let tienda1 = new Tienda('Tienda 1', 'Direccion 1', 'Propietario 1', 'Rubro 1');
let tienda2 = new Tienda('Tienda 2', 'Direccion 2', 'Propietario 2', 'Rubro 2');
let tienda3 = new Tienda('Tienda 3', 'Direccion 3', 'Propietario 3', 'Rubro 3');

console.log(tienda1);
console.log(tienda2);
console.log(tienda3);



