/*
Write a function that adds two numbers together 

Write a function that returns the square of a number

Create an object called student and add 3 properties with their values. 
*/

//1 Function that adds two numbers together
function sum(x, y) {
    const result = x + y;
    return result;
};

//1 Invoking sum function
console.log(sum(15.3, 7));

//2 Function that returns the sqaure of a number
function sqr(x) {
    const output = x * x;
    return output;
};

console.log(sqr(5));

//3 Object called student with 3 properties + their values
const student = {
    fullName: 'Jane Doe',
    field: 'Software Engineer',
    age: 26
};

console.log(student);
