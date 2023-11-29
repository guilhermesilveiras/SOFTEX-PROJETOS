import { SistemaSeguranca } from './sistemaseguranca';

let sistema = SistemaSeguranca.getInstance();
let senha: string = '123456';

if (sistema.acessarBaseSecreta(senha)) {
    console.log('Acesso concedido.');
} else {
    console.log('Acesso negado. Senha incorreta.');
}