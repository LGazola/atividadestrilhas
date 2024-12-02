class Carrinho {
    private itens: { nome: string; preco: number }[];

    constructor() {
        this.itens = [];
    }

    public adicionarItem(nome: string, preco: number): void {
        this.itens.push({ nome, preco });
    }

    public calcularPrecoTotal(): number {
        return this.itens.reduce((total, item) => total + item.preco, 0);
    }

    public obterItens(): { nome: string; preco: number }[] {
        return this.itens;
    }
}

class Pagamento {
    private status: string;

    constructor() {
        this.status = "Pendente";
    }

    public processarPagamento(): void {
        this.status = "Pago";
    }

    public obterStatus(): string {
        return this.status;
    }
}

class Envio {
    private status: string;

    constructor() {
        this.status = "Não Enviado";
    }

    public atualizarStatus(status: string): void {
        this.status = status;
    }

    public obterStatus(): string {
        return this.status;
    }
}

class Pedido {
    private carrinho: Carrinho;
    private pagamento: Pagamento;
    private envio: Envio;

    constructor() {
        this.carrinho = new Carrinho();
        this.pagamento = new Pagamento();
        this.envio = new Envio();
    }

    public adicionarItem(nome: string, preco: number): void {
        this.carrinho.adicionarItem(nome, preco);
    }

    public processarPagamento(): void {
        this.pagamento.processarPagamento();
    }

    public atualizarStatusEnvio(status: string): void {
        this.envio.atualizarStatus(status);
    }

    public obterResumoPedido(): object {
        return {
            itens: this.carrinho.obterItens(),
            precoTotal: this.carrinho.calcularPrecoTotal(),
            statusPagamento: this.pagamento.obterStatus(),
            statusEnvio: this.envio.obterStatus(),
        };
    }
}

// Exemplo de uso
const pedido = new Pedido();
pedido.adicionarItem("Item 1", 100);
pedido.adicionarItem("Item 2", 50);
pedido.processarPagamento();
pedido.atualizarStatusEnvio("Enviado");

console.log(pedido.obterResumoPedido());