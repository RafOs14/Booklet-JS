/*Declarar una clase Jugador que permita
registrar nombre, número de camiseta, edad, y
si está lesionado. Luego instanciar al menos
cinco (5) objetos usando esta clase, y
asociarlos a un array.*/

class Jugador{
    constructor(nombre,numeroCamiseta,edad,lesionado){
        this.nombre = nombre;
        this.numeroCamiseta = numeroCamiseta;
        this.edad = edad;
        this.lesionado = lesionado;
    }
};

const equipo = [];

equipo.push(new Jugador("Papu",1,20,false));
equipo.push(new Jugador("Martin",2,20,false));
equipo.push(new Jugador("Juan",3,20,false));
equipo.push(new Jugador("Juan Marcos",4,20,false));
equipo.push(new Jugador("Juan Pablo",5,20,false));

console.log(equipo);

