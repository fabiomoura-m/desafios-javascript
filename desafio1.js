/*
Escreva uma função que recebe dois valores, a e b, como parâmetros.
Essa função deve retornar true se os dois valores forem iguais e do mesmo tipo. Caso contrário, false.
*/

function myFunction(a, b) {
  return a === b;
}

console.log(myFunction(2, 3)); //false
console.log(myFunction(3, 3)); //true
console.log(myFunction(1, '1')); // false
console.log(myFunction('10', '10')); //true
