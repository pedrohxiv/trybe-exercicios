let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;
let menorNumero = 0; 
for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }    
}
menorNumero = maiorNumero;
for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    }
}

console.log(menorNumero);