const verifyNum = (num, randomNum) => num === randomNum;

const result = (num, func) =>
  func(num, Math.floor(Math.random() * 5) + 1)
    ? "Parabéns você ganhou!"
    : "Tente novamente";

console.log(result(2, verifyNum));
