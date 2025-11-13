// Write a function to find the Fibonacci sequence up to n.
function fibonacciArray(n) {
  let arr = [];
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    arr[i]=a;
    let next=a+b;
    a=b;
    b=next;
  }
  return arr;
}
console.log(fibonacciArray(10));
