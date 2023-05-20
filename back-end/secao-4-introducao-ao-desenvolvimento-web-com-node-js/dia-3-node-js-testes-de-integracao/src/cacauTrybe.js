const fs = require('fs').promises;
const { join } = require('path');

const path = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  try {
    return JSON.parse(await fs.readFile(join(__dirname, path), 'utf-8'));
  } catch (error) {
    console.error('Erro ao ler o arquivo', error.message);
    return null;
  }
};

const writeCacauTrybeFile = async (content) => {
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(content));
  } catch (error) {
    console.error('Erro ao salvar o arquivo', error.message);
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter((chocolate) => chocolate.brandId === brandId);
};

const getChocolatesByName = async (name) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter((chocolate) =>
    chocolate.name.toLowerCase().includes(name.toLowerCase()),
  );
};

const updateChocolate = async (id, update) => {
  const cacauTrybe = await readCacauTrybeFile();
  const index = cacauTrybe.chocolates.findIndex((chocolate) => chocolate.id === id);

  if (index !== -1) {
    cacauTrybe.chocolates[index] = { ...cacauTrybe.chocolates[index], ...update };
    await writeCacauTrybeFile(cacauTrybe);
    return cacauTrybe.chocolates[index];
  }

  return false;
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getChocolatesByName,
  updateChocolate,
};
