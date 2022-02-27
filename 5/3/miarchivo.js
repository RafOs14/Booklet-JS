/*Declarar un método para la clase Tienda con la siguiente cabecera 
estaAbierto(hora). Este retorna true si la hora enviada está entre las 
08 y 12, o entre las 15 y 19. Caso contrario, se retorna false.
Luego invocar al menos un (1) objeto usando esta clase, y solicitar al 
usuario tres (3) horas. Informar por alerta si la tienda está abierta, 
en función de la hora ingresada.*/


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
}

const tiendita = new Tienda("Lo de papu","Calle falsa 123","Papu Gomez","Restaurante");

for (let i = 0; i < 3; i++){
    let hora = parseInt(prompt("Ingrese la hora: "));
    if(tiendita.estaAbierto(hora)){
        alert("La tienda esta abierta");
    }else{
        alert("La tienda esta cerrada");
    }
}