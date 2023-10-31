import { Computador } from './computador';

export class PC extends Computador {
    private monitor : string;
    
    constructor (CPU: number, Memoria: number, Armazenamento: number, Tipo: string, preco: number, monitor?: string) {
        super(CPU, Memoria, Armazenamento, Tipo, preco);
        this.monitor = (monitor || "LCD");
    }
}