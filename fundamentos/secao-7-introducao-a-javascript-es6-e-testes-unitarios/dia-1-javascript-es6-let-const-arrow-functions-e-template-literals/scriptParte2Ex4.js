const substituaX = (nome) => "Tryber x aqui!".replace(/x/gi, nome);

console.log(substituaX("Pedro"));

const minhasSkills = () => {
  const skills = ["HTML", "CSS", "JavaScript"];
  return `
${substituaX("Pedro")}
Minhas três principais habilidades são:
${skills}`;
};

console.log(minhasSkills());
