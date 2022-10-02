const n = 7;

let mid = (n + 1) / 2;
let left = mid;
let right = mid;

for (let i = 1; i <= mid; i += 1) {
  let result = '';
  for (let j = 1; j <= n; j += 1) {
    j === left || j === right || i === mid ? (result += '*') : (result += ' ');
  }
  right += 1;
  left -= 1;
  console.log(result);
}
