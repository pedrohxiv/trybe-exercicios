const custoProduto = 30 + (30 * 20/100);
const valorVenda = 50;
let lucro = (valorVenda - custoProduto) * 1000;
if (lucro < 0) {
    console.error("valor invalido");
}else console.log(lucro);