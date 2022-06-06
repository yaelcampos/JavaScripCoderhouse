function sacar_entradas() {

let cant_entradas = prompt("Ingrese la cantidad de entradas para su pelicula");
let medio_pago = prompt("Ingrese el medio de pago");
let valor_entrada = 350;

let valor_porcentaje_desc = (cant_entradas * valor_entrada) * 0.10;
let valor_total = (cant_entradas * valor_entrada)
let total_pago_efvo = valor_total - valor_porcentaje_desc

let incremento_porcentaje_tarj = (cant_entradas * valor_entrada) * 0.15;
let total_pago_tarjeta = valor_total + incremento_porcentaje_tarj



if (cant_entradas >= 3 &&  medio_pago == "efectivo") {
    
    alert("Usted recibe un 10 % de descuento,el total a pagar es: " + total_pago_efvo + " pesos");

    } else if (cant_entradas >= 3 &&  medio_pago == "tarjeta"){
        alert("Usted recibe un incremento del 15 % en su total a pagar es: " + total_pago_tarjeta + " pesos" );

    }

}

function disfruta () {
    alert("Que drisfrutes tu peli :) y no te olvides tus pochoclos")
}

sacar_entradas();
disfruta();


