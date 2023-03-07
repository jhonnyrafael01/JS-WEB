// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

// Funcao com retonro
function soma (a, b = 1) { // Soma ao valor padrão 1 se não for passado valor no segundo parametro
    return a + b
}

console.log(soma(2, 4))
console.log(soma(2))
console.log(soma())