var banknotesAndCoins = [200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10 ];



var totalToPay = () => Number(document.getElementById("total").value);
var moneyGiven = () => Number(document.getElementById("entregado").value);

function total (change){
    var result = "";
    while(change !== 0){
for (const coin of banknotesAndCoins) {
    if(coin <= change){
     change = Number((change - coin).toFixed(2));
     result = result + coin + " ";
 }}} 
    return result
};

function calcMoney() {
var change = moneyGiven() - totalToPay();
if (change < 0) {
    document.getElementById("totalEntregado").innerText = "El dinero entregado es menor a total"
}else {
    document.getElementById("totalEntregado").innerText = total(change);
}
};

document.getElementById("calc").addEventListener("click", calcMoney)// addevent ejecuta la funcion por mi, por eso no hace falta()
