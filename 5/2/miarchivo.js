/*Solicitar al usuario el registro de cinco (5) tiendas.
Emplear la clase Tienda de la actividad 1, para instanciar los 
objetos en función de las entradas capturadas. Generar una única salida 
compuesta por la información de los objetos instanciados.*/

class Tienda {
    constructor(nombre,direccion,propietario,rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

let ingresados = '';
for (let i = 0; i < 5; i++){
    let tienda = new Tienda(
        prompt('Ingrese el nombre de la tienda:'),
        prompt('Ingrese la direccion de la tienda:'),
        prompt('Ingrese el propietario de la tienda:'),
        prompt('Ingrese el rubro de la tienda: '));

    ingresados += "Tienda: "+tienda.nombre+ " "+
                  "Direccion: "+tienda.direccion+ " "+
                  "Propietario: "+tienda.propietario+ " "+
                  "Rubro: "+tienda.rubro+ "\n";    
}

console.log(ingresados);