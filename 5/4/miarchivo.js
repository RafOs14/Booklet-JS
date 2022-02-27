/*Declarar un método para la clase Tienda con la siguiente cabecera 
esPropietario(nombre). Se retorna true si el nombre enviado corresponde 
al propietario de la tienda.Caso contrario, se retorna false.
Luego, invocar al menos tres(3) objetos usando esta clase y solicitar al 
usuario cinco(5) nombres. Informar por alerta si los nombres pertenecen a 
algún dueño de tienda.*/

class Tienda {
    constructor(nombre,direccion,propietario,rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    estaAbierto(hora){
        if(hora >= 8 && hora <= 12 || hora >= 15 && hora <= 19){
            return true;
        }else{
            return false;
        };
    };

    esPropietario(nombre){
        if(this.propietario == nombre){
            return true;
        }else{
            return false;
        };
    }
}

const tiendita = new Tienda("Lo de papu","Calle falsa 123","Papu Gomez","Restaurante");

for(let i=0; i<5; i++){
    let nombre = prompt("Ingrese el nombre: ");
    if(tiendita.esPropietario(nombre)){
        alert("El nombre pertenece a un propietario");
    }else{
        alert("El nombre no pertenece a un propietario");
    }
};