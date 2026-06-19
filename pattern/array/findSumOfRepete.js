// 11.find the sum of repete array

const arr = [1, 2, 3, 2, 4, 5, 1,1,2,5,5];

let count = {};
let sum = 0;

for (let num of arr) {
  count[num] = (count[num] || 0) + 1;
}

for (let key in count) {
  if (count[key] > 1) {
    sum += Number(key);
  }
}

console.log(sum);