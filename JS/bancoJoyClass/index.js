import { Conta } from "./conta.js";
import { Cliente } from "./cliente";

let cliGuilherme = new Cliente('Guilherme Silveira')
let contaGuilherme = new Conta(1711, 2000);

contaGuilherme.depositar(200);
contaGuilherme.sacar(800);

console.log(contaGuilherme);