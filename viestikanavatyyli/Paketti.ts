export class Paketti {
    public maara: number = 0;
    public nimi: string= '';
    public viite: string = '';
    
    public constructor(nimi: string, viite: string) {
        this.nimi = nimi;
        this.viite = viite;
    }
}