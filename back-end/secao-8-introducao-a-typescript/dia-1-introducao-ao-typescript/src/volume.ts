import readline from 'readline-sync';
const volumeUnits = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

const convertVolume = (
  value: number,
  baseUnit: string,
  conversionUnit: string,
): number => {
  return (
    value *
    Math.pow(1000, volumeUnits.indexOf(conversionUnit) - volumeUnits.indexOf(baseUnit))
  );
};

const exec = () => {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');
  const fromUnitChoiceIndex = readline.keyInSelect(
    volumeUnits,
    'Escolha um número para a unidade base:',
  );
  const toUnitChoiceIndex = readline.keyInSelect(
    volumeUnits,
    'Escolha um número para a conversão:',
  );
  const toUnitChoice = volumeUnits[toUnitChoiceIndex];
  const fromUnitChoice = volumeUnits[fromUnitChoiceIndex];
  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }
  const result = convertVolume(value, fromUnitChoice, toUnitChoice);
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
  console.log(message);
};

exec();
