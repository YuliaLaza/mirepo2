
// Ejercicios Esenciales de Repaso

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------


// Funciones básicas

//---------------------------------------------------------------------------------------------------

// Implementa una función que muestre por consola “Hola Mundo”.


// function hello() {
//     console.log("Hola Mundo");
// }
//  hello();

//---------------------------------------------------------------------------------------------------

 // Implementa una función que admita como parámetro un nombre y salude por consola a dicha persona.
 
//  function saludar(name) {
//      console.log("Hola " + name);
//  }
//  saludar("Julia");

//---------------------------------------------------------------------------------------------------

 // Implementa una función que dado un string como parámetro devuelva el string en mayúsculas.

//  function mayuscula(str) {
//         console.log(str.toUpperCase());
//         return mayuscula;
//     }
//     mayuscula("Hoy es un dia maravilloso");

 //---------------------------------------------------------------------------------------------------

 // Implementa una función que dado un string como parámetro devuelva el string en minúsculas.

//  function minuscula(str) {
//     console.log(str.toLowerCase());
//     return minuscula;
// }
// minuscula("HOY ES UN DIA MARAVILLOSO");

//---------------------------------------------------------------------------------------------------

//Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos.

// function sum(number1, number2) {
    
//    return number1 + number2;
   
// }

// console.log(sum(3, 4));

//---------------------------------------------------------------------------------------------------

// Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3.

// function concat(str1, str2, str3){
// console.log(str1, str2, str3);
// return concat;
// }
// concat("hoy", "es", "lunes");

//---------------------------------------------------------------------------------------------------

//Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada ‘id’
// inicializada a null.

// var person = {
//     age: "30",
//     name: "Julia"
// }

//     var addId = () => person.id = null;

// addId();
// console.log(person);


//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------




// Funciones con if/else, switches y comprobaciones


//---------------------------------------------------------------------------------------------------

// Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o
// null .

// function laquesea(parametro) {

//     if (typeof parametro === undefined) {
//     return "is undefined";

// } else if (typeof parametro === null) {
//     return "is null";
// } else {
//     return "Is " + typeof(parametro);
// }}

// console.log(laquesea());

//---------------------------------------------------------------------------------------------------


// Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.


// function num(number) {
//     if (number > 0 && number !== 0) {
//         return number + " es positivo";
//     } else {
//     return number + " es negativo";

// }}
// console.log(num(- 9));

//---------------------------------------------------------------------------------------------------

// Implementa una función que admita un número como parámetro y diga, por consola, si es mayor que 100, menor que
// 100 o exactamente 100.


// function cien(number) {
//     if(number < 100) {
//         return number + " El numero es menor que 100";
//     } else if (number > 100) {
//         return number + " El numero es mayor que 100";
//     } else {
//       return number + " es igual a 100";
//     }
   
// }

// console.log(cien(100));


//---------------------------------------------------------------------------------------------------

// Implementa una función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name’
// o no.

// const object = {
//     age: "Julia",
// }


// function propiedad() {
// const existePropiedad = "name" in object;
//     if(existePropiedad) {
//         return "name existe";
//          } else {
//           return "name no existe";
        
//     } 
    
// }
// console.log(propiedad());



//---------------------------------------------------------------------------------------------------

// Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.

// function esDivisible(number1, number2) {

// if(number1 % number2 === 0) {
//     return true;

// } else {
//     return false;
// }
// }

// console.log(esDivisible(17, 2));


//---------------------------------------------------------------------------------------------------

// Implementa una función que admita un string y un número como parámetro, y comprobar que tienen ese número de
// caracteres.


// function checkString(number, string) {

//     if(number === string.length) {
//         return true;
//     }else {
//         return false;
//     }
// } 
// console.log(checkString(6,"pajaro"));


//---------------------------------------------------------------------------------------------------

// Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva que día de la
// semana es (en texto).


// function diaDeLaSemana(day) {

// switch(day) {
// case 1: console.log("Hoy es lunes"); break;
// case 2: console.log("Hoy es martes"); break;
// case 3: console.log("Hoy es miercoles"); break;
// case 4: console.log("Hoy es jueves"); break;
// case 5: console.log("Hoy es viernes"); break;
// case 6: console.log("Hoy es sabado"); break;
// case 7: console.log ("Hoy es domingo"); break;
// }
//  return day;
// }
// diaDeLaSemana(7);


//---------------------------------------------------------------------------------------------------

// Implementa un función que dado un número (del 1 al 12), diga a qué mes corresponde en texto.


// function mesCorrespondiente(mes) {

//     switch(mes) {
//         case 1: console.log("enero"); break;
//         case 2: console.log("febrero"); break;
//         case 3: console.log("marzo"); break;
//         case 4: console.log("abril"); break;
//         case 5: console.log("mayo"); break;
//         case 6: console.log("junio"); break;
//         case 7: console.log("julio"); break;
//         case 8: console.log("agosto"); break;
//         case 9: console.log("septiembre"); break;
//         case 10: console.log("octubre"); break;
//         case 11: console.log("noviembre"); break;
//         case 12: console.log("diciembre"); break;
//     }
//     return mes;

