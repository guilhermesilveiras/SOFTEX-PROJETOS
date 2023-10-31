import { Computador } from './computador';
import { Servidor } from './Servidor';
import { PC } from './PC';

export abstract class FabricaComp{
    static criarComputador(CPU: number, Memoria: number, Armazenamento: number, Tipo: string, preco: number, monitor?: string, sistemaRAID?: string, so?: string): Computador {
        if (Tipo.toLowerCase() == "servidor"){
            return new Servidor(CPU, Memoria, Armazenamento, Tipo, preco, sistemaRAID, so);
        } else if (Tipo.toLowerCase() == "pc"){
            return new PC(CPU, Memoria, Armazenamento, Tipo, preco, monitor);
        } else {
            return null;
        }
    }