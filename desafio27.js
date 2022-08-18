/*
Escreva uma função que recebe uma data com parâmetro
A função deve retornar o próximo quarto de hora mais próximo em minutos
Por exempo, se uma data tem a hora 12:01, a função deve retornar 15
*/

function myFunction(date) {
    let minutes = date.getMinutes();
    if (minutes < 15) {
        return 15;
    }
    if (minutes >= 15 && minutes < 30) {
        return 30;
    }
    if (minutes >= 30 && minutes < 45) {
        return 45;
    }
    return 60;
}
console.log(myFunction(new Date(2022, 4, 21, 6, 14, 00))); // 15
console.log(myFunction(new Date(2022, 4, 21, 6, 31, 00))); //45
console.log(myFunction(new Date(2022, 4, 21, 6, 22, 00))); //30
