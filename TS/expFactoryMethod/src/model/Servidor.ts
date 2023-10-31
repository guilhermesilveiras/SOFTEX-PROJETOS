import { Computador } from './computador';

export class Servidor extends Computador {
    private sistemaRAID : string;
    private so : string;

    constructor (CPU: number, Memoria: number, Armazenamento: number, Tipo: string, preco: number, sistemaRAID?: string, so?: string) {
        super(CPU, Memoria, Armazenamento, Tipo, preco);
        this.sistemaRAID = (sistemaRAID || "RAID O");
        this.so = (so || "CentOS");
    }
}