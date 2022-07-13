/*
Escreva uma função que recebe duas datas como parâmetro e retorne o número de dias entre as datas.
*/

function myFunction(a, b) {
    const diferencaDatas = b.getTime() - a.getTime();
    return diferencaDatas / (1000 * 3600 * 24);
    //pega a diferença da data final pela data inicial, que vai te retornar milísegundos e depois só dividir o resultado por (1000 (pq é milísegundos) * 3600 (pq uma hora tem 3600 segundos) * 24 (um dia tem 24 horas))
}
console.log(myFunction(new Date('2022-04-01'), new Date('2022-04-07'))); //6
console.log(myFunction(new Date('2021-12-24'), new Date('2022-04-06'))); //103
