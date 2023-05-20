const fs = require('fs').promises;

const getAllSimpsons = async () => {
  const simpsons = JSON.parse(await fs.readFile('./src/simpsons.json', 'utf-8'));
  return simpsons
    .map(({ id, name }) => `${id} - ${name}`)
    .forEach((str) => console.log(str));
};

const getSimpsonsById = async (id) => {
  const simpsons = JSON.parse(await fs.readFile('./src/simpsons.json', 'utf-8'));
  const choseSimpson = simpsons.find((simpson) => +simpson.id === id);
  if (!choseSimpson) throw new Error('Id não encontrado');
  return choseSimpson;
};

const filterSimpsons = async () => {
  const simpsons = JSON.parse(await fs.readFile('./src/simpsons.json', 'utf-8'));
  const newSimpsons = simpsons.filter(
    (simpson) => +simpson.id !== 10 && +simpson.id !== 6,
  );
  await fs.writeFile('./src/simpsons.json', JSON.stringify(newSimpsons));
};

const createSimpsonsFamily = async () => {
  const simpsons = JSON.parse(await fs.readFile('./src/simpsons.json', 'utf-8'));
  const simpsonsFamily = simpsons.filter((simpson) => [1, 2, 3, 4].includes(+simpson.id));
  await fs.writeFile('./src/simpsonsFamily.json', JSON.stringify(simpsonsFamily));
};

const addNelsonToFamily = async () => {
  const simpsonsFamily = JSON.parse(
    await fs.readFile('./src/simpsonsFamily.json', 'utf-8'),
  );
  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./src/simpsonsFamily.json', JSON.stringify(simpsonsFamily));
};

const replaceNelsonToMaggie = async () => {
  const simpsonsFamily = JSON.parse(
    await fs.readFile('./src/simpsonsFamily.json', 'utf-8'),
  );
  const newSimpsonsFamily = simpsonsFamily.filter((simpson) => +simpson.id !== 8);
  newSimpsonsFamily.push({
    id: '5',
    name: 'Maggie Simpson',
  });
  await fs.writeFile('./src/simpsonsFamily.json', JSON.stringify(newSimpsonsFamily));
};

// (async () => console.log(await getAllSimpsons()))();
// (async () => console.log(await getSimpsonsById(3)))();
// (async () => await filterSimpsons())();
// (async () => await createSimpsonsFamily())();
// (async () => await addNelsonToFamily())();
// (async () => await replaceNelsonToMaggie())();
