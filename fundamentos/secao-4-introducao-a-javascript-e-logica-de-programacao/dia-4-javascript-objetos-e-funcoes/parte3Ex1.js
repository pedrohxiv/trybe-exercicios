function convertToDecimal(roman) {
  let result = 0;
  let ln = null;

  const algRoman = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  roman = roman.toUpperCase();
  for (let i = roman.length - 1; i >= 0; i -= 1) {
    let char = roman.charAt(i);
    for (let key in algRoman) {
      if (char === key) {
        let nc = parseInt(algRoman[key]);
        if (ln !== null) if (nc < ln) nc *= -1;
        result += nc;
        ln = nc;
      }
    }
  }
  return result;
}

console.log(convertToDecimal('MCXXIII'));
