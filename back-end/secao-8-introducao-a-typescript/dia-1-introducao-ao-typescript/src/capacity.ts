import readline from 'readline-sync';
const capacityUnits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

const convertCapacity = (
  value: number,
  baseUnit: string,
  conversionUnit: string,
): number => {
  return (
    value *
    Math.pow(10, capacityUnits.indexOf(conversionUnit) - capacityUnits.indexOf(baseUnit))
  );
};

const exec = () => {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');
  const fromUnitChoiceIndex = readline.keyInSelect(
    capacityUnits,
    'Escolha um número para a unidade base:',
  );
  const toUnitChoiceIndex = readline.keyInSelect(
    capacityUnits,
    'Escolha um número para a conversão:',
  );
  const toUnitChoice = capacityUnits[toUnitChoiceIndex];
  const fromUnitChoice = capacityUnits[fromUnitChoiceIndex];
  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }
  const result = convertCapacity(value, fromUnitChoice, toUnitChoice);
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
  console.log(message);
};

exec();
