export class Negociacoes {
    constructor() {
        this.negociacoes = [];
        /*
        lista(): Array<Negociacao> {
          return [...this.negociacoes];
        }
        */
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
