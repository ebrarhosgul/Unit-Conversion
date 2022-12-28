const inputEl = document.getElementById('input-el')
const btnEl = document.getElementById('btn-el')
const lengthTxt1 = document.getElementById('1')
const lengthTxt2 = document.getElementById('2')
const lengthTxt3 = document.getElementById('3')

btnEl.addEventListener('click', function () {
    let inputValue = inputEl.value
    fLength(inputValue)
    fVolume(inputValue)
    fMass(inputValue)
})

function fLength(inputPar) {
    let con1 = (Number(inputPar) * 3.281).toFixed(3)
    let con2 = (Number(inputPar) / 3.281).toFixed(3)
    lengthTxt1.innerHTML = `${inputPar} meters = ${con1} feet | ${inputPar} feet = ${con2} meters`
}

function fVolume(inputPar) {
    let con1 = (Number(inputPar) * 0.264).toFixed(3)
    let con2 = (Number(inputPar) / 0.264).toFixed(3)
    lengthTxt2.innerHTML = `${inputPar} liters = ${con1} gallons | ${inputPar} gallons = ${con2} liters`
}

function fMass(inputPar) {
    let con1 = (Number(inputPar) * 2.204).toFixed(3)
    let con2 = (Number(inputPar) / 2.204).toFixed(3)
    lengthTxt3.innerHTML = `${inputPar} kilos = ${con1} pounds | ${inputPar} pounds = ${con2} kilos`
}

inputEl.addEventListener('input', () => {
    let inputValue = inputEl.value
    let inputFormat = inputValue.replace(/[^\d]/g, "")
    inputFormat = inputFormat.substring(0, 3)

    if (inputValue !== inputFormat)
        inputEl.value = inputFormat
})