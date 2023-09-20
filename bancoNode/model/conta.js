import { Transacao } from "./transacao.js";
import { TIPOTRANS } from "./tipoTransacao.js";

export class Conta{
    constructor(cliente, numero, agencia, saldo){
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.dataCriacao = Date.now();
        this.saldo = saldo;
        this.status = true;
        this.transacoes = [];
    }

    //depositar na conta
    depositar(valor){
        this.saldo += valor;
        let trans = new Transacao(TIPOTRANS.deposito, new Date().toLocaleDateString(), valor, null, '+');
        this.transacoes.push(trans);
    }

    //sacar na conta
    sacar(valor){
        if (this.saldo>=valor) {
            this.saldo -= valor;
            let trans = new Transacao(TIPOTRANS.debito, new Date().toLocaleDateString(), valor, null, '-');
            this.transacoes.push(trans);
        } else {
            //lançar um erro
            console.log('Erro: saldo insuficiente' , valor + 'maior que o saldo' + this.saldo + '-'); 
            
        }
    }

    //transferir da conta

    //pagamento da conta

    //saldo da conta

    //extrato da conta
}