/**
 * Tutorial Node.js
 * Uso de chaves nas estruturas de controle
 */

// Nas estruturas de controle condicional e nos laços de repetições
// podemos omitir as chaves, porém só uma linha de código é vinculada

let media = 3

if (media < 5)
    console.log("REPROVADO")
else
    console.log("APROVADO")
console.log("Emitir certificado")

for (let x = 1; x < 10; x++)
    console.log(x)
console.log("node.js")