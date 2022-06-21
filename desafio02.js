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

// obs: typeof tipo number e object temos de comparar se também não é um NaN e para object se não é null.
//ex:

let numero = Number('teste');
console.log(numero); // NaN
console.log(typeof numero); // number
console.log(typeof numero === 'number' && !isNaN(numero)); // false

let user = null;
console.log(user); // null
console.log(typeof user); // object
console.log(typeof user === 'object' && user !== null); //false
