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
