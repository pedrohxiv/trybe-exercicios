const people = [
  {
    name: "Nicole",
    bornIn: 1992,
    nationality: "Australian",
  },
  {
    name: "Harry",
    bornIn: 2008,
    nationality: "Australian",
  },
  {
    name: "Toby",
    bornIn: 1901,
    nationality: "Australian",
  },
  {
    name: "Frida",
    bornIn: 1960,
    nationality: "Dannish",
  },
  {
    name: "Fernando",
    bornIn: 2001,
    nationality: "Brazilian",
  },
  // bornIn: nascido em
];

// escreva filterPeople abaixo
const filterPeople = ({ name, bornIn, nationality }) => {
  if (bornIn < 2001 && nationality === "Australian") {
    return `${name}, `;
  }
  return "";
};

console.log(filterPeople(people[0]));
console.log(filterPeople(people[1]));
console.log(filterPeople(people[2]));
console.log(filterPeople(people[3]));
console.log(filterPeople(people[4]));
