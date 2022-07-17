/*
Escreva uma função que recebe dois parâmetros(a,b) onde a é um Date e b é um number
Adicione dias na data a, de acordo com o número passado em b.
Retorne a nova data
*/
function myFunction(a, b) {
    return new Date(a.setDate(a.getDate() + b));
}
console.log(myFunction(new Date('2022-04-05'), 6)); // 2022-04-11
console.log(myFunction(new Date('2021-12-24'), 109)); // 2022-04-12
console.log(myFunction(new Date('2022-04-11'), -10)); // 2022-04-01
