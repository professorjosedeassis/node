/**
 * Tutorial Node.js
 * Funções
 */

function hello() {
    console.log("Hello Function")
}

hello()
console.log(typeof hello)

const hello2 = function () {
    console.log("Hello Function Assigned")
}

hello2()
console.log(typeof hello2)

const hello3 = () => {
    console.log("Hello Arrow Function Assigned")
}

hello3()
console.log(typeof hello3)

const hello4 = _ => console.log("Hello Arrow Function Assigned Simplified")

hello4()
console.log(typeof hello4)

function somarS(num1, num2) {
    return (console.log(num1 + num2))
}

somarS(2, 3)

let somarA = function (num1, num2) {
    return (console.log(num1 + num2))
}

somarA(2, 3)
console.log(typeof somarA)

let somarAF = (num1, num2) => {
    return (console.log(num1 + num2))
}

somarAF(2, 3)
console.log(typeof somarAF)

let somarAFS = (num1, num2) => (console.log(num1 + num2))
somarAFS(2, 3)
console.log(typeof somarAFS)