// ACTIVIDAD 3 ALMACENAR HAMBURGUESA
// Declarar un clase Hamburgesa que permita registrar nombre de la hamburguesa, el precio, los ingredientes, 
// y el número de combo. Luego instanciar al menos cinco (5) objetos usando esta clase, asociarlos a un array, 
// y almacenarlos con la clave ‘hamburguesas’ en el localStorage.


class Hamburgesa {
    constructor(name, price, ingredients, nroCombo){
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
        this.nroCombo = nroCombo;
    }
}

const hamburguesas = [];

for (let i = 0; i < 5; i++) {
    hamburguesas.push(new Hamburgesa(prompt('Ingrese el nombre de la hamburguesa'), prompt('Ingrese el precio de la hamburguesa'), prompt('Ingrese los ingredientes de la hamburguesa'), prompt('Ingrese el numero de combo de la hamburguesa')));
}

localStorage.setItem('hamburguesas', JSON.stringify(hamburguesas));

//Solucion propuesta
// class Hamburgesa {
//     constructor(nombre, precio, ingredientes, combo) {
//         this.nombre = nombre;
//         this.precio = parseFloat(precio);
//         this.ingredientes = ingredientes;
//         this.combo = parseInt(combo);
//     }
// }
// const hamburgesas = [];
// hamburgesas.push(new Hamburgesa("Krusty Burger", 150, ['Carne', 'Queso'], 1));
// hamburgesas.push(new Hamburgesa("Krusty Doble", 250, ['Carne', 'Queso', 'Panceta'], 0));
// hamburgesas.push(new Hamburgesa("Krusty Pollo", 150, ['Pollo', 'Queso'], 2));
// hamburgesas.push(new Hamburgesa("Super Krusty", 150, ['Carne', 'Queso', 'huevo'], 5));
// hamburgesas.push(new Hamburgesa("Krusty Vegan", 150, ['Espinaca', 'Soja'], 7));
// localStorage.setItem('hamburgesas', JSON.stringify(hamburgesas));