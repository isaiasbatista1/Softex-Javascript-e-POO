/*Crie um programa que contenha os seguintes tipos de funções:
1. Uma função tradicional com a palavra reservada "Function e sem nenhum parâmetro;
2. Uma função tradicional com parâmetro e um retorno de valor;
3. Um arrow function com parâmetro e que retorne um valor.

Crie um programa que utilize essas trêse funções de forma lógica, por exemplo: um programa de calculadora:*/

function boasVindas(){
    //console.log("Bem vindo, caro Cliente")
}

function cadastrarCliente(nome,email,telefone){
    const cliente = {
        nome:nome,
        email:email,
        telefone:telefone
    };
    return cliente;
}

const exibirDetalhesdoCliente = (cliente) => {
    console.log("Detalhe do cliente: ")
    console.log("Nome:", cliente.nome)
    console.log("Email:", cliente.email)
    console.log("Telefone:", cliente.telefone)
}

boasVindas()    

const nomeCliente = prompt("Digite o seu nome: ")
const emailCliente = prompt("Digite o seu email: ")
const telefoneCliente = prompt("Digite o seu telefone: ")

const clienteCadastrado = cadastrarCliente(nomeCliente, emailCliente, telefoneCliente)

exibirDetalhesdoCliente(clienteCadastrado);


