abstract class TaskManager {
    protected tasks: { task: string }[];

    constructor() {
        this.tasks = [];
    }

    public abstract addTask(task: string): void;
    public abstract listTasks(): string[];
}

class Project extends TaskManager {
    public addTask(task: string): void {
        if (!this.tasks.some(t => t.task === task)) {
            this.tasks.push({ task });
        }
    }

    public listTasks(): string[] {
        return this.tasks.map(t => t.task);
    }
}

class DailyTasks extends TaskManager {
    public addTask(task: string): void {
        if (!this.tasks.some(t => t.task === task)) {
            this.tasks.push({ task });
        }
    }

    public listTasks(): string[] {
        return this.tasks.map(t => t.task);
    }
}

const project = new Project();
project.addTask("Desenvolver a interface do usuário");
project.addTask("Configurar o banco de dados");
project.addTask("Desenvolver a interface do usuário");

const dailyTasks = new DailyTasks();
dailyTasks.addTask("Tomar café");
dailyTasks.addTask("Reunião com a equipe");
dailyTasks.addTask("Tomar café");

console.log("Tarefas do Projeto:", project.listTasks());
console.log("Tarefas Diárias:", dailyTasks.listTasks());