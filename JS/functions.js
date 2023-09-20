function menu() {
    console.log("Escolha uma operação:");
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
}

function calcular(operacao, num1, num2) {
    switch (operacao) {
        case 1:
            return num1 + num2;
        case 2:
            return num1 - num2;
        case 3:
            return num1 * num2;
        case 4:
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Divisão por zero não é possível.";
            }
        default:
            return "Operação inválida.";
    }
}

const calcularPorcentagem = (num, porcentagem) => num * (porcentagem / 100).toFixed(2); //arrow function

// programa principal
menu();

const operacao = parseInt(prompt("Digite o número da operação desejada:"));
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

if (isNaN(operacao) || isNaN(numero1) || isNaN(numero2)) {
    console.log("Entrada inválida. Certifique-se de inserir números válidos.");
} else {
    let resultado;

    if (operacao >= 1 && operacao <= 4) {
        resultado = calcular(operacao, numero1, numero2);
        console.log("Resultado:", resultado);
    } else {
        console.log("Operação inválida.");
    }

    let porcentagem = parseFloat(prompt("Digite a porcentagem a ser calculada:"));
    if (!isNaN(porcentagem)) {
        const resultadoPorcentagem = calcularPorcentagem(resultado, porcentagem);
        console.log(`${porcentagem}% de ${resultado} é igual a ${resultadoPorcentagem}`);
    }
}
