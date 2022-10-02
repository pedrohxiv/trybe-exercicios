function biggerName(arr) {
  let biggerIn = arr[0];
  for (let i in arr) {
    if (biggerIn.length < arr[i].length) biggerIn = arr[i];
  }
  return biggerIn;
}

console.log(
  biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
);
