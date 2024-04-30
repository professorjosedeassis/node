/**
 * Assincronismo
 * Promise
 */

const read = require('readline-sync')

// Simulação de um banco de dados de usuários
const database = {
    admin: {
        usuario: "Administrador",
        senha: "password"
    },
    prof: {
        usuario: "José de Assis",
        senha: "123456"
    }
}

// Autenticação de um usuário
console.clear()
console.log("-------------------------")
console.log(" USUÁRIO")
console.log("-------------------------")
let login = read.question("login: ")
let senha = read.question("senha: ")
console.log("-------------------------")
logar(login, senha)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log("Erro de autenticação. " + error)
    })

// Função logar (autenticação do usuário)
function logar(login, senha) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (database.hasOwnProperty(login)) {
                if (database[login].senha === senha) {
                    resolve("Autenticação bem sucedida. Olá, " + database[login].usuario)
                } else {
                    reject("Senha incorreta. Por favor tente novamente.")
                }
            } else {
                reject("Usuário não encontrado. Por favor, verifique o login.")
            }
        }, 2000)
    })
}