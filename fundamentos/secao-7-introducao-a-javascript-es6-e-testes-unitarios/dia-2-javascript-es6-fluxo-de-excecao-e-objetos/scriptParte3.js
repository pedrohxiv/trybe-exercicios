const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const addTurnoLesson2 = () => Object.assign(lesson2, { turno: "noite" });
addTurnoLesson2();

const listKeys = (obj) => console.log(Object.keys(obj));
listKeys(lesson1);

const sizeObject = () => console.log(Object.keys(lesson1).length);
sizeObject();

const listValues = (obj) => console.log(Object.values(obj));
listValues(lesson1);

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
};
Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

const numEstudantes = () =>
  console.log(
    parseInt(Object.values(allLessons.lesson1)[1]) +
      parseInt(Object.values(allLessons.lesson2)[1]) +
      parseInt(Object.values(allLessons.lesson3)[1])
  );
numEstudantes();

const getValueByNumber = (obj, key) => console.log(Object.values(obj)[key]);
getValueByNumber(lesson1, 0);

const verifyPair = (obj, key, value) =>
  console.log(
    Object.keys(obj).includes(key) &&
      Object.values(obj[key]).length === value.split("").length
      ? true
      : false
  );
verifyPair(lesson3, "materia", "Maria Clara");

const qntstudents = () =>
  console.log(
    parseInt(Object.values(allLessons.lesson1)[1]) +
      parseInt(Object.values(allLessons.lesson3)[1])
  );
qntstudents();

const createReport = (allObj, prof) =>
  console.log({
    professor: prof,
    aulas: [Object.values(allObj.lesson1)[0], Object.values(allObj.lesson1)[0]],
    estudantes:
      parseInt(Object.values(allLessons.lesson1)[1]) +
      parseInt(Object.values(allLessons.lesson3)[1]),
  });

createReport(allLessons, "Maria Clara");
