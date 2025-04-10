//type
type order ={
    productId: string 
    price:number
}
type User ={
    firstname: string;
    age: number;
    email:string;
    password?: string;
    order: order[];
    register(): string;
};


const user: User = {
firstname: 'jane',
age: 20,
email: 'jane@doe.com',
password: '12345',
order: [{productId: '1', price: 200}],
register(){
    return "2";
},
} 

const printLog = ((mensagem:string ) =>{})


printLog(user.password!)


type Author = {
    books:string []
}


const author: Author & User = {
 age: 2,
 books: ['1'],
 email:'julia@gmail.com',
 firstname:'felipe',
order:[],
register() {
    return "a"
},
}

//interfaces

interface UserInterface{
readonly FirstName: string;
email:string
login():string 
}

const  emailUser: UserInterface ={
    email:"felipe@gmail.com",
    FirstName: "felipe",
    login(){
        return "b"
    }
}

interface AuthorInterface{
    books:string[]
}


const newAuthor: UserInterface & AuthorInterface ={
    email: "author@gmail.com",
    FirstName:'Felipe',
    books: [],
    login(){
        return "a"
    }
};



type Grade = number | string;
const grade: Grade = 1;