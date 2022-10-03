var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

 //"y:'q g:z ih'uq";
//var texto = "hola soy julia";



var texto = (textareaId) => document.getElementById(textareaId).value; 

var searchIndex = (alphabet, letter) => {
    for (var i = 0; i < alphabet.length; i++){
        if (alphabet[i] === letter) return i;
    }
         return -1;
     };



var transformLetter = (letter, strOrigin, strDestiny) => {
var letterIndex = searchIndex(strOrigin, letter);
if(letterIndex === - 1){
    return letter;
} else {
    return strDestiny[letterIndex];
}};

var transformMessage = (texto, strOrigin, strDestiny, textareaId) => {
    var textoLowerCase = texto.toLowerCase();
   var result = "";
    for(let letter of textoLowerCase) {
        
result = result + transformLetter(letter, strOrigin, strDestiny);
    } 
   
    document.getElementById(textareaId).innerText = result;
    };


//console.log(encriptMessage(texto));

document.getElementById("button1").addEventListener("click", () => transformMessage(texto("textarea1"), plainAlphabet, encryptedAlphabet, "textarea2"));
document.getElementById("button2").addEventListener("click", () => transformMessage(texto("textarea2"), encryptedAlphabet, plainAlphabet, "textarea1"));