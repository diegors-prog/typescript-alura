import { Negociacao } from './negociacao.js';

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }

  /*
  lista(): Array<Negociacao> {
    return [...this.negociacoes];
  }
  */
}
