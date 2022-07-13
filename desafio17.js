/*
Escreva uma função que recebe dois parâmetros(a,b), sendo ambos do tipo Date.
Retorne true se as datas forem iguais. Caso contrário, false.
*/
function myFunction(a, b) {
    return a.getTime() === b.getTime();
}

console.log(
    myFunction(new Date('2022/04/06 06:30:00'), new Date('2022/04/06 06:31:00'))
);
console.log(
    myFunction(new Date('2022/04/06 06:30:00'), new Date('2022/04/06 06:30:00'))
);
console.log(
    myFunction(new Date('2021/04/06 06:30:00'), new Date('2022/04/06 06:30:00'))
);
