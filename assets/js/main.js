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
console.log(km_da_percorrere);
// Chiedere età del passeggero
const eta = parseInt(prompt('Inserisci età'));
console.log(eta);
// Calcolare prezzo del biglietto con sconto del 20% per i minorenni e del 40% per gli over 65

// definire il costo dei km
let prezzo_al_km = 0.21 * km_da_percorrere;
console.log(prezzo_al_km);


// Visualizzare il prezzo finale del biglietto comprensivo di sconti
let prezzo_del_biglietto = km_da_percorrere * prezzo_al_km;