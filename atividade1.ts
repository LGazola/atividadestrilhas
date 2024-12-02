class ContaBancaria {
    private titular: string;
    private saldo: number;

    constructor(titular: string, saldo: number = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$${this.saldo.toFixed(2)}`);
        } else {
            console.log('O valor do depósito deve ser maior que zero.');
        }
    }

    public sacar(valor: number): void {
        if (valor > 0) {
            if (valor <= this.saldo) {
                this.saldo -= valor;
                console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$${this.saldo.toFixed(2)}`);
            } else {
                console.log('Saldo insuficiente para realizar o saque.');
            }
        } else {
            console.log('O valor do saque deve ser maior que zero.');
        }
    }

    public consultarSaldo(): void {
        console.log(`Saldo atual de ${this.titular}: R$${this.saldo.toFixed(2)}`);
    }
}


const conta = new ContaBancaria('João Silva');
conta.consultarSaldo();
conta.depositar(100);
conta.sacar(50);
conta.consultarSaldo();
conta.sacar(100);