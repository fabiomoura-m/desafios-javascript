/*
Escreva uma função que recebe dois parâmetros, min e max(mínimo e máximo), e retorna um array de números de acordo com o intervalo.
*/
function myFunction(a, b) {
  let array = [];
  for (let i = a; i <= b; i++) {
    array.push(i);
  }
  return array;

  // Outras resoluções
  // return a === b ? [a] : [a].concat(myFunction(a + 1, b))
  // return Array(b - a + 1).fill(a).map((prev, next) => prev + next)
  // return Array.from({length: b - a + 1}, (_,key) => key + a)
}
console.log(myFunction(1, 5));
console.log(myFunction(11, 18));
console.log(myFunction(-5, 5));
