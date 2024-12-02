interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    private livros: LivroBiblioteca[];

    constructor() {
        this.livros = [];
    }

    public adicionarLivro(livro: LivroBiblioteca): void {
        this.livros.push(livro);
    }

    public filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero === genero);
    }

    public buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor === autor);
    }

    public obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const biblioteca = new BibliotecaGestao();
biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: true });
biblioteca.adicionarLivro({ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: false });
biblioteca.adicionarLivro({ titulo: "A Revolução dos Bichos", autor: "George Orwell", genero: "Fábula", disponivel: true });
biblioteca.adicionarLivro({ titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true });

const livrosDistopia = biblioteca.filtrarPorGenero("Distopia");
const livrosGeorgeOrwell = biblioteca.buscarPorAutor("George Orwell");
const livrosDisponiveisOrdenados = biblioteca.obterLivrosDisponiveisOrdenados();

console.log(livrosDistopia);
console.log(livrosGeorgeOrwell);
console.log(livrosDisponiveisOrdenados);