// }
// mesCorrespondiente(11);


//---------------------------------------------------------------------------------------------------
// Implementa una función que admita 2 arrays como argumento, y devuelva el array más largo.


// var arr1 = [1, 3, 4];
// var arr2 = [1, 3, 4, 6];

// function arrayMasLargo(array1, array2) {

//     if(array1.length > array2.length) {
//         console.log("array1 es mas largo que array2 "); 
//         return array1;
//     } else if(array1.length < array2.length) {
//          console.log("array2 es mas largo que el 1"); 
//           return array2;
//     }
//     else {
// console.log("son iguales")
// return "son iguales"; 
//     }
  
// }

// arrayMasLargo(arr1, arr2);


//---------------------------------------------------------------------------------------------------

// Implementa una función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es
// igual o no.



// var arr1 = [1, 3, 4, 5];
// var arr2 = [2, 3, 4];


// function primerElemento(a1, a2) {

//     if(a1[0] === a2[0]) {
//        return true;
        
//     } else {
//         return false;
        
//     } 
// }
// console.log(primerElemento(arr1, arr2));



// Funciones con arrays


//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------



// Implementa una función que admita un array de números, y devuelva el segundo elemento, y en caso de no existir,
// devuelva ‘undefined’ .



//  var myArray = [1, , 3];
 

// function arr(array) {
// ;
//     if(array[1]) {
//        return  array[1];
        
//     } else {
//         return undefined;
//     }
// }
// console.log(arr(myArray));


//---------------------------------------------------------------------------------------------------

// Implementa una función que admita un string como parámetro y devuelva la última letra.


// function abc(string) {
//     let ultima = string[string.length - 1];

// return ultima;
// } 
// console.log(abc("pan"));


//---------------------------------------------------------------------------------------------------

// Implementa una función que dado un array, intercambie el primer elemento por el último. Muestra por consola el
// resultado.

//  var array = [1, 2, 3];

//  function changeElements(arr) {
//      var primero = arr.pop();
//      var ultimo = arr.shift();
//      arr.unshift(ultimo); // hay que guardarlo en una variable?
//      arr.unshift(primero); // hay que guardarlo en una variable?
//  }
//  changeElements(array);
//  console.log(array);


//---------------------------------------------------------------------------------------------------
//  Funciones con bucles


//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

// Implementa una función que admita 2 parámetros, un número y un texto, y que muestre por consola dicho texto tantas
// veces como indique el número.


// function showText(number, string) {

//     for (var i = 1; i <= number; i++) {
//         console.log(string);
//     }

// }
// showText(4, "martes");


//---------------------------------------------------------------------------------------------------


// Implementa una función que admita como parámetro un objeto cualquiera y devuelva el número de propiedades que
// tiene el objeto.

// var objeto = {
//     pr1:"",
//     pr2:"",
// }


// function object(obj) {
//     let longitud = 0;
//     for (var propiedad in obj) {
//         longitud++;
//  }
// console.log("El objeto tiene " + longitud + " propiedades");
// return longitud;
// }
// object(objeto);



//---------------------------------------------------------------------------------------------------

// Implementa una función que admita como parámetro un objeto y muestre por consola los valores de sus propiedades.

// var objeto = {
//     prop1: "uno",
//     prop2: "dos",
// };

// function mostrarValores(obj) {

// for (var propiedad in obj) {
//     console.log(obj[propiedad]);
// }
// }
// mostrarValores(objeto);



//---------------------------------------------------------------------------------------------------

// Implementa una función que admita un array de números y otro parámetro que sea un número y sume cada elemento
// del array multiplicado por dicho número. Devuelve el resultado.




// var array = [1, 2, 3];

// function total(arr, number) {
//     var sum = 0;
// for (var elemento of arr) {
//     sum = sum + (elemento * number);
    
// } console.log(sum);
// return sum;
// }

// total(array, 2);



//---------------------------------------------------------------------------------------------------

// Implementa una función que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece
// dicho carácter en el string.

// function caracter(string, caract) {
// var apariciones = 0;
// for(var i = 0; i < string.length; i++) {
//     if(caract === string[i]) {
//         apariciones = apariciones + 1;
//     } else {
//         apariciones = apariciones + 0;
//     }
// } console.log(apariciones);
// return apariciones;
// } 
//     caracter("perro", "r")


//---------------------------------------------------------------------------------------------------

// Implementa una función que dado un array de cualquier tipo, lo recorra del primer al último elemento, mostrando cada
// elemento por consola.

//  var array = ["lunes", "martes", "miercoles","jueves"];

//  function showArrayItem(arr) {

//      for(var i = 0; i < arr.length; i++) {
// console.log(arr[i]);
//      } 
//  }
//  showArrayItem(array);


//---------------------------------------------------------------------------------------------------

// Implementa una función que dado un array de cualquier tipo, lo recorra desde el último elemento al primero, y lo
// muestre por consola.

// var array = ["lunes", "martes", "miercoles"," jueves"];

//  function dia2(arr){
// for( var i = arr.length -1; i >= 0; i--){
//     console.log(arr[i]);
// }
//  }

