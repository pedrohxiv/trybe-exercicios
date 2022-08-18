let nota = 20;
if (nota >= 90 && nota <=100) {
    console.log("A");
}
if (nota >= 80 && nota < 90) {
    console.log("B");
}
if (nota >= 70 && nota < 80) {
    console.log("C");
}
if (nota >= 60 && nota < 70) {
    console.log("D");
}
if (nota >= 50 && nota < 60) {
    console.log("E");
}
if (nota < 50) {
    console.log("F");
} else if (nota < 0 || nota >100) {
    console.error("numero invalido");
}