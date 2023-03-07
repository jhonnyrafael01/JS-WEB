const escola = "Cod3r"

console.log(escola.charAt(4)) // Retorna a letra na posição 4
console.log(escola.charAt(5)) 
console.log(escola.charCodeAt(2)) // Retorna a posição do caracter a partir do indice(2 = "d") que foi passado da tabela Unicode
console.log(escola.indexOf('r')) // Retorna o primeiro index que contem a letra passada como parametro

console.log(escola.substring(1)) // Retorna a partir do indice 1 ate o final
console.log(escola.substring(0, 3)) // Retorna a partir do indice 0, 3 caracteres

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))