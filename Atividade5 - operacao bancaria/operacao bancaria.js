/* Crie um código com um objeto chamado "Banco". Ele deverá ter propriedades que incluem
conta, saldo, tipo de conta e agência e os seus métodos devem ser. buscar saldo, depósito,
saque, e número de conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final 
do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do 
objeto;
- o número da conta deve retornar o número da conta.
*/

const Banco = {
    conta: "154316",
    saldo: 5000,
    tipoDeConta: "corrente",
    agencia: "001",
    buscarSaldo: function() {
        return this.saldo;
    },
    deposito: function(valor) {
        this.saldo += valor;
        return `Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`;
    },
    saque: function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return `Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`;
        } else {
            return `Saldo insuficiente. Saldo atual: R$${this.saldo}`;
        }
    },
    numeroConta: function() {
        return this.conta;
    }
};

console.log(`Saldo atual: R$${Banco.buscarSaldo()}`);
console.log(Banco.deposito(1200));
console.log(Banco.saque(200));
console.log(`Número da conta: ${Banco.numeroConta()}`);




