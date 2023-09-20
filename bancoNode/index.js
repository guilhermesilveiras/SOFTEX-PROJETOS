import { Agencia } from "./model/agencia.js";
import { Cliente } from "./model/cliente.js";
import { Conta } from "./model/conta.js";
import { Endereco } from "./model/endereco.js";

//criando uma agencia
let endAg = new Endereco('PE', 'Recife', 'São José', 'Rua da Guia', 1000, 305, '40050-030');
let agencia = new Agencia('Softex', 1234, '813227777', 'agsoftex@banconode.com', endAg);
let endCli = new Endereco('PE', 'Recife', 'Cordeiro', 'Rua Rio Jiquiá', 88, null, '50721-030');
let cliEgito = new Cliente('José Egito', '111.222.333-00', new Date('2014-10-10').toLocaleString(), '4455558', 'egito@softex.com', '819999999', endCli)
let contaEgito = new Conta(cliEgito, 765432, agencia, 1378.50);

contaEgito.depositar(300);
contaEgito.sacar(500);

console.log(contaEgito);