abstract class FavoriteManager {
    protected favorites: string[];

    constructor() {
        this.favorites = [];
    }

    public abstract addFavorite(item: string): void;
    public abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    public addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
            this.favorites.sort();
        }
    }

    public getFavorites(): string[] {
        return this.favorites;
    }
}

class BooksFavoriteManager extends FavoriteManager {
    public addFavorite(item: string): void {
        this.favorites.unshift(item);
    }

    public getFavorites(): string[] {
        return this.favorites;
    }
}


const moviesManager = new MoviesFavoriteManager();
moviesManager.addFavorite("Inception");
moviesManager.addFavorite("The Matrix");
moviesManager.addFavorite("Interstellar");
moviesManager.addFavorite("Inception");
console.log("Filmes Favoritos:", moviesManager.getFavorites());

const booksManager = new BooksFavoriteManager();
booksManager.addFavorite("1984");
booksManager.addFavorite("O Senhor dos Anéis");
booksManager.addFavorite("Dom Casmurro");
console.log("Livros Favoritos:", booksManager.getFavorites());