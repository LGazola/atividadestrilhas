
interface Documento {
    titulo: string;   
    conteudo: string; 
}


class Texto implements Documento {
    titulo: string;   
    conteudo: string; 


    constructor(titulo: string, conteudo: string) {
        this.titulo = titulo;      
        this.conteudo = conteudo;  
    }

    
    public exibir(): string {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}


const documento1 = new Texto("Meu Primeiro Documento", "Este é o conteúdo do meu primeiro documento.");
const documento2 = new Texto("Segundo Documento", "Aqui está o conteúdo do segundo documento.");

console.log(documento1.exibir());
console.log(documento2.exibir());