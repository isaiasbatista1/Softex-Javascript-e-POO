//Crie um cadastro de pessoa com os seguintes dados. nome, idade, salário e se possui diploma. Antes de começar a codificação, identifique os tipos de cada variável. Em seguida, desenvolva o código utilizando exemplos para cada variável que respeitem os tipos identificados. Certifique-se de que os valores correspondam aos tipos de dados corretos.


class Cadastro{
    constructor(nome,salario,idade,temDiploma){
        this.nome = nome
        this.salario = salario
        this.idade = idade
        this.temDiploma = temDiploma
    }

    mostrarInformações(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Salário: R$ ${this.salario.toFixed(2)}`)
        console.log(`Idade: ${this.idade} anos`)
        console.log(`Tem Diploma: ${this.temDiploma ? 'Sim': 'Não'}`)
    }
}

const cadastro1 = new Cadastro("Marcos", 4000, 28, true)
const cadastro2 = new Cadastro("Maria", 3200, 26, false)

console.log("Cadstro 1: ")
cadastro1.mostrarInformações()

console.log("\nCadastro 2:")
cadastro2.mostrarInformações()