/*
Escreva uma função que recebe um objeto como parâmetro.
Faça a inversão das chaves e valores. Ou seja, os valores devem se tornar as chaves e as chaves devem se tornar os valores.
Retorne o objeto modificado
*/

function myFunction(objeto) {
    let objetoInvertido = {};
    Object.keys(objeto).forEach(item => (objetoInvertido[objeto[item]] = item));
    return objetoInvertido;
}

console.log(myFunction({ w: 'a', y: 'b', x: 'c' }));
console.log(myFunction({ 1: 'a', 2: 'b', 3: 'c' }));
console.log(myFunction({ a: 10, b: 20 }));
