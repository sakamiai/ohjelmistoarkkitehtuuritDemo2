"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = exports.Logic = void 0;
class Logic {
    constructor() {
        this.autot = [];
    }
    start() {
        this.autot = [new Auto('Henkilöauto', 'henkiloauto'), new Auto('Kuormaauto', 'kuormaauto')];
        console.log('Program started');
    }
    add(nimi) {
        this.autot.filter(auto => auto.nimi === nimi).forEach(auto => auto.maara = auto.maara + 1);
    }
    clear() {
        this.autot.forEach(auto => auto.maara = 0);
    }
    getAll() {
        return this.autot;
    }
}
exports.Logic = Logic;
class Auto {
    constructor(nimi, viite) {
        this.maara = 0;
        this.nimi = '';
        this.viite = '';
        this.nimi = nimi;
        this.viite = viite;
    }
}
exports.Auto = Auto;
