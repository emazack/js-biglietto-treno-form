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
    // ovvero prendi il valore all'interno degli oggetti html
    ValueNome = nome.value;
    ValueKm = km.value;
    ValueEta = eta.value;
    // stampa il nome sul biglietto virtuale
    document.getElementById('onome').innerHTML = ValueNome
    // calcola il prezzo del bigletto base
    var prezzobase = ValueKm * 0.21;
    // creare lo sconto per giovani ed over
    var scontoGiovane = (prezzobase * 20)/100
    var scontoAnziani = (prezzobase * 40)/100
    // fornire/calcolare ed applicare lo sconto se possibile
    if (ValueEta < 18) {
      var prezzoGiovane = prezzobase - scontoGiovane;
      // STAMPA prezzo giovani
      // stampa tipo di biglietto giovane
    } else if (eta > 65) {
       var prezzoAnziani = prezzobase - scontoAnziani;
      // STAMPA prezzo anziani
      // stampa tipo di biglietto anziani
    } else {
      // stampa prezzo Adulto
      // stampa tipo biglietto adulto
    }
  }
)
