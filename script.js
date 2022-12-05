/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

console.log ('JS OK')

/*
1-Prendere l'elemento dal DOM
2-Creo costante con tariffa/km
3-Creo costante sconto under 18
4-Creo costante sconto over 65
5-Chiedo all'utente i km da percorrere e li metto in una variabile
6-Chiedo all'utente gli anni e li metto in una variabile
7-Calcolo costo
8-Applico eventuali sconti
9-Stampare
*/


//1-Prendere l'elemento da DOM

const ticket = document.getElementById('ticket-price');



// 2-Creo costante con tariffa/km

const kmPrice = 0.21;



// 3-Creo costante sconto under 18

const underSale = 20;



// 4-Creo costante sconto over 65

const overSale = 40;



// 5-Chiedo all'utente i km da percorrere e li metto in una variabile

const userKm = parseInt(prompt('Quanti chilometri hai intenzione di percorrere?', '50').trim());



// 6-Chiedo all'utente gli anni e li metto in una variabile

const userAge = parseInt(prompt('Quanti anni hai?', '28').trim());



//VALIDAZIONE

let isValid = true;

if (isNaN(userKm) || userKm < 1 ){
    isValid = false;
    alert ('NOT VALID');
}


if (isNaN(userAge) || userAge < 1 || userAge > 95){
    isValid = false;
    alert ('NOT VALID');
}


if (isValid){

// 7-Calcolo costo

let userTicketPrice = userKm * kmPrice ;

// 8-Applico eventuali sconti

if (userAge > 64){
    userTicketPrice = userTicketPrice - (userTicketPrice * overSale) / 100;
}

if ( userAge < 18){
    userTicketPrice = userTicketPrice - (userTicketPrice * underSale) / 100;
}

//Arrotondo

userTicketPrice = userTicketPrice.toFixed(2);

// 9-Stampare

const message = `Il tuo biglietto costa ${userTicketPrice} €`;

ticket.innerText = message;

}



