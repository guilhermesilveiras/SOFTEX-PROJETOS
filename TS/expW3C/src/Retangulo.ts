import { iRetangular } from "./iRetangular";

export class Retangulo implements iRetangular {
  altura: number;
  largura: number;

  constructor(altura: number, largura: number) {
    this.altura = altura;
    this.largura = largura;
  }

  area(): number {
    return this.altura * this.largura;
  }

  perimetro(): number {
    return 2 * (this.altura + this.largura);
  }
}
