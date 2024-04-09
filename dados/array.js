/**
 * Estrutura de dados
 * Array
 */

let alunosEM1 = ["Vitor", "Tania", "Pedro", "Maria", "Viviane", "Sirlene"]
console.log(typeof alunosEM1)
//exibindo dados de um array
console.log(alunosEM1.length)
console.log(alunosEM1)
console.table(alunosEM1)
console.log(alunosEM1[2])
//adicionando dados no array
alunosEM1.push("Jorge")
console.table(alunosEM1)
alunosEM1.unshift("Luiza")
console.table(alunosEM1)
alunosEM1.splice(4, 0, "Matheus", "Julia")
console.table(alunosEM1)
alunosEM1[12] = "Leandro"
console.log(alunosEM1)
console.table(alunosEM1)
//modificando dados do array
alunosEM1[1] = "Victor"
console.table(alunosEM1)
//excluir dados de um array
alunosEM1.pop()
console.table(alunosEM1)
alunosEM1.shift()
console.table(alunosEM1)
alunosEM1.splice(5, 2)
console.table(alunosEM1)
delete alunosEM1[3]
console.table(alunosEM1)
delete alunosEM1[0]
console.log(alunosEM1)
console.table(alunosEM1)
//percorrendo um array
console.clear()
let notas = [3, 8, 5, 9, 2]
console.log(notas)
console.table(notas)
//laço for
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}
//forEach
notas.forEach((notas) => {
    console.log(notas)
})
//map()
//Exemplo 1: Adicionar 1 ponto as notas dos alunos
let notasAtualizadas = notas.map((na) => {
    return na + 1
})
console.log(notas)
console.log(notasAtualizadas)
//Exemplo 2: Conversão do sistema de pontos para letras
/*
  NA - Não Atendeu (nota < 5)
  PA - Parciamente Atendido (nota entre 5 e 7)
   A - Atendeu (nota > 7)
*/
let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return "NA"
    } else if (nc > 7) {
        return "A"
    } else {
        return "PA"
    }
})
console.log(notas)
console.log(notasConvertidas)

// Um array também pode ser criado como um objeto
console.clear()
let alunosEM2 = new Array("Tony", "Peter", "Thor", "Natasha")
console.log(alunosEM2)
console.table(alunosEM2)
alunosEM2.push("Steve")
console.log(alunosEM2)
console.table(alunosEM2)

// Estrutura de dados
let alunosEM3 = [
    {
        nome: "Bruce",
        idade: 43,
        bolsista: false
    },
    {
        nome: "Clark",
        idade: 45,
        bolsista: false
    },
    {
        nome: "Diana",
        idade: 36,
        bolsista: false
    },
    {
        nome: "Barry",
        idade: 23,
        bolsista: true
    }
]
console.log(alunosEM3)
console.table(alunosEM3)

// Uso de filtros
console.log(alunosEM3.filter((b) => {
    return b.bolsista === true
}))

console.log(alunosEM3.filter((i) => {
    return i.idade > 40
}))

// Ordenar dados
alunosEM3.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosEM3)

alunosEM3.sort((x, y) => {
    return (x.idade - y.idade)
})
console.table(alunosEM3)

// Dica: Criar uma cópia do array original para exibição
let alunosOrdenados = [...alunosEM3]
alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.clear()
console.table(alunosOrdenados)

//Reduzindo um array 
let somaIdades = alunosEM3.reduce((ac, aluno) => {
    return ac + aluno.idade
}, 0)
console.log(somaIdades)
console.log(`Media: ${somaIdades / alunosEM3.length}`)