/*Utilizando a linguagem Javascript, crie uma situação matemática na qual os números precisam ser informados pelo usuário. Além disso, deve ocorrer uma exceção dentro do código. Utilize os métodos
try(),catch() e finally() para realizar a captura do tratamento dessa exceção.*/


let n1 = parseInt(prompt("Digite o primeiro número: "))
let n2 = parseInt(prompt("Digite o segundo número: "))


try{
    let resultado = parseInt(n1) / parseInt(n2)

    if (isNaN(resultado) || !isFinite(resultado)){
        throw new Error("Divisão por zero não é permitida! ")
    }

    console.log(`Resultado da divisão ${resultado}`)
}catch (error){
    console.error(`Erro: ${error.message}`)
}finally{
    console.log("Operação finalizada")
}

