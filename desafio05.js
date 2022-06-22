/*
Escreva uma função que recebe dois parâmetros(fullname, flag).
Se a flag for igual a "firstname", deve retornar apenas a primeira palavra do parâmetro fullname.
Se a flag for igual a "lastname", deve retornar todo o texto, exceto a primeira palavra do parâmetro fullname.
Se o parâmetro flag for vazio ou fullname conter apenas uma palavra, apenas retornar o conteúdo de fullname.

*/
// ----------------- Minha resolução
function myFunction(fullname, flag = '') {
  if (flag === '' || fullname.indexOf(' ') === -1) {
    return fullname;
  }
  if (flag === 'firstname') {
    return fullname.split(' ')[0];
  }
  if (flag === 'lastname') {
    return fullname.split(' ').slice(1).join(' ');
  }
}

// ----------------- Resolução do Professor
function myFunction(fullname, flag = '') {
  const parts = fullname.split(' ');
  if (flag.length === 0 || parts.length <= 1) {
    return fullname;
  }
  if (flag === 'firstname') {
    return parts[0];
  }
  return parts.slice(1).join(' ');

  // Podendo ser resumido em:
  return flag.length === 0 || parts.length <= 1
    ? fullname
    : flag === 'firstname'
    ? parts[0]
    : parts.slice(1).join(' ');
}

console.log(myFunction('John Williams Smith', 'firstname')); // John
console.log(myFunction('John Williams Smith', 'lastname')); // Williams Smith
console.log(myFunction('John Williams Smith')); // John Williams Smith
console.log(myFunction('John', 'lastname')); // John
