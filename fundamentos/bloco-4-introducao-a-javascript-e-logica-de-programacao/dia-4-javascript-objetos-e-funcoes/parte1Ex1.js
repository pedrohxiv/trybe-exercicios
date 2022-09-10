let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("Numero 1");
console.log("Bem-vinda, " + info["personagem"]);

console.log("");
console.log("Numero 2");
info["recorrente"] = "Sim";
console.log(info);

console.log("");
console.log("Numero 3");
for (const index in info) {
  console.log(index);
}

console.log("");
console.log("Numero 4");
for (const index in info) {
  console.log(info[index]);
}

console.log("");
console.log("Numero 5");
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};
console.log(info["personagem"] + " e " + info2["personagem"]);
console.log(info["origem"] + " e " + info2["origem"]);
console.log(info["nota"] + " e " + info2["nota"]);
if (info["recorrente"] == "Sim" && info2["recorrente"] == "Sim") {
  console.log("Ambos recorrentes");
}
