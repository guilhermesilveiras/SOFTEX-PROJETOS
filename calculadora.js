
var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
var valor2 = parseFloat(prompt("Digite o segundo valor:"));

var operador = prompt("Escolha o operador (+, -, *, /):");

var resultado;
var sobra;

if (operador === "+") {
  resultado = valor1 + valor2;
} else if (operador === "-") {
  resultado = valor1 - valor2;
} else if (operador === "*") {
  resultado = valor1 * valor2;
} else if (operador === "/") {
  resultado = Math.floor(valor1 / valor2);
  sobra = valor1 % valor2; // calcular o resto da divisão
} else {
  console.log("Operador inválido");
}

if (operador !== "/") {
  console.log("Resultado:", resultado);
} else {
  console.log("Resultado da divisão:", resultado);
  console.log("Resto da divisão:", sobra);
}
