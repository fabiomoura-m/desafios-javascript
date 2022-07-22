/*
Escreva uma função que recebe dois Set()(a,b) como parâmetros, unir os dois em um novo Set() e retornar o item criado
*/

function myFunction(a, b) {
    let uniao = new Set(a);
    for (let elem of b) {
        uniao.add(elem);
    }
    return uniao;
}

console.log(myFunction(new Set('123'), new Set('234'))); // Set(4) {"1", "2", "3","4"}
console.log(myFunction(new Set([1, 2, 3]), new Set([3, 4, 5]))); // Set(5) {1, 2, 3, 4, 5}
console.log(
    myFunction(new Set([false, false, NaN]), new Set([true, true, NaN]))
); // Set(3) {false, Nan, true}
