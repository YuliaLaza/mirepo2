const reservas = [
    {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3
    },
    {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4
    },
    {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1
    }
    ];
    

class Calc {
    constructor() {
        this._calcReservas = [];
        this._subtotal = 0;
        this._total = 0;
    };     

calculaSubtotal() {
    

    let precioReserva = () => this._calcReservas.reduce((acc, reserva) => 
    (acc + (reserva.tipoHabitacion === "standard" ? 100 :150)  * reserva.noches) ,0)


    let precioExtra = () => this._calcReservas.reduce((extra, reserva) => 
    extra + reserva.pax > 1 ? (40 * (reserva.pax - 1)) * reserva.noches : 0
    , 0)
     
this._subtotal = precioReserva() + precioExtra()
     };
 
    
  

CalcTotal() {
   this._total = this._subtotal * 1.21
};


get subtotal() {
    return this._subtotal; //desde fuera devuelve el valor de la propiedad this._subtotal
};

get total() {
    return this._total;
};


set reserva(reservaExterna){
    this._calcReservas = reservaExterna;
    this.calculaSubtotal();
    this.CalcTotal();
}

 } ;


    const reservaTotal = new Calc();
    reservaTotal.reserva = reservas;
    console.log("subtotal", reservaTotal.subtotal);
    console.log("total", reservaTotal.total)


 class tourOperador extends Calc {
  
constructor(){
     super();
     this._descuento = 0.15
   
}
calculaSubtotal () {
super.calculaSubtotal();
     let precioReserva = () => this._calcReservas.reduce((acc, reserva) => 
        acc + (100  * reserva.noches) ,0)
    

 let precioExtra = () => this._calcReservas.reduce((extra, reserva) => 
 extra + reserva.pax > 1 ? (40 * (reserva.pax - 1)) * reserva.noches : 0
, 0) // esta es la que no se modifica, pero al quitarla no la encuentra
    

let subtotalSinDescuento = precioReserva() + precioExtra();

 this._subtotal = subtotalSinDescuento - subtotalSinDescuento * this._descuento
}
};

 const descuentoAgencia = new tourOperador();
descuentoAgencia.reserva = reservas;
console.log("Subtotal de la agencia con el descuento " , descuentoAgencia._subtotal)
console.log(" Total de la agencia con el descuento" , descuentoAgencia.total)