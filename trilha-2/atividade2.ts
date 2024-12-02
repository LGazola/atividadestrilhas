abstract class FiguraGeometrica {
   
    abstract calcularArea(): number;
}


class Circulo extends FiguraGeometrica {
    private raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    public calcularArea(): number {
        return Math.PI * Math.pow(this.raio, 2); 
    }
}


class Quadrado extends FiguraGeometrica {
    private lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    public calcularArea(): number {
        return Math.pow(this.lado, 2); 
    }
}

class Triangulo extends FiguraGeometrica {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }

    public calcularArea(): number {
        return (this.base * this.altura) / 2; 
    }
}


function imprimirAreas(figuras: FiguraGeometrica[]): void {
    figuras.forEach((figura, index) => {
        console.log(`Área da figura ${index + 1}: ${figura.calcularArea().toFixed(2)}`);
    });
}


const figuras: FiguraGeometrica[] = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(3, 6)
];

imprimirAreas(figuras);