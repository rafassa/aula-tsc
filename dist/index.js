"use strict";
//tipos basicos
let age = 5;
const FirstName = 'filipe';
const isValid = true;
let idk = 5;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ['julia', 'ana', 'carlos', 'miguel'];
//tupla
const persons = [1, 'janne'];
//Lista de tuplas 
const people = [
    [1, 'carlos'],
    [2, 'janne'],
];
//intersection
const productId = false;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Up;
//Type assertions
const productName = 'Bone';
// let itemId = productName as string ;
let itemId = productName;
console.log(direction);
