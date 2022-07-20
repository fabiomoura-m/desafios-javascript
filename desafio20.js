/*
Escreva uma função que recebe dois arrays (a,b) como parâmetros.
Crie um objeto onde as chaves serão os elementos de a e os valores os elementos de b.
Caso a tenha menos elementos, considere apenas os elementos a e b correspondentes.
Caso b tenha menos elementos, coloque null como valor correspondente em a.
Retorne o objeto.
*/

function myFunction(a, b) {
    return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] || null }), {});
}

console.log(myFunction(['a', 'b', 'c'], [1, 2, 3])); // {a: 1, b:2, c:3}
console.log(myFunction(['w', 'x', 'y', 'z'], [32, 11, 6, 2])); // {w: 32, x:11, y:6, z:2}
console.log(myFunction(['a', 'b'], [1, 2, 3])); // {a: 1, b:2}
console.log(myFunction(['w', 'x', 'y', 'z'], [32, 11])); // {w: 32, x:11, y:null, z: null}
