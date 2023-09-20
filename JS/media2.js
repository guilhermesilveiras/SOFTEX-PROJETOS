
// código 1

var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));

var media = (nota1 + nota2 + nota3) / 3;

// média estabelecida = 7
var situacao = media < 7 ? "reprovado" : "aprovado";

console.log("O aluno está", situacao, "com média", media.toFixed(2));

// código 2

var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));

var mediaAtual = (nota1 + nota2) / 2;
var notaMinima = (7 * 3) - (nota1 + nota2);

console.log("Para passar com média sete, você precisa tirar no mínimo:", notaMinima.toFixed(2));

// pequeno teste de githubdesktop
