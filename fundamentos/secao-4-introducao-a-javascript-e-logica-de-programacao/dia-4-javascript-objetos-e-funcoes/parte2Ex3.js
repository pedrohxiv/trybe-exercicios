function lesserNum(arr) {
  let lesserIn = 0;
  for (let i in arr) {
    if (arr[lesserIn] > arr[i]) lesserIn = i;
  }
  return lesserIn;
}

console.log(lesserNum([2, 4, 6, 7, 10, 0, -3]));
