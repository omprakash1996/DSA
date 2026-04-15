// Function to add two decimal numbers
function addDecimals(num1, num2) {
    // Use toFixed to handle floating-point precision issues
    let sum = num1 + num2;
    return parseFloat(sum.toFixed(2)); // rounds to 2 decimal places
}

// Example usage
let number1 = 12.34;
let number2 = 45.67;

let result = addDecimals(number1, number2);
console.log("The sum is: " + result);

