/*
Declarar variables para representar la
información de un carnet de conducir.
Luego, concatenarlas y asignar el
resultado de la operación a una variable
denominada carnet.*/

let nombre = "Homero";
let direccion = "Av. Siempre Viva 742";
let pais = "Estados Unidos";
let edad = 33;
let fecha = "02/11/88";
let nroCarnet = "B47U89RE243";

let carnet = `Nombre: ${nombre},
              Dirección: ${direccion},
              Pais: ${pais},
              Edad: (${edad}),
              Nacimiento: ${fecha},
              Nro. Carnet: ${nroCarnet}`;

document.write(carnet);
