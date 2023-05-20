const readline = require('readline-sync');

const imc = () => {
  const weight = readline.questionFloat('Qual o seu peso? (kg) ');
  const height = readline.questionInt('Qual a sua altura? (cm) ');
  const imc = (weight / (height / 100) ** 2).toFixed(2);
  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
  }
  if (imc >= 18.5 && imc < 24.9) {
    console.log('Situação: Peso normal');
  }
  if (imc >= 25 && imc < 29.9) {
    console.log('Situação: Acima do peso (sobrepeso)');
  }
  if (imc >= 30 && imc < 34.9) {
    console.log('Situação: Obesidade grau I');
  }
  if (imc >= 35 && imc < 39.9) {
    console.log('Situação: Obesidade grau II');
  }
  if (imc >= 40) {
    console.log('Situação: Obesidade graus III e IV');
  }
  return `IMC: ${imc}`;
};

console.log(imc());
