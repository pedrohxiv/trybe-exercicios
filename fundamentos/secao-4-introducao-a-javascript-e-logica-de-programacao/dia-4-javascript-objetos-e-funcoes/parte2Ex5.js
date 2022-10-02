function repeatedNums(arr) {
  let contRepet = 0;
  let contNum = 0;
  let indexNumRepet = 0;
  for (let i in arr) {
    let verifNum = arr[i];
    for (let j in arr) {
      if (verifNum === arr[j]) contNum += 1;
    }
    if (contNum > contRepet) {
      contRepet = contNum;
      indexNumRepet = i;
    }
    contNum = 0;
  }
  return arr[indexNumRepet];
}

console.log(repeatedNums([2, 3, 2, 5, 8, 2, 3]));
