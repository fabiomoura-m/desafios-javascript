/*
Escreva uma função que recebe um array a e um número b como parâmetros.
Faça a soma de todos os elementos do array com valor maior do que b.
Retorne a soma
*/
function myFunction(a, b) {
  // Minha resolução
  let soma = 0;
  a.forEach(item => {
    if (item > b) {
      soma += item;
    }
  });
  return soma;

  // Resolução do professor

  // return a.reduce(function (prev, current) {
  //   return current > b ? prev + current : prev;
  // }, 0);
}
console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)); //30
console.log(myFunction([-14, -12, -5, 4, -4], -5)); //0
console.log(myFunction([33, 45, 88, 105, 111], 99)); //216
