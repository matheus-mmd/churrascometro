
let adultos = document.getElementById('adultos')
let criancas = document.getElementById('criancas')
let duracao = document.getElementById('duracao')
let respostaDados = document.querySelector('.respostaDados')



function calculo() {
    let adultosValor = adultos.value
    let criancasValor = criancas.value
    let duraçãoValor = duracao.value

    if (duraçãoValor === "0" || duraçãoValor ==="" ) {
        alert('por favor insira duração do churrasco')
    }
    else {
        // adultos = 130g  & crianca até 13 anos =90g & 1 hora = 500g
        var somaCarne = (130 * adultosValor * duraçãoValor) + (90 * criancasValor*duraçãoValor)
        //cervejas 2 latas
        var somaCerveja = (2*duraçãoValor * criancasValor)
        // refrigerante= 500ml & água = 200ml & cerveja = 2 
        var somaRefrigerante = (1 * duraçãoValor *(criancasValor/2))

        if(somaCarne<=999){
            respostaDados.innerHTML = somaCarne + ' g de Carne <BR>'
            +somaCerveja+' Latas de cervejas <BR>'
            +somaRefrigerante+ 'garrafas de 1.5L de bebidas'
        }
        else{
            respostaDados.innerHTML = somaCarne + ' Kg de Carne <BR>'
            +somaCerveja+' Latas de cervejas <BR>'
            +somaRefrigerante+ 'garrafas de 1.5L de bebidas'
            
        }

             
             
            
    }

    

}