// Recupero informazioni
// recupero l'elemento inpunt dove andrà il nome
var nome = document.getElementById("inome");
var ValueNome
// recupero l'elemento inpunt dove andranno i chilometri
var km = document.getElementById("ikm");
var ValueKm
// recupero l'elemento inpunt dove andrà il tipo di sconto (in base all'eta)
var eta = document.getElementById("isconto");
var ValueEta
// bottone recupero l'informazione dell'oggetto bottone
var GeneraButton = document.getElementById('generabutton');
// fai accadere qualcosa al click del dell'oggetto bottone
GeneraButton.addEventListener('click',
// fai accadere qualcosa:
  function(){
    // prendi il valore all'interno degli oggetti html
    ValueNome = nome.value;
    ValueKm = km.value;
    ValueEta = eta.value;
    // stampa il valore
    console.log(ValueNome);
    console.log(ValueKm);
    console.log(ValueEta);
  }
  // calcolo del prezzo del biglietto
  var prezzobase;
  prezzobase = km * 0.21;
  // creare lo sconto se possibile
  var scontoGiovane;
  scontoGiovane = (prezzobase * 20)/100
  var scontoAnziani;
  scontoAnziani = (prezzobase * 40)/100
  // fornire/calcolare ed applicare lo sconto se possibile
  var prezzoGiovane;
  var prezzoAnziani;
  if (eta < 18) {
    prezzoGiovane = prezzobase - scontoGiovane;
    // STAMPA COSA FARE
  } else if (eta > 65) {
    prezzoAnziani = prezzobase - scontoAnziani;
    // STAMPA COSA FARE
  } else {
    // STAMPA COSA FARE
  }
);
