/**
 * 1. Write a loop that outputs
10
9
8
7
6
5
4
3
2
1.
BLAST OFF!
(console.log your results)
2. Create a function that takes in a number of two-pointers and three-pointers made and returns a basketball team’s total score. Console.log the results.
3. Create a function that converts a string to uppercase letters. Console.log the results.
 */

//1 

function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(n);
        n--;
    }
    console.log('BLAST OFF!');
}
countDown(10);

//2 function
function keepScore (twoPointers, threePointers) {
    const two = twoPointers * 2;
    const three = threePointers * 3;
    const score = two + three;
    console.log(score);
};

keepScore(1, 1);

//3
function upper(s1) {
    console.log(s1.toUpperCase());
}

upper('hello');