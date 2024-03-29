import { Database, Auto } from './database';
import $ from "jquery";

function draw(autot: Auto[]): Auto[] {
    autot.forEach(auto => $(`#${auto.id}-nimi`).text(auto.nimi));
    autot.forEach(auto => $(`#${auto.id}-maara`).text(auto.maara)) ;
    return autot;
}

function initListeners(autot: Auto[]): Auto[] {
    autot.forEach(auto => $(`#${auto.id}-lisaa`).on("click", function () {
        auto.maara = auto.maara + 1;
        $(`#${auto.id}-maara`).text(auto.maara);
    }));

    $("#nollaa").on( "click", function() {
        autot.forEach(auto => auto.maara = 0);
        draw(autot);
    } );

    return autot;
}

$( document ).ready(function() {
    console.log('Program started');
    
    const dbService = new Database();
    
    dbService.addCar('Henkilöauto');
    dbService.addCar('Kuormaauto');
    
    draw(dbService.getAll());

    initListeners(dbService.getAll());
});