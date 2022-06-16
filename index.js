
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthVal = document.getElementById("length-val")
const volumeVal = document.getElementById("volume-val")
const massVal = document.getElementById("mass-val")

convertBtn.addEventListener("click", calculate)

function calculate() {
    const user_input = inputEl.value
    const met_feet = (user_input * 3.281).toFixed(3)
    const feet_met = (user_input / 3.281).toFixed(3)
    const lit_gal = (user_input * 3.785).toFixed(3)
    const gal_lit = (user_input / 3.785).toFixed(3)
    const kg_pound = (user_input * 2.204).toFixed(3)
    const pound_kg = (user_input / 2.204).toFixed(3)

const me=" meters"
const fe=" feet"
const li=" liters"
const ga=" gallons"
const kg=" kilograms"
const po=" pounds"

lengthVal.textContent = `${user_input} ${me} = ${met_feet} ${fe} | ${user_input} ${fe} = ${feet_met}${me}`

volumeVal.textContent = `${user_input} ${ga} = ${gal_lit} ${li} | ${user_input} ${kg} = ${lit_gal} ${ga}`

massVal.textContent = `${user_input} ${po} = ${kg_pound} ${kg} | ${user_input} ${kg} = ${pound_kg} ${po}`

}


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/