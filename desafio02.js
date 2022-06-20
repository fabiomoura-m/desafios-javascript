/*
Escreva uma função que recebe um parâmetro e retorna o tipo do valor recebido nesse parâmetro
*/

function myFunction(a) {
  return typeof a;
}

console.log(myFunction(1)); // number
console.log(myFunction(false)); // boolean
console.log(myFunction({})); // object
console.log(myFunction('Hello World')); // string
console.log(myFunction(['Hello Word'])); // object
