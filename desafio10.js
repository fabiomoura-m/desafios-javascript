/*
Escreva uma função que recebe um array a e uma flag order com o valor padrão 'asc. Caso o valor de order seja 'asc' retornar o array ordenado em ordem ascendente e caso seja 'desc' retornar em ordem descendente.
*/

function myFuntion(a, order = 'asc') {
  // if (order === 'asc') {
  //   return a.sort();
  // } else return a.sort().reverse();

  return order === 'asc' ? a.sort() : a.sort().reverse();

  // Fazendo utilizando for

  // for (let i = 1; i < a.length; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (a[j] > a[i]) {
  //       const temporario = a[i];
  //       a[i] = a[j];
  //       a[j] = temporario;
  //     }
  //   }
  // }
  // if (order === 'desc') {
  //   const inverted = [];
  //   for (let i = a.length - 1; i >= 0; i--) {
  //     inverted.push(a[i]);
  //   }
  //   return inverted;
  // }
  // return a;
}

console.log(myFuntion([2, 3, 1], 'asc'));
console.log(myFuntion([6, 2, 8, 1, 5], 'desc'));
console.log(myFuntion(['uva', 'maçã', 'laranja'], 'asc'));
console.log(myFuntion(['t', 'a', 's', 'z', 'm']));

// Colocar um array de objetos em ordem

const product1 = {
  name: 'Uva',
  price: 1.5
};
const product2 = {
  name: 'Laranja',
  price: 4.5
};
const product3 = {
  name: 'Maçã',
  price: 3.5
};
function myFuntion2(a, order = 'asc') {
  // ordenando pelo name
  a.sort((ia, ib) => {
    return ia.name.localeCompare(ib.name);
  });
  return order === 'asc' ? a : a.reverse();

  //ordenando pelo valor

  // a.sort((ia, ib) => {
  //   if (ia.price < ib.price) return -1;
  //   if (ia.price > ib.price) return 1;
  //   return 0;
  // });
  // return order === 'asc' ? a : a.reverse();
}
console.log(myFuntion2([product1, product2, product3], 'asc'));
console.log(myFuntion2([product1, product2, product3], 'desc'));
