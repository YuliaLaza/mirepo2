var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var texto = "hola soy julia";


var searchIndex = (str, value) => {
    for(var i = 0; i < str.length; i++) {
        if(str[i] === value) {
             return i };
        
        return -1;
    }};

searchIndex();


var encriptMessage = texto => {
    //var textLowerCase = text.toLowerCase();
   var result = "";
    for(let letter of texto) {
        var indexPosition = searchIndex(plainAlphabet, texto[letter])
        if(indexPosition > -1){
            result = result + encryptedAlphabet[indexPosition];
        }else {
            result = result + texto[letter];
        }
        
    } 
       return texto
    };
console.log(encriptMessage());