
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthVal = document.getElementById("length-val")
const volumeVal = document.getElementById("volume-val")
const massVal = document.getElementById("mass-val")

convertBtn.addEventListener("click", calculate)

function calculate() {
    const userInput = inputEl.value
    const metFeet = (userInput * 3.281).toFixed(3)
    const feetMet = (userInput / 3.281).toFixed(3)
    const litGal = (userInput * 0.264).toFixed(3)
    const galLit = (userInput / 0.264).toFixed(3)
    const kgPound = (userInput * 2.204).toFixed(3)
    const poundKg = (userInput / 2.204).toFixed(3)

lengthVal.textContent = `${userInput} meters = ${metFeet} feet |  ${userInput} feet = ${feetMet} meters`

volumeVal.textContent = `${userInput} liters = ${litGal} gallons |  ${userInput} gallons = ${galLit} liters`

massVal.textContent = `${userInput} kilograms = ${poundKg} pounds |  ${userInput} pounds = ${kgPound} kilograms`

}

inputEl.value = "?"
calculate()

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/