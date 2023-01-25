const peso = document.getElementById(`peso`)
const altura = document.getElementById(`altura`)
const btn = document.getElementById(`btn`)
const result = document.getElementById(`resultado`)


btn.addEventListener(`click`, ()=>{
    // let altur = altura.value*altura.value
    // let imc = (peso.value / altur).toFixed(2)

    const divBoxResultado = document.getElementById('boxResultado')
    const pResult = document.createElement('p')
    pResult.id = 'resultado'
    pResult.className = 'resultado'
    pResult.innerText = `Seu IMC e ${calcImc()}
                        E isso representa: ${indiceImc(calcImc())}
                                                `
   
    // const pIndiceImcResultado = document.createElement('p')
    // pIndiceImcResultado.id = 'resultado'
    // pIndiceImcResultado.className = 'resultado'
    // pIndiceImcResultado.innerText = `Seu IMC e ${indiceImc(calcImc())}`

    divBoxResultado.append(pResult)
    console.log(indiceImc(calcImc()))
})



function calcImc (){
    let altur = altura.value*altura.value
    let imc = (peso.value / altur).toFixed(2)
    return imc
}


function indiceImc(imc){
    let indiceImcUsuario = ``
    if(imc<18.5){
        indiceImcUsuario = `Baixo peso`
    }else if(imc>=18.5 && imc<24.9){
        indiceImcUsuario = `Peso Normal`
    }else if(imc>=25 && imc<29.9){
        indiceImcUsuario = `Sobrepeso`
    }else if(imc>=30 && imc<34.9){
        indiceImcUsuario = `Obesidade Grau 1`
    }else if(imc>=35 && imc<39.9){
        indiceImcUsuario = `Obesidade grau 2`
    }else if(imc>40){
        indiceImcUsuario = `Obesidade grau 3`
    }
    return indiceImcUsuario
}

console.log(`test`)