// Classe base Veiculo
class Veiculo {
    public mover(): void {
        console.log("O veículo está se movendo");
    }
}


class Carro extends Veiculo {
    public mover(): void {
        console.log("O carro está dirigindo");
    }
}


class Bicicleta extends Veiculo {
    public mover(): void {
        console.log("A bicicleta está pedalando");
    }
}


const meuCarro = new Carro();
meuCarro.mover(); 

const minhaBicicleta = new Bicicleta();
minhaBicicleta.mover(); 