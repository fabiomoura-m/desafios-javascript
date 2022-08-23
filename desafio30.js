/*
Escreva uma função que recebe dois parâmetros(a,b), sendo caracteres.
Retorne true se os dois caracteres tiverem o mesmo case(ambos maiúsculos ou ambos minúsculos) e false caso contrário.
*/

function myFunction(a, b) {
    const regUp = new RegExp('[^a-z]+');

    return regUp.test(a) === regUp.test(b);
}

console.log(myFunction('a', 'b')); //true
console.log(myFunction('D', 'd')); //false
console.log(myFunction('Y', 'X')); //true
