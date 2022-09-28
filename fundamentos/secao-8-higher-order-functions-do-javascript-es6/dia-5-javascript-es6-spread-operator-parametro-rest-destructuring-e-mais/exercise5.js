const myList = [5, 2, 3];
// escreva swap abaixo
const swap = () => {
  const [firstNum, secondNum, thirdNum] = myList;
  return [thirdNum, secondNum, firstNum];
};

console.log(swap());
