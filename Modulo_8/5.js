// ACTIVIDAD 5 BOTON CONTRATAR
// Usando de base la resolución de la actividad 4, añadir un ‘id’ como propiedad a la clase Cantante, y 
// modificar las instancias, definiendo un identificador único por cada cantante.
// Luego, por cada div generado, incluir un botón cuyo id de la etiqueta tenga el valor asociado a la 
// propiedad ‘id’ del objeto, y el texto de cada botón sea ‘Contratar”.

class Cantante{
    constructor(nombre, apellido, edad, genero, id){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = genero; 
        this.id = id;       
    }
}

function contratar(){
    alert("Cantante Contratado");
}

const cantantes = [];

for(let i = 0; i < 5; i++){
    let nombre = (prompt("Ingrese el nombre del cantante" ));
    let apellido = (prompt("Ingrese el apellido del cantante" ));
    let edad = parseInt((prompt("Ingrese la edad del cantante")));
    let genero = (prompt("Ingrese el genero del cantante"));  
    let id = i+1;  

    cantantes.push(new Cantante(nombre, apellido, edad, genero, id));
}

//console.log(cantantes);

for ( const cantante of cantantes) {
    let div = document.createElement("div");
    div.innerHTML = `<h2>${cantante.nombre}</h2>
                     <p>${cantante.id} / ${cantante.apellido} / ${cantante.edad} / ${cantante.genero}</p>
                     <button id='${cantante.id}' onClick='contratar()'>Contratar</button>                     
                     <hr>
                     `;
    document.body.appendChild(div);
}

//Solucion Propuesta

// class Cantante{
//     constructor(id,nombre, edad, pais){
//         this.id = id;
//         this.nombre = nombre;
//         this.edad = edad;
//         this.pais = pais;
//     }
// }
// const cantantes = [];
// cantantes.push(new Cantante(1,'HOMERO',39,'USA'));
// cantantes.push(new Cantante(2,'BARNEY',40,'USA'));
// cantantes.push(new Cantante(3,'APU',42,'INDIA'));
// cantantes.push(new Cantante(4,'SKINNER',38,'USA'));

// for (const cantante of cantantes) {
//     let div = document.createElement("div");
//     div.innerHTML = `<h2>${cantante.nombre}</h2>
//                      <p>${cantante.edad} / ${cantante.pais}</p>
//                      <button id='${cantante.id}'>Contratar</button>
//                      <hr>`;
//     document.body.appendChild(div);
// }
