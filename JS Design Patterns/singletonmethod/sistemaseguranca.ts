class SistemaSeguranca {
    private static instance: SistemaSeguranca;
    private senha: string;

    private constructor() {
        this.senha = 'senha secreta';
    }

    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instance) {
            SistemaSeguranca.instance = new SistemaSeguranca();
        }
        return SistemaSeguranca.instance;
    }

    public acessarBaseSecreta(senha: string): boolean {
        return this.senha === senha;
    }
}

export { SistemaSeguranca };