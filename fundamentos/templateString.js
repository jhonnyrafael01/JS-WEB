const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
// template é usado para fazer varias concatenações. Suporta a quebra de linha e considera os espaços
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // função arrow, está sendo usado para colocar o texto em maiusculo 
console.log(`Ei.. ${up('cuidado')}!`) // função up dentro de um template string
