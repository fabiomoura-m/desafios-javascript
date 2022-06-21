/*
Escreva uma função que recebe dois parâmetros(text, flag).
Se a flag for igual a 'start', deve retorar os 3 primeiro caracteres do parâmetro text.
se a flag for igual a 'end, deve retornar os 3 últimos caracteres do parâmetro text.
Se o parâmetro text tiver menos de 3 caracteres, apenas retornar o text.
*/
function myFunction(text, flag = 'start') {
  if (text.length < 3) {
    return text;
  }
  if (flag === 'start') {
    return text.slice(0, 3);
  }
  return text.slice(-3);

  // Resumindo em 1 linha com operador ternário

  // return text.length < 3 ? text : flag === 'start' ? text.slice(0,3) : text.slice(-3)
}

console.log(myFunction('abcdefg', 'start')); //abc
console.log(myFunction('abcdefg', 'end')); // efg
console.log(myFunction('ab', 'end')); //ab
console.log(myFunction('abcdefg')); // abc
