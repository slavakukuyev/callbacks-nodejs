/**
In this example, we have several functions related to Node.js, such as checking for prime numbers, finding factorial, 
manipulating strings, handling asynchronous operations using Promises, and more. The interview questions test the candidates' 
understanding of the code logic and their knowledge of handling asynchronous operations in Node.js.
 
for run exec in terminal:
node interview_questions.js
*/


// Function to check if a given number is a prime number
/**
 * The function `isPrimeNumber` is designed to determine whether a given number `num` is a prime number or not. A prime number is a positive integer greater than 1 that has no positive divisors other than 1 and itself.

The function takes a single argument `num`, which is the number to be checked for primality. It follows the following logic to determine if the number is prime:

1. If the number `num` is less than or equal to 1, it immediately returns `false`. This is because 1 and any number less than 1 are not considered prime numbers.

2. The function then uses a `for` loop to iterate over the possible divisors of `num`. The loop starts from `i = 2`, as 1 is already excluded in the previous step, and it continues until `i` reaches the square root of `num`. Using the square root is an optimization to reduce the number of iterations since factors always appear in pairs, and one of the factors must be less than or equal to the square root of `num`.

3. For each value of `i` in the loop, the function checks if `num` is divisible by `i` (i.e., `num % i === 0`). If the condition is true, it means `num` is divisible by `i` and, therefore, is not a prime number. In this case, the function returns `false`.

4. If the loop completes without finding any factors of `num`, it means `num` is only divisible by 1 and itself, satisfying the definition of a prime number. In this case, the function returns `true`.

The function efficiently determines whether a given number is prime or not by checking divisors up to the square root of the number, making it a common and useful utility function for primality tests in many applications.
 * @param {*} num 
 * @returns 
 */
function isPrimeNumber(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to find the factorial of a given number using recursion
/**
 * example:
 * factorial(5) = 5 * factorial(4)
             = 5 * (4 * factorial(3))
             = 5 * (4 * (3 * factorial(2)))
             = 5 * (4 * (3 * (2 * factorial(1))))
             = 5 * (4 * (3 * (2 * 1)))
             = 5 * (4 * (3 * 2))
             = 5 * (4 * 6)
             = 5 * 24
             = 120
 * @param {*} num 
 * @returns 
 */
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

// Function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
    return str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const reversedStr = reverseString(str);
    return str === reversedStr;
}

// Function to find the sum of all multiples of 3 and 5 below a given number
function sumMultiplesOfThreeAndFive(limit) {
    let sum = 0;
    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}


// Interview questions:
// 1. What is the output of isPrimeNumber(17)?
// 2. Calculate the factorial of 5 using the factorial() function.
// 3. Given the string "hello world," what is the output of capitalizeWords() function?
// 4. Reverse the string "Node.js" using the reverseString() function.
// 5. Check if the string "racecar" is a palindrome using isPalindrome() function.
// 6. Find the sum of all multiples of 3 and 5 below 20 using sumMultiplesOfThreeAndFive() function.


// Test the functions
console.log(isPrimeNumber(17)); // Output: true
console.log(factorial(5)); // Output: 120
console.log(capitalizeWords('hello world')); // Output: "Hello World"
console.log(reverseString('Node.js')); // Output: "sj.edoN"
console.log(isPalindrome('racecar')); // Output: true
console.log(sumMultiplesOfThreeAndFive(20)); // Output: 78
