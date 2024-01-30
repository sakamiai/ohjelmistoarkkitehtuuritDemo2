"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = exports.Database = void 0;
class Database {
    constructor() {
        this.autot = [];
    }
    addCar(nimi) {
        this.autot.push(new Auto(nimi, nimi));
    }
    addQuantity(nimi) {
        this.autot.filter(auto => auto.nimi === nimi).forEach(auto => auto.maara = auto.maara + 1);
    }
    clearAll() {
        this.autot.forEach(auto => auto.maara = 0);
    }
    getAll() {
        return this.autot;
    }
}
exports.Database = Database;
class Auto {
    constructor(nimi, id) {
        this.maara = 0;
        this.nimi = '';
        this.id = '';
        this.nimi = nimi;
        this.id = id;
    }
}
exports.Auto = Auto;
