import { Paketti } from './Paketti';
import $ from "jquery";

let autot: Paketti[];

export function start(): Paketti[] {
    return [new Paketti('Henkilöauto', 'henkiloauto'), new Paketti('Kuormaauto', 'kuormaauto')];
}

export function draw(autot: Paketti[]): Paketti[] {
    autot.forEach(auto => $(`#${auto.viite}-nimi`).text(auto.nimi));
    autot.forEach(auto => $(`#${auto.viite}-maara`).text(auto.maara)) ;
    return autot;
}

export function listeners(autot: Paketti[]): Paketti[] {
    autot.forEach(auto => $(`#${auto.viite}-lisaa`).on("click", function () {
        auto.maara = auto.maara + 1;
        $(`#${auto.viite}-maara`).text(auto.maara);
    }));

    $("#nollaa").on( "click", function() {
        autot.forEach(auto => auto.maara = 0);
        draw(autot);
    } );

    return autot;
}

$( document ).ready(function() {
    autot = start();
    listeners(draw(autot));
});