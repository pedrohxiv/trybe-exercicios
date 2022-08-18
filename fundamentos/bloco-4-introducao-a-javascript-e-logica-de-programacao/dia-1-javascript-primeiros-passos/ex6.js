let peca = "BISPO".toLowerCase();
if (peca == "rei") {
    console.log("Movimenta em qualquer direção porém somente uma casa");
}
else if (peca == "dama") {
    console.log("Movimenta em qualquer direção e quantas casas quiser");
}
else if (peca == "torre") {
    console.log("Movimenta em linha reta");
}
else if (peca == "bispo") {
    console.log("Movimenta em diagonal");
}
else if (peca == "cavalo") {
    console.log("Movimenta em L");
}
else if (peca == "peão" || peca == "peao") {
    console.log("Movimenta somente uma casa para frente");
} 
else {
console.error("peça invalida");
}

