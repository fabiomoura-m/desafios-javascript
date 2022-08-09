/*
Escreva uma função que receba uma data e retorne a data formatada
*/

function myFunction(data) {
    let dataAtual = new Date().getTime();
    let dataParametro = data.getTime();

    let idadeFinal = (dataAtual - dataParametro) / (1000 * 3600 * 24 * 365);

    return Math.floor(idadeFinal) + ' anos';
}

console.log(myFunction(new Date('1980-05-01'))); // 42 anos
console.log(myFunction(new Date('2000-09-21'))); //21 anos
console.log(myFunction(new Date('2003-02-09'))); // 19 anos
