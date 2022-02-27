/*Declarar un clase Hamburgesa que permita
registrar nombre de la hamburguesa, el precio,
los ingredientes, y el número de combo.
Luego instanciar al menos cinco (5) objetos
usando esta clase, asociarlos a un array, y
almacenarlos con la clave ‘hamburguesas’ en el
localStorage.*/


class Hamburguesa {
    constructor(nombre,precio,ingredientes,nroCombo){
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.ingredientes   = ingredientes;
    this.nroCombo   = parseInt(nroCombo);
    }
}

const hamburguesas = [];

hamburguesas.push(new Hamburguesa("BigMc",350,['Carne','Queso','Pepino','Mayonesa','Lechuga'],1));
hamburguesas.push(new Hamburguesa("Doble Cuarto de libra",400,['Carne','Queso','Panceta','Mayonesa','Ketchup'],2));
hamburguesas.push(new Hamburguesa("Doble MCHuevo",300,['Carne','Queso','Huevo','Cheddar','Ketchup'],3));
hamburguesas.push(new Hamburguesa("Doble McBacon",370,['Carne','Queso','Bacon','Mayonesa','Ketchup','Salsa'],4));
hamburguesas.push(new Hamburguesa("Doble McNifica",290,['Carne','Queso','Tomate','Lechuga','Mayonesa'],5));

localStorage.setItem('hamburguesas', JSON.stringify(hamburguesas));

