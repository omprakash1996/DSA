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
// --------------------------------------------------------------------------------

function isValidParentheses(s) {
  const stack = [];
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

// Examples
console.log(isValidParentheses("()"));       // true
console.log(isValidParentheses("()[]{}"));   // true
console.log(isValidParentheses("(]"));       // false
console.log(isValidParentheses("([)]"));     // false
console.log(isValidParentheses("{[]}"));     // true

