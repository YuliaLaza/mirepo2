//Caso 1 
//Dado este IBAN:
// ES6600190020961234567890
// Validar que se informa con dos letras, y los números correspondientes

// /^[A-Z]{2}\d{22}$/

// Caso 2

// Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:
// ES6600190020961234567890
// ES66 0019 0020 9612 3456 7890

//   /^([A-Z]{2}\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4})$/

// Caso 3 
//Vamos a extraer el código de páis y el dígito de control.


// const myValueOk = "ES6600190020961234567890";

// const pattern = /^([A-Z]{2})(\d{2})\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
// const resultOk = pattern.exec(myValueOk);
// console.log(resultOk);




// Validar matrícula coche


// Caso 1

// Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a
// validar:

// 2021 GMD
// 2345-GMD
// 4532BDB
// 0320-AAA

  //  /^\d{4}(\s|-)?[A-Z]{3}$/

  //Caso 2
 // Vamos a extraer por un lado la parte numérica y por otro las letras.

//  const myValueOk = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

// const pattern = /^(\d{4})\s?-?([A-Z]{3})$/;

// myValueOk.forEach(element => console.log(pattern.exec(element)));



// Validar sintaxis tarjeta de crédito

// En nuestra aplicación tenemos un apartado para que el usuario pueda introducir los datos de su tarjeta de
// crédito máster card, para ello vamos a tener en cuenta:
// Que una máster card tiene una longitud de 16 caracteres (numeros).
// Que tiene que empezar con 50,51,52,53,54,55.
// Qué lo normal es que se agrupen en conjuntos de 4 digitos.
// Ejemplo:
// 5299 6400 0000 0000

// Caso 1

// Vamos a validar los siguiente formatos

// 5299 6400 0000 0000
// 5299-6400-0000-0000
// 529964000000000

//   /^[5]{1}[0-5]{1}[0-9]{2}(\s|-)?[0-9]{4}(\s|-)?[0-9]{4}(\s|-)?[0-9]{4}$/


// Caso 2
// Vamos a extraer cada grupo de cuatro digitos.


// const pattern = /^([5]{1}[0-5]{1}[0-9]{2})(\s|-)?([0-9]{4})(\s|-)?([0-9]{4})(\s|-)?([0-9]{4})$/;
// const result = pattern.exec("5299 6400 0000 0000");


// console.log(result);