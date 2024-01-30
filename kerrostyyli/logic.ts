

export class Logic {

    private autot: Auto[] = [];

    start(): void {
        this.autot = [new Auto('Henkilöauto', 'henkiloauto'), new Auto('Kuormaauto', 'kuormaauto')];
        console.log('Program started');
    }

    add(nimi: string): void {
        this.autot.filter(auto => auto.nimi === nimi).forEach(auto => auto.maara = auto.maara + 1);
    }

    clear(): void {
        this.autot.forEach(auto => auto.maara = 0);
    }

    getAll(): Auto[] {
        return this.autot;
    }
}

export class Auto {
    public maara: number = 0;
    public nimi: string= '';
    public viite: string = '';
    
    public constructor(nimi: string, viite: string) {
        this.nimi = nimi;
        this.viite = viite;
    }
}