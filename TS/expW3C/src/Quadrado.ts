import { iRetangular } from "./iRetangular";

export class Quadrado implements iRetangular {
  altura: number;
  largura: number;

  constructor(lado: number) {
    this.altura = lado;
    this.largura = lado;
  }

  area(): number {
    return this.altura * this.largura;
  }

  perimetro(): number {
    return 2 * (this.altura + this.largura);
  }
}
