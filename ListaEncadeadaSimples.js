import { no } from "./no.js";

export class ListaEncadeada{
    var constructor(cabeca){
        this.cabeca = null
        this.contador = 0;
    }

    addNoComeco(conteudo) {
        let novoNo = new No(conteudo, null);
        if(this.cabeca != null){
            novoNo.proximo = this.cabeca;
            this.cabeca = novoNo
    
        }else {
            this.cabeca = novoNo;
        }

    }

    addNoFim(conteudo){
        let novoNo = new No(conteudo, null);
        if(this.cabeca === null) {
            this.caebeca = novoNo;
        } else{
            let aux = this.cabeca;
            while(aux.proximo !== null){
                aux = aux.proximo;
            }
            aux.proximo = novoNo;
        }
        this.contador ++;
    }

    addNoEm(conteudo, indice){
        let novoNo = new No(conteudo, null);
        if(this.contador < indice){
            this.addNoFim(conteudo);
        } else{
            let noIndice;
            for (let i = 0; i <= indice; i++) {
                noIndice = this.cabeca.proximo;
            }
        }
    }

}