/*Declarar un clase Tienda que permita registrar:
Nombre de la tienda.
Dirección de la tienda.
Propietario de la tienda.
Rubro de la tienda.
Luego invocar al menos tres (3) objetos usando esta clase.
*/


class Tienda {
    constructor(nombre,direccion,propietario,rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

const tienda1 = new Tienda("Kwik-E-Mart","Park 123","Apu","Almacen");
const tienda2 = new Tienda("Kiosko Pocho","Calle Falsa 123","Pocho","Kiosko")
const tienda3 = new Tienda("Lo de Marta","Av. Italia 423","Marta","Mercería")

document.write(`Nombre de la tienda ${tienda1.nombre}, su dirección ${tienda1.direccion}, el propietario de la misma es ${tienda1.propietario} y el rubro de la misma es ${tienda1.rubro}<br>`);
document.write(`Nombre de la tienda ${tienda2.nombre}, su dirección ${tienda2.direccion}, el propietario de la misma es ${tienda2.propietario} y el rubro de la misma es ${tienda2.rubro}<br>`);
document.write(`Nombre de la tienda ${tienda3.nombre}, su dirección ${tienda3.direccion}, el propietario de la misma es ${tienda3.propietario} y el rubro de la misma es ${tienda3.rubro}<br>`);
