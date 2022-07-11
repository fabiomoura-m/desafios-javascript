/*
Escreva uma função que recebe dois arrays(a,b) como parâmetros e crie um objeto onde as propriedades/chave sejam os itens do array a e os valores sejam os itens do array b.
Retorne o objeto.
*/
function myFunction(a, b) {
  // const obj = {};
  // for (let i = 0; i < a.length; i++) {
  //   obj[a[i]] = b[i];
  // }
  // return obj;

  return Object.fromEntries(a.map((item, index) => [item, b[index]]));
}

console.log(myFunction(['a', 'b', 'c'], [1, 2, 3])); //{a:1, b:2, c:3}
console.log(myFunction(['w', 'x', 'y', 'z'], [10, 11, 12, 13])); //{w:10, x:11, y:12,z:13}
console.log(myFunction([1, 'b'], ['a', 2])); // {1:'a', b:2}
