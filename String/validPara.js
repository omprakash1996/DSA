function isValid(str) {
  let stack = [];
  let top = -1;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === "(" || char === "{" || char === "[") {
      top++;
      stack[top] = char;
    } else {
      if (top === -1) {
        return false;
      }
      let topChar = stack[top];
      if (
        (char === ")" && topChar === "(") ||
        (char === "}" && topChar === "{") ||
        (char === "]" && topChar === "[")
      ) {
        top--;
      } else {
        return false;
      }
    }
  }
  return top === -1;
}
console.log(isValid("()")); // true
console.log(isValid("({[]})")); // true
console.log(isValid("(]")); // false
console.log(isValid("((("));
