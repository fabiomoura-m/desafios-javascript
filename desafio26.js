/*
Escreva uma função que recebe um number (a) como parâmetro
Arredonde o número para 2 casas decimais após a vírgula.
Retorne o número arredondado
*/
function myFunction(number) {
    return number.toFixed(2);
}

console.log(myFunction(2.12345)); //2.12
console.log(myFunction(3.543)); //3.54
console.log(myFunction(1.4567)); //1.45
console.log(myFunction(18.98765)); // 18.98
