/*
Escreva uma função que recebe dois parâmetros(a,b), sendo a um objeto e b uma string.
Retorne true se o objeto a conter a propriedade/chave com o nome passado em b.
Caso contratio, retorne false
*/
function myFunction(a, b) {
  // return Object.keys(a).some(item => item === b);
  return Object.keys(a).includes(b);
}
console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b')); // true
console.log(myFunction({ x: 'a', y: 'b', z: 'c' }, 'a')); // false
console.log(myFunction({ x: 'a', y: 'b', z: 'c' }, 'z')); // true
