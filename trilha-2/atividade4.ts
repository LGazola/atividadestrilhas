abstract class Animal {
    private energia: number;

    constructor() {
        this.energia = 100; 
    }

    
    public comer(quantidade: number): void {
        this.energia += quantidade;
        console.log(`${this.constructor.name} comeu e ganhou ${quantidade} de energia.`);
    }

   
    public statusEnergia(): void {
        console.log(`${this.constructor.name} tem ${this.energia.toFixed(2)} de energia.`);
    }
}

// Subclasse Leao
class Leao extends Animal {
    public caçar(): void {
        console.log("Leão está caçando...");
        
        this.comer(-30); 
        
        this.comer(50); 
    }
}


class Passaro extends Animal {
    public voar(): void {
        console.log("Pássaro está voando...");
        
        this.comer(-10); 
    }
}


function interagirComAnimais(animais: Animal[]): void {
    animais.forEach((animal, index) => {
        console.log(`Interagindo com o animal ${index + 1}:`);
        animal.statusEnergia();
        
        if (animal instanceof Leao) {
            animal.caçar();
        } else if (animal instanceof Passaro) {
            animal.voar();
        }
        
        animal.statusEnergia();
        console.log('-----------------------');
    });
}


const animais: Animal[] = [
    new Leao(),
    new Passaro()
];

interagirComAnimais(animais);