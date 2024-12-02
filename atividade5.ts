class Agenda {
    private compromissos: string[]; 

    constructor() {
        this.compromissos = []; 
    }

   
    public adicionarCompromisso(compromisso: string): void {
        this.compromissos.push(compromisso);
        console.log(`Compromisso adicionado: "${compromisso}"`);
    }

  
    public listarCompromissos(): void {
        if (this.compromissos.length === 0) {
            console.log("Nenhum compromisso agendado.");
            return;
        }

        console.log("Compromissos agendados:");
        this.compromissos.forEach((compromisso, index) => {
            console.log(`${index + 1}: ${compromisso}`);
        });
    }
}


const agenda = new Agenda();
agenda.adicionarCompromisso("Reunião com o cliente às 10h");
agenda.adicionarCompromisso("Almoço com amigos às 12h");
agenda.listarCompromissos();