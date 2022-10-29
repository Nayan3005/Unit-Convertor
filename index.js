const headerInput = document.getElementById("header-input")
const convertBtn = document.getElementById("convert-btn")
const lengthPara = document.getElementById("length-para")
const volumePara = document.getElementById("volume-para")
const massPara = document.getElementById("mass-para")

convertBtn.addEventListener("click",function(){
    if(headerInput.value==="")
    {
        headerInput.style.borderColor ="red"
    }
    else{
        let userInput = headerInput.value
        convert(userInput)
    }
})

function convert(num){
    lengthPara.innerHTML = `${num} meters = ${num*3.281} feet | ${num} feet = ${(num/3.281).toFixed(3)} meters`
    volumePara.innerHTML = `${num} liters = ${num*0.264} Gallon | ${num} Gallon = ${(num/0.264).toFixed(3)} liters`
    massPara.innerHTML = `${num} kilos = ${num*2.204} Pounds | ${num} Pounds = ${(num/2.204).toFixed(3)} Kilos`
}