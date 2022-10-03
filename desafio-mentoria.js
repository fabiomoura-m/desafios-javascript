const user1 = {
    books: ['livro1', 'livro2', 'livro3', 'livro4']
};

const user2 = {
    books: ['livro5', 'livro1', 'livro6', 'livro7', 'livro3']
};

const user3 = {
    books: ['livro1', 'livro5', 'livro3', 'livro6']
};

let users = [user1, user2, user3];

let dict = {};
for (let user of users) {
    for (let book of user.books) {
        if (dict[book] === undefined) {
            dict[book] = 1;
        } else {
            ++dict[book];
        }
    }
}
let result = [];
for ([book, count] of Object.entries(dict)) {
    if (count === users.length) {
        result.push(book);
    }
}
console.log(result);
// let result = [];
// for (let books1 of users[0].books) {
//     for (let books2 of users[1].books) {
//         if (books1 === books2) {
//             if (users[2].books.includes(books1)) {
//                 result.push(books1);
//             }
//         }
//     }
// }
// console.log(result);
