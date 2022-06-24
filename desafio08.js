/*
Escreva uma função que recebe um array por parâmetro e remove os 3 primeiros elementos do array.
Caso o array tenha menos de 3 elementos, retornar um array vazio.
*/

function myFunction(array) {
  // if (array.length <= 3) {
  //   return [];
  // }
  // return array.slice(3);

  return array.length > 3 ? array.slice(3) : [];
}

console.log(myFunction([1, 2, 3, 4, 5]));
console.log(myFunction([5, 4, 3, 2, 1, 0]));
console.log(myFunction([10, 20, 30]));
console.log(myFunction([99, 100]));
