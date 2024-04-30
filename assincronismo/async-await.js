/**
 * Assincronismo
 * Async - Await
 */

const fs = require('fs')

async function criarArquivo() {
    let conteudo = "Professor José de Assis\nExemplo de uso dos recursos async e await"
    await gravarArquivo("teste.txt", conteudo)
}

async function gravarArquivo(path, conteudo) {
    try {
        await fs.promises.writeFile(path, conteudo)
        console.log("Arquivo gravado com sucesso")
    } catch (error) {
        console.log(error)
    }
}

console.clear()
criarArquivo()