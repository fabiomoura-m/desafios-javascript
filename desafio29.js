/*
Escreva uma função que recebe um Date a e uma string b como parâmetros.
Retorne a data formatada de acordo com a string b.
Sendo:
dd- dia com 2 dígitos
mm-mês com 2 dígitos
mmm- mês com 3 letras
yyyy- ano com 4 dígitos
hh - hora com 2 dígitos
mm- minutos com 2 dígitos
ss - segundos com 2 dígitos
*/

function myFunction(a) {
    return a.toLocaleString('pt-BR');
}

console.log(myFunction(new Date(2022, 5, 25, 10, 0, 0), 'dd/MM/yyy HH:mm:ss'));
