let numero = 50;
for (let index = 2; index < numero; index++) {
    if (numero % index === 0){
        console.log(index + " Não é primo");
    } else {
        console.log(index + " É primo");
    }
}