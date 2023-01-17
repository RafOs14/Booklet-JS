// ACTIVIDAD 4 LA BANDA
// Declarar una clase Cantante, instanciando al menos cinco (5) objetos con ella, asignándoles a un 
// array. Luego, por cada cantante crear una etiqueta div, cuya estructura interna detalle la información 
// del objeto, agregando cada contenedor al body.

class Cantante{
    constructor(nombre, apellido, edad, genero){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = genero;
    }
}

const cantantes = [];

for(let i = 0; i < 5; i++){
    let nombre = (prompt("Ingrese el nombre del cantante" ));
    let apellido = (prompt("Ingrese el apellido del cantante" ));
    let edad = parseInt((prompt("Ingrese la edad del cantante")));
    let genero = (prompt("Ingrese el genero del cantante"));

    cantantes.push(new Cantante(nombre, apellido, edad, genero));
}

console.log(cantantes);

for ( const cantante of cantantes) {
    let div = document.createElement("div");
    div.innerHTML = `<h2>${cantante.nombre}</h2>
                     <p>${cantante.apellido} / ${cantante.edad} / ${cantante.genero}</p>
                     <hr>`;
    document.body.appendChild(div);
}

// Solucion propuesta

// class Cantante{
//     constructor(nombre, edad, pais){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.pais = pais;
//     }
// }
// const cantantes = [];
// cantantes.push(new Cantante('HOMERO',39,'USA'));
// cantantes.push(new Cantante('BARNEY',40,'USA'));
// cantantes.push(new Cantante('APU',42,'INDIA'));
// cantantes.push(new Cantante('SKINNER',38,'USA'));
// for (const cantante of cantantes) {
//     let div = document.createElement("div");
//     div.innerHTML = `<h2>${cantante.nombre}</h2>
//                      <p>${cantante.edad} / ${cantante.pais}</p>
//                      <hr>`;
//     document.body.appendChild(div);
// }
