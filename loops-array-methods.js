//Make a square
function square (x) {

    for (let i = 0; i < x; i++) {
        let n = '';

        for (let j = 0; j < x; j++) {
            n = n + '';
        }

        console.log(n)
    }
}
square(2);

//1 Create a function that makes a pyramid using a loop
function pyramid (x) {

    for (let i = 0; i < x; i++) {
        let n = '';

        for (let j = 0; j < x - i - 1; j++) {
            n = n + '';
        }

        for (let j = 0; j<= i; j++) {
            n = n + '#'
        }

        console.log(n)
    }
}
pyramid(2);

//2 Create a function that removes the first element of the array below and adds “kiwi” to the end of the array

let favoriteFruits = [
    'mango',
    'lychee', 
    'rambutan',
    'papaya'
];
console.log('original array:', favoriteFruits);

function fruitList(arr) {
    arr.shift('mango');
    arr.push('kiwi');
    console.log('modified array:', arr);
}

fruitList(favoriteFruits);

/* Bonus: Write a function named assignGrade, that takes one argument, a number score.
Return a grade for the score, either “A,” “B,” “C,” “D,” or “F.” Invoke that function for a few different scores and log the result to make sure it works. */

function assignGrade(number) {
    let score = number;

    if (score >= 90) {
        console.log('A');
    }
    if (score >= 80 && score < 90) {
        console.log('B');
    }
    if (score >= 70 && score < 80) {
        console.log('C');
    }
    if (score >= 60 && score < 70) {
        console.log('D');
    }
    if (score < 60) {
        console.log('F');
}
    return score;
} 
assignGrade(88);
