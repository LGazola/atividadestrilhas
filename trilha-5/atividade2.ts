class EmailNotification {
    public send(email: string, message: string): void {
        console.log(`Notificação enviada para ${email}: ${message}`);
    }
}

class UserManager {
    private users: { name: string; email: string }[];
    private emailNotification: EmailNotification;

    constructor(emailNotification: EmailNotification) {
        this.users = [];
        this.emailNotification = emailNotification;
    }

    public createUser (name: string, email: string): void {
        this.users.push({ name, email });
        this.sendNotification(email);
    }

    private sendNotification(email: string): void {
        const message = "Bem-vindo ao nosso sistema!";
        this.emailNotification.send(email, message);
    }

    public getUsers(): { name: string; email: string }[] {
        return this.users;
    }
}

// Exemplo de uso
const emailNotification = new EmailNotification();
const userManager = new UserManager(emailNotification);
userManager.createUser ("Alice", "alice@example.com");
userManager.createUser ("Bob", "bob@example.com");

console.log(userManager.getUsers());