const num = 7;
let qntDiv = 1;

for (let i = 2; i <= num; i += 1) {
  if (num % i === 2) qntDiv += 1;
}

qntDiv === 2
  ? console.log(`Número ${num} é primo!`)
  : console.log(`Número ${num} NÃO é primo!`);
