const newEmployees = () => {
  const employees = {
    id1: genId("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: genId("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: genId("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const genId = (name) => {
  const pessoa = {
    nomeCompleto: name,
    email: `${name.replace(" ", "_").toLowerCase()}@trybe.com`,
  };
  return pessoa;
};

console.log(newEmployees());
