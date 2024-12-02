abstract class VoteSystem {
    protected votes: Record<string, number>;

    constructor() {
        this.votes = {};
    }

    public abstract voteFor(candidate: string): void;
    public abstract getResults(): object;
}

class Election extends VoteSystem {
    public voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate]++;
        } else {
            this.votes[candidate] = 1;
        }
    }

    public getResults(): object {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    public voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate]++;
        } else {
            this.votes[candidate] = 1;
        }
    }

    public getResults(): object {
        const sortedCandidates = Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1])
            .map(([candidate]) => candidate);
        return sortedCandidates;
    }
}

// Exemplo de uso
const election = new Election();
election.voteFor("Alice");
election.voteFor("Bob");
election.voteFor("Alice");
console.log("Resultados da Eleição:", election.getResults());

const poll = new Poll();
poll.voteFor("Charlie");
poll.voteFor("Alice");
poll.voteFor("Charlie");
poll.voteFor("Bob");
console.log("Resultados da Pesquisa:", poll.getResults());