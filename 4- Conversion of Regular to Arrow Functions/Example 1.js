// Lexical 'this' in Arrow Functions


// Code
const user = {
    name: "Alice",
    sayLater() {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`); // Arrow keeps `this` as `user`
        }, 1000);
    }
};
user.sayLater();


// Use Case
    // In arrow functions, this is lexically bound, meaning it uses this from the outer context.
    // Perfect for things like setTimeout inside objects.


// Problem
    // If we used a regular function inside setTimeout, 'this' would be undefined.
