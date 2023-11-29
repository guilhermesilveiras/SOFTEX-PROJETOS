interface Pato {
    darMachucao(): string;
}

interface Galinha {
    darOvo(): string;
}

class PatoMorto implements Pato {
    darMachucao(): string {
        return "Morto!";
    }
}

class GalinhaNormal implements Galinha {
    darOvo(): string {
        return "Ovo normal";
    }
}

class AdaptadorPato implements Galinha {
    private pato: Pato;

    constructor(pato: Pato) {
        this.pato = pato;
    }

    darOvo(): string {
        return this.pato.darMachucao();
    }
}

class AdaptadorPatoDemo {
    static main() {
        const pato = new PatoMorto();
        const galinha = new AdaptadorPato(pato);

        console.log(galinha.darOvo()); // Imprime: Morto!
    }
}

AdaptadorPatoDemo.main();