"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const Auto_1 = require("./oliot/Auto");
const jquery_1 = __importDefault(require("jquery"));
let henkiloauto;
let kuormaauto;
function start() {
    henkiloauto = new Auto_1.Auto('Henkilöauto');
    kuormaauto = new Auto_1.Auto('Kuormaauto');
    (0, jquery_1.default)("#henkiloauto-nimi").text(henkiloauto.nimi);
    (0, jquery_1.default)("#henkiloauto-laskuri").text(henkiloauto.maara);
    (0, jquery_1.default)("#henkiloauto-lisaa").on("click", function () {
        henkiloauto.lisaa();
        (0, jquery_1.default)("#henkiloauto-laskuri").text(henkiloauto.maara);
    });
    (0, jquery_1.default)("#kuormaauto-nimi").text(kuormaauto.nimi);
    (0, jquery_1.default)("#kuormaauto-laskuri").text(kuormaauto.maara);
    (0, jquery_1.default)("#kuormaauto-lisaa").on("click", function () {
        kuormaauto.lisaa();
        (0, jquery_1.default)("#kuormaauto-laskuri").text(kuormaauto.maara);
    });
    (0, jquery_1.default)("#nollaa").on("click", function () {
        henkiloauto.nollaa();
        kuormaauto.nollaa();
        (0, jquery_1.default)("#henkiloauto-laskuri").text(henkiloauto.maara);
        (0, jquery_1.default)("#kuormaauto-laskuri").text(kuormaauto.maara);
    });
}
exports.start = start;
(0, jquery_1.default)(document).ready(function () {
    start();
});
