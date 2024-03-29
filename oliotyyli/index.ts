import { Auto } from './oliot/Auto';
import $ from "jquery";

let henkiloauto: Auto;
let kuormaauto: Auto;

export function start(): void {
    henkiloauto = new Auto('Henkilöauto');
    kuormaauto = new Auto('Kuormaauto');

    $("#henkiloauto-nimi").text(henkiloauto.nimi);
    $("#henkiloauto-laskuri").text(henkiloauto.maara);
    $("#henkiloauto-lisaa").on( "click", function() {
        henkiloauto.lisaa();
        $("#henkiloauto-laskuri").text(henkiloauto.maara);
    } );

    $("#kuormaauto-nimi").text(kuormaauto.nimi);
    $("#kuormaauto-laskuri").text(kuormaauto.maara);
    $("#kuormaauto-lisaa").on( "click", function() {
        kuormaauto.lisaa();
        $("#kuormaauto-laskuri").text(kuormaauto.maara);
    });
    
    $("#nollaa").on( "click", function() {
        henkiloauto.nollaa();
        kuormaauto.nollaa();
        $("#henkiloauto-laskuri").text(henkiloauto.maara);
        $("#kuormaauto-laskuri").text(kuormaauto.maara);
    } );
}

$( document ).ready(function() {
    start();
});