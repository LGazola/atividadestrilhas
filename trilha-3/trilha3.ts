interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    private produtos: ProdutoLoja[];

    constructor() {
        this.produtos = [];
    }

    public adicionarProduto(produto: ProdutoLoja): void {
        this.produtos.push(produto);
    }

    public buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}

const loja = new Loja();
loja.adicionarProduto({ codigo: 1, nome: "Camiseta" });
loja.adicionarProduto({ codigo: 2, nome: "Calça" });
loja.adicionarProduto({ codigo: 3, nome: "Tênis" });

const produtoEncontrado = loja.buscarProdutoPorCodigo(2);
const produtoNaoEncontrado = loja.buscarProdutoPorCodigo(4);

console.log(produtoEncontrado);
console.log(produtoNaoEncontrado);