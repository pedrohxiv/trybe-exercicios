const corrector = (rightAnswers, studentAnswers, action) => {
  let count = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    count += action(rightAnswers[i], studentAnswers[i]);
  }
  return `Total de pontos obtidos: ${count} pontos`;
};

const isEqual = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  }
  if (studentAnswers === "N.A") {
    return 0;
  }
  return 0.5;
};

console.log(
  corrector(
    ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"],
    ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"],
    isEqual
  )
);
