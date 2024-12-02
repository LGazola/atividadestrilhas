class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public calcularValorTotalEmEstoque(): number {
        return this.preco * this.quantidade;
    }

    public consultarInformacoes(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$${this.preco.toFixed(2)}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log(`Valor total em estoque: R$${this.calcularValorTotalEmEstoque().toFixed(2)}`);
    }
}


const produto1 = new Produto('Camiseta', 29.90, 10);
produto1.consultarInformacoes();