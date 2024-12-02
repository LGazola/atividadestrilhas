class Livro {
    private titulo: string;
    private autor: string;
    private paginas: number;
    private lido: boolean;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false; 
    }

    public marcarComoLido(): void {
        this.lido = true;
        console.log(`O livro "${this.titulo}" foi marcado como lido.`);
    }

    public consultarInformacoes(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Páginas: ${this.paginas}`);
        console.log(`Lido: ${this.lido ? 'Sim' : 'Não'}`);
    }
}


const livro1 = new Livro('1984', 'George Orwell', 328);
livro1.consultarInformacoes();
livro1.marcarComoLido();
livro1.consultarInformacoes();