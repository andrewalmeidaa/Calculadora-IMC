const peso = document.getElementById(`peso`)
const altura = document.getElementById(`altura`)
const btn = document.getElementById(`btn`)
const result = document.getElementById(`resultado`)


btn.addEventListener(`click`, ()=>{
    let altur = altura.value*altura.value
    let imc = (peso.value / altur).toFixed(2)
    console.log(imc)
    result.textContent = `Seu IMC e ${imc}`
})



