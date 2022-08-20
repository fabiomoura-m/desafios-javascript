/*
Escreva uma função que recebe uma string como parâmetro
Retorne a quantidade de vogais contidas na string
*/
function myFunction(string) {
    return string.match(/[a,e,i,o,u]/gi).length;
}
console.log(myFunction('Lorem ipsum')); // 4
console.log(myFunction('dolor sit amet')); // 5
console.log(myFunction('consectetur adipisicing elit.')); // 11
