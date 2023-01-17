// ACTIVIDAD 2 REGISTRO DE TIENDAS
// Solicitar al usuario el registro de cinco (5) tiendas.
// Emplear la clase Tienda de la actividad 1, para instanciar los objetos en función de las entradas 
// capturadas. Generar una única salida compuesta por la información de los objetos instanciados.

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