function Veiculo(modelo, marca, cor, numeroRodas) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numeroRodas = numeroRodas;
  }
  
  Veiculo.prototype.clone = function () {
    const constructor = this.constructor;
    return new constructor(this.modelo, this.marca, this.cor, this.numeroRodas);
  };
  
  Veiculo.prototype.represent = function () {
    return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}`;
  };
  
  //criação da subclasse carro
  function Carro(modelo, marca, cor, numeroRodas, numeroPortas) {
    Veiculo.call(this, modelo, marca, cor, numeroRodas);
    this.numeroPortas = numeroPortas;
  }
  
  Carro.prototype = Object.create(Veiculo.prototype);
  Carro.prototype.constructor = Carro;
  
  Carro.prototype.represent = function () {
    return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}, Número de Portas: ${this.numeroPortas}`;
  };
  
  //criação da subclasse moto
  function Moto(modelo, marca, cor, numeroRodas, cilindradas) {
    Veiculo.call(this, modelo, marca, cor, numeroRodas);
    this.cilindradas = cilindradas;
  }
  
  Moto.prototype = Object.create(Veiculo.prototype);
  Moto.prototype.constructor = Moto;
  
  Moto.prototype.represent = function () {
    return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}, Cilindradas: ${this.cilindradas}`;
  };
  
  function Aplicacao() {
    this.veiculos = [];
    this.veiculos.push(new Carro('Carro1', 'Marca1', 'Vermelho', 4, 4));
    this.veiculos.push(new Carro('Carro2', 'Marca2', 'Azul', 4, 2));
    this.veiculos.push(new Moto('Moto1', 'Marca3', 'Preto', 2, '500cc'));
    this.veiculos.push(new Carro('Carro3', 'Marca4', 'Branco', 4, 4));
    this.veiculos.push(new Moto('Moto2', 'Marca5', 'Amarelo', 2, '250cc'));
    this.veiculos.push(new Carro('Carro4', 'Marca6', 'Prata', 4, 2));
  }
  
  Aplicacao.prototype.clonarVeiculos = function () {
    const clones = [];
    for (const veiculo of this.veiculos) {
      clones.push(veiculo.clone());
    }
    return clones;
  };
  
  Aplicacao.prototype.imprimirRepresentacaoClones = function () {
    const clones = this.clonarVeiculos();
    for (const clone of clones) {
      console.log(clone.represent());
    }
  };
  
  const aplicacao = new Aplicacao();
  aplicacao.imprimirRepresentacaoClones();
  
  
  
  
  
  
  