/**
 * Tutorial Node.js
 * Entrada de dados via terminal
 * Aplicativo IMC
 */

const colors = require('colors')
const read = require('readline-sync')

console.clear()
console.log(" ___ __  __  ___ ")
console.log("|_ _|  \\/  |/ __|")
console.log(" | || |\\/| | (__ ")
console.log("|___|_|  |_|\\___|")
console.log("")
let nome = read.question("Digite o seu nome: ")
let peso = Number(read.question("Digite o seu peso (Kg): ").replace(",", "."))
let altura = Number(read.question("Digite a sua altura (m): ").replace(",", "."))
let imc = peso / (altura * altura)
console.log("")
console.log("--------------------------------")
console.log("Ficha do aluno".italic.bold)
console.log(`Nome: ${nome}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`IMC: ${imc.toFixed(2)}`)
if (imc < 18.5) {
    console.log("Abaixo do peso".cyan)
} else if (imc < 25) {
    console.log("Peso normal".green)
} else if (imc < 30) {
    console.log("Acima do peso".yellow)
} else if (imc < 35) {
    console.log("Obesidade I".yellow)
} else if (imc < 40) {
    console.log("Obesidade II (severa)".red)
} else {
    console.log("Obesidade III (mórbida)".red.bold)
}
console.log("")
console.log("--------------------------------")