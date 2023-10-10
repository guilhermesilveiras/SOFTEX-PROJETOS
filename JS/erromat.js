try {
    let numero1 = prompt("Digite o primeiro número:");
    let numero2 = prompt("Digite o segundo número:");
  
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
  
    if (isNaN(numero1) || isNaN(numero2)) {
      throw new Error("Pelo menos um dos valores inseridos não é um número.");
    }
  
    let resultado = numero1 + numero2;

    console.log("Resultado da operação: " + resultado);
  } catch (erro) {
    console.error("Ocorreu um erro: " + erro.message);
  } finally {
    console.log("Fim da operação.");
  }


  