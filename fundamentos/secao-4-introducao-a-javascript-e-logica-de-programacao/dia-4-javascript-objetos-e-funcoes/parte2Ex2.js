function biggerNum(arr) {
  let biggerIn = 0;
  for (let i in arr) {
    if (arr[biggerIn] < arr[i]) biggerIn = i;
  }
  return biggerIn;
}

console.log(biggerNum([2, 3, 6, 7, 10, 1]));
