function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.2
    }
}

console.log(criarProduto('janela', 500))
console.log(criarProduto('porta', 1500))