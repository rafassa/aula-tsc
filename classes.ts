
interface IPerson{
    id:number;
    age:number;
    SayMyName(): string;
}

class Person implements IPerson{
    readonly id: number;
    protected name:string;
    private age: number;

        constructor(id: number, name:string, age:number){
            this.id = id;
            this.name = name;
            this.age = age ;
        }

    SayMyName():string {
return this.name
    }
}

class Employee extends Person{
    constructor(id: number, name:string, age:number){
        super(id, name, age)
    }
}
const person  = new Person (1, 'felipe', 21);