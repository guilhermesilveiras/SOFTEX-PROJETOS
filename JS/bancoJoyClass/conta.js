import { Transacao } from "/.transacao.js";
import { TIPOTRANSACAO } from "./tipoTransacao.js";

export class Conta{
    constructor(agencia, saldo){
        this.agencia = agencia;
        this.saldo = saldo;
        this.transacoes = [];
    }
}

//depositando valor na conta

depositar(valor)