// criando var dentro de um bloco, fica visivel em qualquer local fora do bloco
{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera)

// criando var dentro de uma funcao, ela é visivel somente dentro da funcao
function teste(){
    var local = 123
    console.log(local)
}
teste()
console.log(local)
