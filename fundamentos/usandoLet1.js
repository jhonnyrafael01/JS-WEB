// let tem escopo global, funcao e de BLOCO '{}'
let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('dentro =', numero)