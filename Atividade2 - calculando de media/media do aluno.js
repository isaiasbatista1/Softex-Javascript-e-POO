/*A atividade que faremos é a da "calculadora media". Para isso, você deve criar um programa Javascript que calcule a média de três notas inseridas pelo usuário e exiba o resultado no console.

Primeiro, solicite que o usuário insira três notas(entre 0 e 10) usando a função prompt().Elas devem ser armazenadas em variáveis adequadas, por exemplo, nota1, nota2 e nota3, com o tipo de dado Number.
Depois, some-as e divida por três. O resultado deste cálculo será o valor da média, que deve ser arma
zenado em uma variável chamada media. Por fim, exiba esse valor no console usando a função console.log().
*/ 

let nota1 = parseFloat(prompt("Digite a primeira nota(valor entre 0 e 10) :  "))
let nota2 = parseFloat(prompt("Digite a segunda nota(valor entre 0 e 10) :  "))
let nota3 = parseFloat(prompt("Digite a terceira nota(valor entre 0 e 10) :  "))


if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) && nota1 >= 0 && nota1 <=10 && nota2 >=0 && nota2 <=10 && nota3 >=0 && nota3 <=10 ){
    const media = (nota1 + nota2 + nota3) / 3
    console.log("A média do aluno é"  +media.toFixed(2))
}else{
    console.log("Insira valores entre 0 e 10 para poder realizar a operação.")
}