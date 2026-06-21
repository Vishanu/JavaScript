// Primitive (call by value)
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// console.log(outsideTemp);
// let userEmail;
// console.log(userEmail);

const id=Symbol('123')
// const anotherId = Symbol('123')

// console.log(id == anotherId);

// const bigNumber = 987654323456787687656787654n
// console.log(bigNumber);



// Reference type (Non primitive)
//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
console.table(heros);

let myObj = {
    name:"Vishnu",
    age:24
}

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof id);
/**
 * Undefined = "undefined",
 * Null = "object",
 * Boolean = "boolean",
 * Number = "number",
 * String = "string",
 * Object(native and does not implement[[call]]) = "object",
 * Object(native or host and does not implement[[call]]) = "function"
 * Object(host and does not implement[[call]]) = Implementation-defined except may not be"undefined", "boolean", "number", or "string".
 */