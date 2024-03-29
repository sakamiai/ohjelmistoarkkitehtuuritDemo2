import { Logic, Auto } from './logic';
import $ from "jquery";

function draw(autot: Auto[]): Auto[] {
    autot.forEach(auto => $(`#${auto.viite}-nimi`).text(auto.nimi));
    autot.forEach(auto => $(`#${auto.viite}-maara`).text(auto.maara)) ;
    return autot;
}

function initListeners(autot: Auto[]): Auto[] {
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
    const logic = new Logic();
    
    logic.start();

    draw(logic.getAll());

    initListeners(logic.getAll());
});