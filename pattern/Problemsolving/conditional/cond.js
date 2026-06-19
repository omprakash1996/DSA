// conditional logic problem

// 1 .  Find the maximum of three numbers.
// function findMax(arr) {
//  let max= arr[0];
//  for (let i=0;i<arr.length;i++){
//    if (arr[i] > max){
//     max= arr[i];
//    }
//  }
//  return max;
// }
// const numbers = [10,200, 22];
// console.log(findMax(numbers));
// -------------------------------------------------------------------
// 2. check if a number is positive negative or zero.

// function checkNum(num) {
//   if (num > 1) {
//     return "number is positive";
//   } else if (num == 0) {
//     return "number is 0";
//   } else {
//     return "number is negative";
//   }
// }
// console.log(checkNum(0));
// -------------------------------------------------------------------------------------------------
// 3. calculate electric bill,
// input:units = 230
// output: Total bill = 1500
// ex: 0- 100 units -> $5 per units , 101 - 200 units -> $7 per unit, 201-300 units -> $10 per unit , Above 300 units -> $12 per unit .

// --------------------------------------------------------------------------------------------------------
// 4. check if a character is a vowel or consonant.
// function checkVowel(char) {
//   let vowel = "aeiouAEIOU";
//   for (let i = 0; i < vowel.length; i++) {
//     if (char === vowel[i]) {
//       return "char is vowel";
//     }
//   }
//   return 'char is consonant';
// }
// console.log(checkVowel("M"));
// ------------------------------------------------------------------------------------------
// 5.check a year is leap year.
// function checkLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     return year +" " + "is a leap year";
//   } else {
//     return year  +" " + "is not a leap year";
//   }
// }
// console.log(checkLeapYear(2025));

// ----------------------------------------------------------------------------------------------------------
// 6. check if a character is uppercase,lowercase,digit or special character.
// function isChara(char){
//  if (char >='A' && char <= 'Z'){
//     return 'character is uppercase'
//  }else if(char >='a' && char <= 'z'){
//     return 'character is lowecase'
//  }else if (char >=1 && char <=9){
//     return 'charcter is digit';
//  }else{
//     return 'character is special character';
//  }
// }
// console.log(isChara('j'));

// ---------------------------------------------------------------------------------------------
// 7.check triangle type using sides and angles.

// function triangleType(a,b,c){
//     if(a==b && b ==c){
//         return 'Equilateral triangle';
//     }else if( a===b || b===c || a === c){
//         return'Isosceles triangle'
//     }else{
//         return 'Scalene triangle';
//     }

// }
// console.log(triangleType(5,5,3));

// ------------------------------------------------------------------------------------------------
// 8. calculate income tax based on slabs.

function calculateTax(income) {
  tax = 0;
  if (income <= 400000) {
    tax = 0;
  } else if (income <= 800000) {
    tax = (income - 400000) * 0.05;
  } else {
    tax =
      400000 * 0.05 +
      400000 * 0.1 +
      400000 * 0.15 +
      400000 * 0.2 +
      400000 * 0.25 +
      (income - 2400000) * 0.3;
  }
  let cess = tax * 0.04;
  let totalTax = tax + cess;

  return totalTax;
}
console.log("Tax on $6,00,000:", calculateTax(600000));
