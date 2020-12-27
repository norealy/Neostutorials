function Person(first, last, age) {
  this.firstName = first;
  this.last = last;
  this.age = age;
}
class Person2 {
    constructor(first, last, age){
        this.firstName = first;
        this.last = last;
        this.age = age;
    }
  }
  
let person = new Person("Nguyenn","Datt",222) 
// console.log(person)

// let person2 = new Person("Nguyenn","Datt",222)
// Object.defineProperty(person, "language", {value : "NO",enumerable:true});


// person.language = 'Vi';
let person3 = new Person("Ng","Datt",333);
// person3.language = 'Vi';

console.log(person)
console.log(Object.keys(person))
console.log(Object.getOwnPropertyNames(person))

let arrkeys = []
for (const key in person) {
  arrkeys.push(key)
}
console.log("array properties for in ... ",arrkeys)
// console.log(person3.language)


// Adding or changing an object property
// Object.defineProperty(person2, "language", {value : "NO",enumerable:true});

// Adding or changing many object properties
// Object.defineProperties(person2, {"Language":{value:"EN"},"Subject":{value:"English"}})

// Accessing Properties(Truy cap doi tuong)
// Object.getOwnPropertyDescriptor(person2,'age') //{ value: 222, writable: true, enumerable: true, configurable: true }

// let arrayKeys = Object.keys(person2)

// Prevents(ngan can) adding properties to an object
// Object.preventExtensions(person2)
// console.log(Object.isExtensible(person2)) 

// Prevents(ngan can) changes properties (not values)
// Object.seal(person2)
// console.log(Object.isSealed(person2)) // check

// Prevents(ngan can) any changes to an object
// Object.freeze(person2) //(Dong bang doi tuong)
// console.log(Object.isFrozen(person2))  //check freeze





