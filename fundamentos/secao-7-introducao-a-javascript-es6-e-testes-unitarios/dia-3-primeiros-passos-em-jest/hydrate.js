const hydrate = (drink) => {
  const numbers = drink.match(/\d+/g);
  let sumNumbers = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    sumNumbers += parseInt(numbers[index]);
  }
  return sumNumbers === 1
    ? `${sumNumbers} copo de água`
    : `${sumNumbers} copos de água`;
};

hydrate("2 shots de tequila, 2 cervejas e 1 corote");

module.exports = hydrate;
