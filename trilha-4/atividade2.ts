abstract class Inventory {
    protected items: Record<string, number>;

    constructor() {
        this.items = {};
    }

    public abstract addItem(item: string, quantity: number): void;
    public abstract removeItem(item: string): void;
    public abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    public addItem(item: string, quantity: number): void {
        if (this.items[item]) {
            this.items[item] += quantity;
        } else {
            this.items[item] = quantity;
        }
    }

    public removeItem(item: string): void {
        if (this.items[item]) {
            delete this.items[item];
        } else {
            console.log(`Item ${item} não encontrado no inventário.`);
        }
    }

    public getInventory(): Record<string, number> {
        return this.items;
    }
}

class StoreInventory extends Inventory {
    private readonly maxQuantityPerItem: number = 10;

    public addItem(item: string, quantity: number): void {
        if (this.items[item]) {
            const newQuantity = this.items[item] + quantity;
            if (newQuantity <= this.maxQuantityPerItem) {
                this.items[item] = newQuantity;
            } else {
                console.log(`Não é possível adicionar ${quantity} unidades do item ${item}. Limite máximo é ${this.maxQuantityPerItem}.`);
            }
        } else {
            if (quantity <= this.maxQuantityPerItem) {
                this.items[item] = quantity;
            } else {
                console.log(`Não é possível adicionar ${quantity} unidades do item ${item}. Limite máximo é ${this.maxQuantityPerItem}.`);
            }
        }
    }

    public removeItem(item: string): void {
        if (this.items[item]) {
            delete this.items[item];
        } else {
            console.log(`Item ${item} não encontrado no inventário.`);
        }
    }

    public getInventory(): Record<string, number> {
        return this.items;
    }
}

// Exemplo de uso
const warehouse = new WarehouseInventory();
warehouse.addItem("Produto A", 50);
warehouse.addItem("Produto B", 30);
warehouse.addItem("Produto A", 20);
console.log("Inventário do Armazém:", warehouse.getInventory());

const store = new StoreInventory();
store.addItem("Produto X", 5);
store.addItem("Produto Y", 10);
store.addItem("Produto X", 6); // Tentativa de adicionar além do limite
store.addItem("Produto Z", 10);
console.log("Inventário da Loja:", store.getInventory());
store.removeItem("Produto X");
console.log("Inventário da Loja após remover Produto X:", store.getInventory());