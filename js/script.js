//Variabili
const euroKm = 0.21;
let discountApplied = 0;
let discountx100 = 0;

// Km
const trainKm = prompt ("Quanti Km vuoi percorrere?");
console.log(trainKm);
// age
const clientAge = prompt ("Quanti anni hai?");
console.log(clientAge);

// ticket price
let ticketPrice = euroKm * trainKm
console.log(ticketPrice);

// age discount
if (clientAge < 18) {
    discountx100 = 20;
    console.log(discountx100);

    discountApplied = (ticketPrice * discountx100) / 100;
    console.log(discountApplied);
} else if (clientAge > 65) {
    discountx100 = 40;
    console.log(discountx100);

    discountApplied = (ticketPrice * discountx100) / 100;
    console.log(discountApplied);
}

// final price
let finalPrice = ticketPrice - discountApplied;
console.log(finalPrice);

// Print ticket price
finalPrice = finalPrice.toFixed(2);

document.getElementById('ticket-price').innerHTML = "Il prezzo del biglietto è: €" + finalPrice;