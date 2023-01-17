// ACTIVIDAD 4 VALIDAR PROPIETARIO
// Declarar un método para la clase Tienda con la siguiente cabecera esPropietario(nombre). 
// Se retorna true si el nombre enviado corresponde al propietario de la tienda.Caso contrario, 
// se retorna false.
// Luego, invocar al menos tres(3) objetos usando esta clase y solicitar al usuario cinco(5) nombres. 
// Informar por alerta si los nombres pertenecen a algún dueño de tienda.

class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    
    esPropietario(nombre){
        if(nombre == this.propietario){
            return true;
        }else{
            return false;
        }
    }
}

let nombre = prompt('Ingrese el nombre de la tienda');
let direccion = prompt('Ingrese la direccion de la tienda');
let propietario = prompt('Ingrese el propietario de la tienda');
let rubro = prompt('Ingrese el rubro de la tienda');
let tienda = new Tienda(nombre, direccion, propietario, rubro);

for(let i = 0; i < 5; i++){
    let nombre = prompt('Ingrese el nombre');
    if(tienda.esPropietario(nombre)){
        alert('El nombre pertenece a un propietario');
    }else{
        alert('El nombre no pertenece a un propietario');
    }
}