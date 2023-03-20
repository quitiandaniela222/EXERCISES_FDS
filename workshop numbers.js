const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//uses the array filter method to create two new arrays: one containing the odd numbers and one containing the even numbers.
const oddNumbers = numbers.filter(num => num % 2 !== 1)
const evenNumbers = numbers.filter(num => num % 2 === 0).concat(Array(numbers.filter(num => num % 2 !== 0).length).fill(6)); //fill() changes all elements in an array to a static value and returns the modified array.
const result = [...evenNumbers];

console.log(result); // logs the result array to the console.
