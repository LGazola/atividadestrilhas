
abstract class Pagamento {
    abstract processar(): void; 
}

class PagamentoCartao extends Pagamento {
    private numeroCartao: string;

    constructor(numeroCartao: string) {
        super();
        this.numeroCartao = numeroCartao;
    }

    
    private validarCartao(): boolean {
        
        return this.numeroCartao.length === 16 && !isNaN(Number(this.numeroCartao));
    }

    
    public processar(): void {
        if (this.validarCartao()) {
            console.log(`Pagamento com cartão ${this.numeroCartao} processado com sucesso.`);
        } else {
            console.log(`Número do cartão ${this.numeroCartao} inválido.`);
        }
    }
}


class PagamentoBoleto extends Pagamento {
    private valor: number;

    constructor(valor: number) {
        super();
        this.valor = valor;
    }

    
    private gerarCodigoBoleto(): string {
      
        return `BOL-${Math.floor(Math.random() * 1000000)}`;
    }

    
    public processar(): void {
        const codigoBoleto = this.gerarCodigoBoleto();
        console.log(`Boleto gerado com código: ${codigoBoleto} para o valor de R$ ${this.valor.toFixed(2)}.`);
    }
}


function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach((pagamento, index) => {
        console.log(`Processando pagamento ${index + 1}:`);
        pagamento.processar();
    });
}


const pagamentos: Pagamento[] = [
    new PagamentoCartao("1234567812345678"), 
    new PagamentoCartao("12345678"), 
    new PagamentoBoleto(150.75)
];

processarPagamentos(pagamentos);