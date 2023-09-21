import { Transacao } from "./transacao.js";
import { TIPOTRANSACAO } from "./tipoTransacao.js";

export class Conta{
    constructor(agencia, saldo){
        this.agencia = agencia;
        this.saldo = saldo;
        this.transacoes = [];
    }

    depositar(valor){
        this.saldo += valor;
        let trans = new Transacao(TIPOTRANSACAO.deposito, valor, '+');
        this.transacoes.push(trans);
    }
    
    sacar(valor){
        if (this.saldo>=valor) {
            this.saldo -= valor;
            let trans = new Transacao(TIPOTRANSACAO.saque, valor, '-');
            this.transacoes.push(trans);  
        } else {
            console.log('Saldo insuficiente')
        }
    }

    getSaldo(){
        return this.saldo;
    }
}
