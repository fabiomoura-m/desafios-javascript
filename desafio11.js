/*
Escreva uma função que recebe dois arrays como parâmetros.
Retorne um único array contendo os valores dos dois arrays concatenados, removendo valores duplicados, caso existam.
*/
function myFunction(a, b) {
  return [...new Set([...a, ...b])];

  //Outra Maneira Utilizando .Filter()
  // let arrayJuntos = [...a, ...b];

  // let result = arrayJuntos.filter((item, index) => {
  //   return arrayJuntos.indexOf(item) === index;
  // });

  // return result;
}

console.log(myFunction([1, 2, 3], [3, 4, 5]));
console.log(myFunction([6, 7], [8, 9]));
console.log(myFunction([-2, -1, 0, 1, 2], [-1, 1, 2, 3]));
