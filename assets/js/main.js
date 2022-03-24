/* 
DESCRIZIONE:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca. */



// Chiedere numero di km da percorrere

const km_da_percorrere = parseInt(prompt('Inserisci i km da percorrere'));
/* console.log(km_da_percorrere); */

// Chiedere età del passeggero
const eta = parseInt(prompt('Inserisci età'));
/* console.log(eta); */

// definire il costo dei km
const prezzo_al_km = 0.21;

// Calcolare prezzo del biglietto con sconto del 20% per i minorenni e del 40% per gli over 65
// Prezzo del biglietto senza sconto
const prezzo_del_biglietto = prezzo_al_km * km_da_percorrere;

// sconti minorenne e over 65
const sconto_minorenne = prezzo_del_biglietto * 20 / 100;

const sconto_over_65 = prezzo_del_biglietto * 40 / 100;

// Prezzo biglietto minorenne e over 65

const prezzo_biglietto_minorenne = prezzo_del_biglietto - sconto_minorenne;

const prezzo_biglietto_over_65 = prezzo_del_biglietto - sconto_over_65;

// Visualizzare il prezzo finale del biglietto comprensivo di sconti
if (eta < 18) {
    document.getElementById('biglietto').innerHTML = 'Il costo del biglietto è ' + prezzo_biglietto_minorenne + '€';
    console.log(prezzo_biglietto_minorenne);
} else if (eta > 64){
    document.getElementById('biglietto').innerHTML = 'Il costo del biglietto è ' + prezzo_biglietto_over_65 + '€';
    console.log(prezzo_biglietto_over_65);
} else {
    document.getElementById('biglietto').innerHTML = 'Il costo del biglietto è ' + prezzo_del_
    biglietto + '€';
    console.log(prezzo_del_biglietto);
}


