// base do sanduíche
class Sanduiche {
    constructor() {
      this.descricao = "Sanduíche";
    }
  
    custo() {
      return 0;
    }
  }
  
  class FrangoAssado extends Sanduiche {
    constructor() {
      super();
      this.descricao = "Sanduíche de Frango Assado";
      this.custoBase = 4.5;
    }
  
    custo() {
      return this.custoBase;
    }
  }
  
  // uso do decorator para adicionar pepperoni
  class Pepperoni extends Sanduiche {
    constructor(sanduiche) {
      super();
      this.sanduiche = sanduiche;
    }
  
    custo() {
      return this.sanduiche.custo() + 0.99;
    }
  
    getDescricao() {
      return `${this.sanduiche.getDescricao()}, Pepperoni`;
    }
  }
  
  // uso do decorator para adicionar queijo mussarela ralado
  class QueijoMussarelaRalado extends Sanduiche {
    constructor(sanduiche) {
      super();
      this.sanduiche = sanduiche;
    }
  
    custo() {
      return this.sanduiche.custo() + 2.0;
    }
  
    getDescricao() {
      return `${this.sanduiche.getDescricao()}, Queijo Mussarela Ralado`;
    }
  }
  
  let meuSanduiche = new FrangoAssado();
  meuSanduiche = new Pepperoni(meuSanduiche);
  
  // adicionando queijo mussarela ralado
  meuSanduiche = new QueijoMussarelaRalado(meuSanduiche);
  
  // impressão no console
  console.log(`${meuSanduiche.getDescricao()} custa R$${meuSanduiche.custo().toFixed(2)}.`);
  