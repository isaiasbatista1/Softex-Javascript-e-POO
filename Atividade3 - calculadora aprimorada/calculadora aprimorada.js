/*Com os conceitos aprendidos, crie um programa de calculadora que:

-Receba dois valores, que devem ser salvos em variáveis;
-O usuário deve colocar qual operador ele vai utilizar por meio de símbolos aritméticos;
-Com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado;
-Se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma.
*/

const valor1 = parseFloat(prompt("Digite o primeiro valor"))
const valor2 = parseFloat(prompt("Digite o segundo valor: "))

const operador = prompt("Digite o operador (+, - , * , /")

let resultado;

switch(operador){
    case "+":
        resultado = valor1 + valor2
        break
    case "-":
        resultado = valor1 - valor2    
        break
    case "*":
        resultado = valor1 * valor2
        break
    case"/":
    if (valor2 !== 0) {
        resultado = valor1 / valor2
        const sobra = valor1 % valor2
        console.log(`O resultado é: ${resultado.toFixed(2)}`)
       console.log(`A sobra da divisão é ${sobra.toFixed(2)}`)
        
    }else {
        console.log("Não é possível realizar divisão por zero")
    }
    break
default:
    console.log("Este pperador é inválido")    
}

