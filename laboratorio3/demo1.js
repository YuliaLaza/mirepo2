// const product = { count: 3, price: 12.55, type: "alimentacion" };

// product.count <= 0 ? product.count = 0: product.count;


//  let precioTotal = product.count * product.price;

// console.log("El precio total de la compra sin Iva son ", precioTotal);

//----------------------------------------------------
 //CON SWITCH
//----------------------------------------------------

// let precioConIva;

//   switch (product.type) {
//       case "alimentacion": precioConIva = product.price * 0.1 + product.price; break;
//       case "libro": precioConIva = product.price * 0.04 + product.price; break;
//       default: precioConIva = product.price * 0.21 + product.price; break;
//       }

//    console.log("El precio total por producto Iva incuido son ", precioConIva);
//    let precioTotalIva = precioConIva * product.count;
//    console.log("El precio total de la compra con Iva son ", precioTotalIva);


//-------------------------------------------------------------
//CON IF
//-------------------------------------------------------------
//  let precioConIva;

// if (product.type === "alimentacion") {
//     precioConIva = product.price * 0.1 + product.price;

// } else if (product.type === "libro") {
//     precioConIva = product.price * 0.04 + product.price;
//     }
// else {
//      precioConIva = product.price * 0.21 + product.price;
// }

// console.log("El precio total por producto Iva incuido son ", precioConIva);
// let precioTotalIva = precioConIva * product.count;
// console.log("El precio total de la compra con Iva son ", precioTotalIva);

//------------------------------------------------------

//SUELDO NETO EN NOMINA

//------------------------------------------------------

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
   }
let sueldo = 14500;

let retencion;
   
       if (sueldo <= 12000) {
            console.log(sueldo - (sueldo * 0));
       }
    
       else if  (sueldo > 12000 && sueldo <= 24000) {
           retencion = 0.08;
       } 
    
      else if (sueldo > 24000 && sueldo < 34000) {
           retencion = 0.16;
       } 
       
       else if (sueldo >= 34000) {
           retencion = 0.3;
       };

let sueldoRetencion = sueldo - (sueldo * retencion);
console.log("El sueldo anual descontanto la retencion son ", sueldoRetencion);


let netoAnualNomina =  empleado.hijos > 0 ? sueldoRetencion + (sueldo * 0.02) : sueldoRetencion;
console.log("El sueldo neto anual en nomina son ", netoAnualNomina);

//let pagas = 14; Como es mejor hacer esto, creando una variable o accediendo directamente al objeto?

//let netoMensual = pagas === 14 ? netoAnualNomina / 14: netoAnualNomina / 12;
//console.log("El neto mensual son ", netoMensual);

       
let netoMensual = empleado.pagas === 14 ? netoAnualNomina / 14: netoAnualNomina / 12;
console.log("El neto mensual son ", netoMensual);