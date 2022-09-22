const randomNum = () => Math.floor(Math.random() * 5) + 1;

const verify = (num) =>
  num === randomNum() ? "Parabéns você ganhou" : "Tente novamente";

console.log(verify(4));
