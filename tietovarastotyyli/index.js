"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const jquery_1 = __importDefault(require("jquery"));
function draw(autot) {
    autot.forEach(auto => (0, jquery_1.default)(`#${auto.id}-nimi`).text(auto.nimi));
    autot.forEach(auto => (0, jquery_1.default)(`#${auto.id}-maara`).text(auto.maara));
    return autot;
}
function initListeners(autot) {
    autot.forEach(auto => (0, jquery_1.default)(`#${auto.id}-lisaa`).on("click", function () {
        auto.maara = auto.maara + 1;
        (0, jquery_1.default)(`#${auto.id}-maara`).text(auto.maara);
    }));
    (0, jquery_1.default)("#nollaa").on("click", function () {
        autot.forEach(auto => auto.maara = 0);
        draw(autot);
    });
    return autot;
}
(0, jquery_1.default)(document).ready(function () {
    console.log('Program started');
    const dbService = new database_1.Database();
    dbService.addCar('Henkilöauto');
    dbService.addCar('Kuormaauto');
    draw(dbService.getAll());
    initListeners(dbService.getAll());
});
