import readline from 'readline-sync';
const lengthUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const convertLength = (
  value: number,
  baseUnit: string,
  conversionUnit: string,
): number => {
  return (
    value *
    Math.pow(10, lengthUnits.indexOf(conversionUnit) - lengthUnits.indexOf(baseUnit))
  );
};

const exec = () => {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');
  const fromUnitChoiceIndex = readline.keyInSelect(
    lengthUnits,
    'Escolha um número para a unidade base:',
  );
  const toUnitChoiceIndex = readline.keyInSelect(
    lengthUnits,
    'Escolha um número para a conversão:',
  );
  const toUnitChoice = lengthUnits[toUnitChoiceIndex];
  const fromUnitChoice = lengthUnits[fromUnitChoiceIndex];
  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }
  const result = convertLength(value, fromUnitChoice, toUnitChoice);
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
  console.log(message);
};

exec();
