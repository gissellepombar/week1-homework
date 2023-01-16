/* 
1.Create a function which returns the number of true values there are in an array.
const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]
2. Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both.
3. You are given 2 arrays, one called shoppingList and one called cart.
Example:
Let shoppingList = [‘beer’, ‘milk’, ‘wine’, ‘bananas’, ‘sugar’]
Let cart = [‘milk’, ‘beer’]
Create a new version of shoppingList where the items in the cart have been removed.
*/

//1
const testArray = [true, false, false, true, false, false, false, true, true, true, false ]

function trueCheck (arr) {
    counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            counter++
        }
    }
    return counter;
}

const output = trueCheck(testArray);
console.log(output);

//1 redo with arrow functions

const truChecker = (arr2) => {
    counter2 = 0;
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === true) {
            counter2++
        }
    }
    return counter2;
}
console.log(truChecker(testArray));

//2 Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both.

const odd = [1, 3, 5, 7, 9];
const even = [2, 4, 6, 8,];

function combineTwoArrays (arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(combineTwoArrays(odd, even));

//3 You are given 2 arrays, one called shoppingList and one called cart.
/*Example:
Let shoppingList = [‘beer’, ‘milk’, ‘wine’, ‘bananas’, ‘sugar’]
Let cart = [‘milk’, ‘beer’]
Create a new version of shoppingList where the items in the cart have been removed.
*/
const shoppingList = ['beer', 'milk', 'wine', 'bananas', 'sugar']
const cart =['milk', 'beer']


function updateShoppingList(arrSL, arrC) {
    let newList = [];
    let item = 0;
    for (let i = 0; i < arrSL.length; i++) {
            if (!arrC.includes(arrSL[i])) {
                newList[item] = arrSL[i]
                item++
            }
    }
    return newList;
}

console.log(updateShoppingList(shoppingList, cart))

// Using filter method  
const ShoppingCart = shoppingList.filter((index) => {
    return !cart.includes(index);
})

console.log(ShoppingCart)
