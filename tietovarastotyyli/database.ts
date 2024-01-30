

export class Database {

    private autot: Auto[] = [];

    addCar(nimi: string): void {
        this.autot.push(new Auto(nimi, nimi))
    }

    addQuantity(nimi: string): void {
        this.autot.filter(auto => auto.nimi === nimi).forEach(auto => auto.maara = auto.maara + 1);
    }

    clearAll(): void {
        this.autot.forEach(auto => auto.maara = 0);
    }

    getAll(): Auto[] {
        return this.autot;
    }
}

export class Auto {
    public maara: number = 0;
    public nimi: string= '';
    public id: string = '';
    
    public constructor(nimi: string, id: string) {
        this.nimi = nimi;
        this.id = id;
    }
}