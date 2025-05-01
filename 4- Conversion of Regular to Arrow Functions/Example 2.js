// Returning Object Literals


// Code
const getUser = () => ({ name: "Bob", age: 30 });
console.log(getUser());


// Use Case
    // Arrow functions need parentheses to return object literals directly.
    // This is useful in map, filter, reduce where you're returning objects quickly.


// Problem
    // undefined — treated as function body
    const getUser2 = () => { name: "Bob" };

