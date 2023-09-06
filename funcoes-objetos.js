

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo : 200,
    efetuaPagamento : function (valor) {
        if (valor > this.saldo) {
            console.log('saldo Insuficiente')
        }
        else {
            this.saldo -= valor
            console.log(`Pagamento bem sucessido, novo saldo : ${this.saldo} `)
        }
    }
 };

cliente.efetuaPagamento (25)