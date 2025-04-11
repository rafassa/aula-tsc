"use strict";
const user = {
    firstname: 'jane',
    age: 20,
    email: 'jane@doe.com',
    password: '12345',
    order: [{ productId: '1', price: 200 }],
    register() {
        return "2";
    },
};
const printLog = ((mensagem) => { });
printLog(user.password);
const author = {
    age: 2,
    books: ['1'],
    email: 'julia@gmail.com',
    firstname: 'felipe',
    order: [],
    register() {
        return "a";
    },
};
const emailUser = {
    email: "felipe@gmail.com",
    FirstName: "felipe",
    login() {
        return "b";
    }
};
const newAuthor = {
    email: "author@gmail.com",
    FirstName: 'Felipe',
    books: [],
    login() {
        return "a";
    }
};
const grade = 1;
