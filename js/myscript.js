// Recupero informazioni
// recupero l'elemento inpunt dove andrà il nome
var nome = document.getElementById("inome");
// recupero l'elemento inpunt dove andranno i chilometri
var km = document.getElementById("ikm");
// recupero l'elemento inpunt dove andrà il tipo di sconto (in base all'eta)
var eta = document.getElementById("isconto");

// bottone recupero l'informazione dell'oggetto bottone
var GeneraButton = document.getElementById('generabutton');

GeneraButton.addEventListener('click',

  function(){
    // dell'oggetto elemento input recupera il valore al suo interno
    var ValueNome = nome.value;
    var ValueKm = km.value;
    var ValueEta = eta.value;
    console.log(ValueNome);
    console.log(ValueKm);
    console.log(ValueEta);
  }

);






// var prezzobase;
// prezzobase = km * 0.21;
// // creare lo sconto se possibile
// var scontoGiovane;
// scontoGiovane = (prezzobase * 20)/100
// var scontoAnziani;
// scontoAnziani = (prezzobase * 40)/100
//
// // fornire/calcolare ed applicare lo sconto se possibile
// var prezzoGiovane;
// var prezzoAnziani;
// if (eta < 18) {
//   prezzoGiovane = prezzobase - scontoGiovane;
//   document.getElementById('biglietto').innerHTML = prezzoGiovane + " Euro";
// } else if (eta > 65) {
//   prezzoAnziani = prezzobase - scontoAnziani;
//   document.getElementById('biglietto').innerHTML = prezzoAnziani + " Euro";
// } else {
//   document.getElementById('biglietto').innerHTML = prezzobase + " Euro";
// }
