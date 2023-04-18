import readline from 'readline-sync';
const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

const convertMass = (value: number, baseUnit: string, conversionUnit: string): number => {
  return (
    value * Math.pow(10, massUnits.indexOf(conversionUnit) - massUnits.indexOf(baseUnit))
  );
};

const exec = () => {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');
  const fromUnitChoiceIndex = readline.keyInSelect(
    massUnits,
    'Escolha um número para a unidade base:',
  );
  const toUnitChoiceIndex = readline.keyInSelect(
    massUnits,
    'Escolha um número para a conversão:',
  );
  const toUnitChoice = massUnits[toUnitChoiceIndex];
  const fromUnitChoice = massUnits[fromUnitChoiceIndex];
  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }
  const result = convertMass(value, fromUnitChoice, toUnitChoice);
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
  console.log(message);
};

exec();
