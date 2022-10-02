let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  newNumbers.push(numbers[i] * numbers[i + 1]);
}
newNumbers.pop();
newNumbers.push(numbers[numbers.length - 1] + numbers[numbers.length - 1]);

console.log(newNumbers);