// dia2(array);

//---------------------------------------------------------------------------------------------------


// Implementa una función que dado un array de números, y otro parámetro que sea un número, diga cuantos elementos
// son menores a dicho número, y cuántos no.


// var array = [1, 2, 3, 4];


// function elementosMenores(arr, number) {

// var contadorMenores = 0;
// var contadorNoMenores = 0;

// for(var i = 0; i < arr.length; i++) {

//     if(arr[i] < number) {
//         contadorMenores = contadorMenores + 1;
//     } else { 
//         contadorNoMenores = contadorNoMenores + 1;
// }
// }console.log("Numeros menos que " + number + " - " + contadorMenores);
// console.log("Numero no menores que " + number + " - " + contadorNoMenores);
// return elementosMenores;

// }

// elementosMenores(array, 2);



//---------------------------------------------------------------------------------------------------
// Implementa una función que admita 2 arrays como argumento, y diga si el elemento del primero, se encuentra en el
// segundo.


// var array1 = ["x", "y", "z"];
// var array2 = ["x", "y", "o"];

// function ab(arr1, arr2) {
// var iguales = 0;
//     for(var i = 0; i < arr1.length; i++){
//         for( var a = 0; a < arr2.length; a++){
//             if(arr1[i] === arr2[a]) {
//                iguales = iguales + 1;
//                return true
//             }else {
//                 iguales = iguales + 0;
//                 return false
//             }
//         } 

//     }
   
// }


// console.log(ab(array1, array2));



//---------------------------------------------------------------------------------------------------



// Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero en el segundo
// y viceversa. Muestra los arrays transformados por consola.


// var array1 = ["x", "y", "z"];
// var array2 = ["a", "i", "o"];
// console.log(array1, array2);

// function intercambio(arr1, arr2) {
// var copia1 = arr1.slice();
// var copia2 = arr2.slice();
// arr1 = copia2;
// arr2 = copia1;
// console.log(arr1, arr2);
// }

// intercambio(array1, array2);

//---------------------------------------------------------------------------------------------------


// Implementa una función que admita un array como argumento, y construya un objeto en el que almacene cada uno de
// los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc.


// var objectArray = arr => {
//     var result= {};
//     for(var i = 0; i < arr.length; i++){
//         var PropName = "prop" + i;
//         result[PropName] = arr[i];
//     }
// return result;
// }

// console.log(objectArray(["hola", "adios"]));


//---------------------------------------------------------------------------------------------------
// Implementa una función que admita un array y un número, y empieza a recorrer dicho array por el número dado.
// Muestra por consola cada elemento por el que iteres.


// var array = [1, 2, 3, 7, 8 , 9];

// function recorrer(arr, number){

//     for(var i = number; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// recorrer(array, 2);


//---------------------------------------------------------------------------------------------------

// Implementa una función que dado un array de strings y otro parámetro como string diga si existe en el array.

// var array = ["enero", "febrero", "marzo"];

// function existeParametro(arr, string) {

//     for(var parametro of arr) {

// if(string === arr[parametro]) {
    
// return true;
// } else {

// return false;
// }
//     } 

//     }
// console.log(existeParametro(array, "abril"));


//---------------------------------------------------------------------------------------------------
// Implementa un array que contenga nombres de frutas en Español y otro array con las mismas frutas en el mismo orden
// pero en ingles. Implementa una función de traducción, que dada una fruta en español, diga la traducción en Inglés, y
// otra función equivalente que haga la traducción inversa.

// var frEs = ["manzana", "pera", "cereza"];
// var frEn = ["apple", "pear", "cherry"];


// var translateFruitsToEs = fruit => frEs[frEn.indexOf(fruit)];
//  console.log(translateFruitsToEs("apple"));
    
// var translateFruitsToEn = fruit => frEn[frEs.indexOf(fruit)];

// console.log(translateFruitsToEn("manzana"));


//---------------------------------------------------------------------------------------------------

// Implementa una función que admita un texto por parámetro y lo devuelva por consola al revés.


// function text(string) {
// var nuevoTexto = "";
//  for(var i = string.length - 1; i >= 0; i--){
//      nuevoTexto += string[i];
    
//  }  console.log(nuevoTexto);
// return nuevoTexto;

// }
// text("hola");

//---------------------------------------------------------------------------------------------------


// Implementa una función que admita un texto por parámetro y lo devuelva en formato ‘EsTe Es Mi TeXtO’.


// var textFormat = text => {
//     var result = ""; 
//     for(var i = 0; i < text.length; i++) {
//     result += i % 2 === 0? text[i].toUpperCase() : text[i];
// }

// return result;
// };

// console.log(textFormat("Buenos dias"));



//---------------------------------------------------------------------------------------------------
// Implementa una función que admita como parámetro un array de arrays. La función debe recorrer todos los elementos
// de cada subarray y mostrarlos por consola.


// var iterateSubItems = arr => {
//     for (var subArr of arr) {
//         for (var item of subArr) {
//             console.log(item);
//         }
//     }
// };
// var myArr = [[1, 2], ["inicio", "fin"], "hola"];
// iterateSubItems(myArr);