const salarioBruto = 5000;
let salarioLiquido = 0;
let inss = 0;
let salarioBase = 0;
let ir = 0;


if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 8 /100; 
    salarioBase = salarioBruto - inss;
}
if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inss = salarioBruto * 9 /100;
    salarioBase = salarioBruto - inss;
}
if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = salarioBruto * 11 /100;
    salarioBase = salarioBruto - inss;
}
if (salarioBruto > 5189.82) {
    inss = 570.88;
    salarioBase = salarioBruto - inss;
}

if(salarioBase < 1903.99){
    ir = 0;
}
if(salarioBase >= 1903.99 && salarioBase < 2826.65){
    ir = (salarioBase * 7.5/100) -142.80;
}
if(salarioBase >= 2826.66 && salarioBase < 3751.05){
    ir = (salarioBase * 15/100) -354.80;
}
if(salarioBase >= 3751.06 && salarioBase < 4664.68){
    ir = (salarioBase * 22.5/100) -636.13;
}
if(salarioBase > 4664.68){
    ir = (salarioBase * 27.5/100) -869.36;
}

salarioLiquido = salarioBase - ir;
console.log("R$ " + salarioLiquido);