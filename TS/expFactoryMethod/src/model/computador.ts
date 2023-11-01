import { iProduto } from './iProduto';

export abstract class Computador implements iProduto {
    private CPU: number;
    private Memoria: number;
    private Armazenamento: number;
    private Tipo: string;
    protected preco: number;

    constructor(CPU: number, Memoria: number, Armazenamento: number, Tipo: string, preco: number) {
        this.CPU = CPU;
        this.Memoria = Memoria;
        this.Armazenamento = Armazenamento;
        this.Tipo = Tipo;
        this.preco = preco;
    }

    getCPU(): number {
        return this.CPU;
    }

    getMemoria(): number {
        return this.Memoria;
    }

    getArmazenamento(): number {
        return this.Armazenamento;
    }

    getTipo(): string {
        return this.Tipo;
    }

    getPreco(): number {
        return this.preco;
    }

    toString(): string {
        return `Computador: CPU: ${this.CPU} GHz, Memória: ${this.Memoria} GB, Armazenamento: ${this.Armazenamento} GB, Tipo: ${this.Tipo}, Preço: R$ ${this.preco}`;
    }
}