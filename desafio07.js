/*
Escreva uma função que recebe duas strings (a,b) como parâmetro e retorna o número de vezes que a string a é utilizada dentro de b.
*/

function myFunction(a, b) {
  // Utilizando Regex
  // return b.match(new RegExp(a, 'gi')).length;

  // Utilizando split
  return b.toLowerCase().split(a.toLowerCase()).length - 1;
}

console.log(myFunction('a', "Quantas vezes o valor de 'a' ocorre aqui?")); // 5
console.log(myFunction('as', "Quantas vezes o valor de 'a' ocorre aqui?")); // 1
console.log(myFunction('q', "Quantas vezes o valor de 'a' ocorre aqui?")); // 2
