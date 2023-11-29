interface Operacao {
    execute(num1: number, num2: number): number;
  }
  
  class Soma implements Operacao {
    execute(num1: number, num2: number): number {
      return num1 + num2;
    }
  }
  
  class Subtracao implements Operacao {
    execute(num1: number, num2: number): number {
      return num1 - num2;
    }
  }
  
  class Multiplicacao implements Operacao {
    execute(num1: number, num2: number): number {
      return num1 * num2;
    }
  }
  
  class Calculadora {
    private estrategia: Operacao | null = null;
  
    setEstrategia(estrategia: Operacao): void {
      this.estrategia = estrategia;
    }
  
    executarOperacao(num1: number, num2: number): number {
      if (!this.estrategia) {
        throw new Error("Estratégia não definida.");
      }
  
      return this.estrategia.execute(num1, num2);
    }
  }
  
  const calculadora = new Calculadora();
  
  const num1 = parseFloat(prompt("Digite o primeiro número: ") || "0");
  const num2 = parseFloat(prompt("Digite o segundo número: ") || "0");
  const operacao = prompt("Digite a operação (+ para soma, - para subtração, * para multiplicação): ");
  
  switch (operacao) {
    case "+":
      calculadora.setEstrategia(new Soma());
      break;
    case "-":
      calculadora.setEstrategia(new Subtracao());
      break;
    case "*":
      calculadora.setEstrategia(new Multiplicacao());
      break;
    default:
      console.log("Operação inválida.");
      process.exit(1);
  }
  
  const resultado = calculadora.executarOperacao(num1, num2);
  console.log(`Resultado da operação: ${resultado}`);
  