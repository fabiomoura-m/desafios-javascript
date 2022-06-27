/*
Escreva uma função que recebe um array e um valor b como parâmetros. A função deve remover todas as ocorrências de b e retornar o array filtrado.
*/

function myFuntion(a, b) {
  return a.filter(item => item !== b);

  // const filtered = []
  // for(const item of a){
  //   if(item !== b){
  //     filtered.push(item)
  //   }
  // }
  // return filtered
}

console.log(myFuntion([1, 2, 3], 2));
console.log(myFuntion([1, 2, '3'], '3'));
console.log(myFuntion(['1', false, 2, '3'], false));
console.log(myFuntion([5, 1, 2, 5, 3, 5], 5));
