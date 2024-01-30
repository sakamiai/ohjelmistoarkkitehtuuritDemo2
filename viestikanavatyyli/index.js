"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listeners = exports.draw = exports.start = void 0;
const Paketti_1 = require("./Paketti");
const jquery_1 = __importDefault(require("jquery"));
let autot;
function start() {
    return [new Paketti_1.Paketti('Henkilöauto', 'henkiloauto'), new Paketti_1.Paketti('Kuormaauto', 'kuormaauto')];
}
exports.start = start;
function draw(autot) {
    autot.forEach(auto => (0, jquery_1.default)(`#${auto.viite}-nimi`).text(auto.nimi));
    autot.forEach(auto => (0, jquery_1.default)(`#${auto.viite}-maara`).text(auto.maara));
    return autot;
}
exports.draw = draw;
function listeners(autot) {
    autot.forEach(auto => (0, jquery_1.default)(`#${auto.viite}-lisaa`).on("click", function () {
        auto.maara = auto.maara + 1;
        (0, jquery_1.default)(`#${auto.viite}-maara`).text(auto.maara);
    }));
    (0, jquery_1.default)("#nollaa").on("click", function () {
        autot.forEach(auto => auto.maara = 0);
        draw(autot);
    });
    return autot;
}
exports.listeners = listeners;
(0, jquery_1.default)(document).ready(function () {
    autot = start();
    listeners(draw(autot));
});
