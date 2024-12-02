
abstract class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    
    abstract calcularBonus(): number;

    
    public calcularSalarioComBonus(): number {
        return this.salario + this.calcularBonus();
    }

    
    public exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Salário: R$ ${this.salario.toFixed(2)}`);
        console.log(`Bônus: R$ ${this.calcularBonus().toFixed(2)}`);
        console.log(`Salário Final: R$ ${this.calcularSalarioComBonus().toFixed(2)}`);
        console.log('-----------------------');
    }
}


class Gerente extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    
    public calcularBonus(): number {
        return this.salario * 0.10; 
    }
}


class Operario extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    
    public calcularBonus(): number {
        return this.salario * 0.05; 
    }
}


function calcularSalariosComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach((funcionario, index) => {
        console.log(`Funcionário ${index + 1}:`);
        funcionario.exibirInformacoes();
    });
}


const funcionarios: Funcionario[] = [
    new Gerente("Alice", 5000),
    new Operario("Bob", 3000),
    new Gerente("Carol", 7000),
    new Operario("David", 2500)
];

calcularSalariosComBonus(funcionarios);