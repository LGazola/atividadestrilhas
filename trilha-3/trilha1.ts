
interface Produto {
    id: number;      
    nome: string;    
    preco: number;   
}


class ItemLoja {
    id: number;      
    nome: string;    
    preco: number;   

   
    constructor(id: number, nome: string, preco: number) {
        this.id = id;          
        this.nome = nome;      
        this.preco = preco;    
    }
    public calcularValorTotalEmEstoque(): number {
        throw new Error("Method not implemented.");
    }
    public consultarInformacoes(): void {
        throw new Error("Method not implemented.");
    }
}

const item1 = new ItemLoja(1, "Camiseta", 29.99);
const item2 = new ItemLoja(2, "Calça", 59.99);

console.log(item1);
console.log(item2);