interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    private livros: Livro[];

    constructor() {
        this.livros = [];
    }

    public adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    public buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", disponivel: true });
biblioteca.adicionarLivro({ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: false });
biblioteca.adicionarLivro({ titulo: "A Revolução dos Bichos", autor: "George Orwell", disponivel: true });

const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();

console.log(livrosDisponiveis);