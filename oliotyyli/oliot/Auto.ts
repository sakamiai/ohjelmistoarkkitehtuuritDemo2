export class Auto {
    public maara: number = 0;
    public nimi: string;
   
    constructor(nimi: string) {
        this.nimi = nimi;
    }
   
    nollaa() {
        this.maara = 0;
    }

    lisaa() {
        this.maara = this.maara + 1;
    }
}