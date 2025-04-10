//tipos basicos
let age: number =5;
 
const FirstName:string = 'filipe';
const isValid: boolean = true ;



let idk: any = 5;


const ids: number[] = [1, 2 , 3 , 4, 5];
const booleans: boolean[] = [true, false, true, false];
const names: string[] = ['julia','ana','carlos', 'miguel'];


//tupla

const person: [number, string] = [1, 'janne']

//Lista de tuplas 


const people: [number, string][] = [
    [1, 'carlos'],
    [2, 'janne'],
];


//intersection

const productId: string | number | boolean = false


// Enum
enum Direction{

    Up= 1,
    Down= 2,
    Left = 'Esquerda',
}

const direction = Direction.Up;

//Type assertions


const productName: any = 'Bone';



// let itemId = productName as string ;
let itemId = <string>productName;
console.log(direction)


