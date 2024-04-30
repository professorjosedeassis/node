/**
 * Fundamentos da POO
 * Encapsulamento
 */

class User {
    //atributos
    constructor(login, senha) {
        this.login = login
        //encapsulamento
        let _senha = senha
        this.getSenha = () => _senha
        this.setSenha = (novaSenha) => _senha = novaSenha
    }
    //ação
    logar() {
        console.log("______________________________")
        console.log(`Usuário: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === "admin" && this.getSenha() === "123456") {
            console.log("Usuário autenticado")
        } else {
            console.log("usuário e/ou senha inválido(s)")
        }
    }
}

/** SISTEMA **/
console.clear()
const user1 = new User("admin", "1234")
user1.logar()
user1.setSenha("123456")
user1.logar()