import readline from 'readline-sync';
const areaUnits = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

const convertArea = (value: number, baseUnit: string, conversionUnit: string): number => {
  return (
    value * Math.pow(100, areaUnits.indexOf(conversionUnit) - areaUnits.indexOf(baseUnit))
  );
};

const exec = () => {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');
  const fromUnitChoiceIndex = readline.keyInSelect(
    areaUnits,
    'Escolha um número para a unidade base:',
  );
  const toUnitChoiceIndex = readline.keyInSelect(
    areaUnits,
    'Escolha um número para a conversão:',
  );
  const toUnitChoice = areaUnits[toUnitChoiceIndex];
  const fromUnitChoice = areaUnits[fromUnitChoiceIndex];
  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }
  const result = convertArea(value, fromUnitChoice, toUnitChoice);
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
  console.log(message);
};

exec();
