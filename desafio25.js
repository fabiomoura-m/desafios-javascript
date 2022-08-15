/*
Escreva uma função que recebe dois parâmetros(a,b), sendo a um array de strings e b uma string.
Crie um novo array com os itens que contém a string b.
Retorne o array filtrado
*/
function myFunction(array, b) {
    return array.filter(item =>
        item
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .includes(b)
    );
}
const array = ['Abacaxi', 'Abacate', 'Limão', 'Mamão', 'Pera', 'Pêssego'];

console.log(myFunction(array, 'aba'));
console.log(myFunction(array, 'ao'));
console.log(myFunction(array, 'pe'));
