"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
class Auto {
    constructor(nimi) {
        this.maara = 0;
        this.nimi = nimi;
    }
    nollaa() {
        this.maara = 0;
    }
    lisaa() {
        this.maara = this.maara + 1;
    }
}
exports.Auto = Auto;
