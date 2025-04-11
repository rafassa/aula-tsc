"use strict";
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    SayMyName() {
        return this.name;
    }
}
class Employee extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
}
const person = new Person(1, 'felipe', 21);
