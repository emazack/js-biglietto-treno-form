// Recupero informazioni
// recupero l'elemento inpunt dove andrà il nome
var nome = document.getElementById("inome");
// salva valore iniziare presente nel box
var StartNome = nome.value;
// recupero l'elemento inpunt dove andranno i chilometri
var km = document.getElementById("ikm");
// salva valore iniziare presente nel box
var StartKm = km.value;
// recupero l'elemento inpunt dove andrà il tipo di sconto (in base all'eta)
var eta = document.getElementById("isconto");
// salva valore iniziare presente nel box
var StartEta = eta.value;
console.log(StartEta);
// bottone: recupero l'informazione dell'oggetto bottone
var GeneraButton = document.getElementById('generabutton');
// fai accadere qualcosa al click del dell'oggetto bottone
GeneraButton.addEventListener('click',
// fai accadere qualcosa:
  function(){
    // ovvero prendi il valore all'interno degli oggetti html
    var ValueNome = nome.value;
    var ValueKm = km.value;
    var ValueEta = eta.value;
    // stampa il nome sul biglietto virtuale
    document.getElementById('onome').innerHTML = ValueNome
    // calcola il prezzo del bigletto base
    var prezzobase = ValueKm * 0.21;
    // creare lo sconto per giovani ed over
    var scontoGiovane = (prezzobase * 20)/100
    var scontoAnziani = (prezzobase * 40)/100
    // fornire/calcolare ed applicare lo sconto se possibile
    if (ValueEta === "Under") {
      var prezzoGiovane = prezzobase - scontoGiovane;
      // STAMPA prezzo giovani
      document.getElementById('ocostobiglietto').innerHTML = prezzoGiovane.toFixed(2) + " Euro";
      // stampa tipo di biglietto giovane
      document.getElementById('otipobiglietto').innerHTML = "Biglietto Under 18";
    } else if (ValueEta === "Over") {
       var prezzoAnziani = prezzobase - scontoAnziani;
       // STAMPA prezzo anziani
       document.getElementById('ocostobiglietto').innerHTML = prezzoAnziani.toFixed(2) + " Euro";
       // stampa tipo di biglietto anziani
       document.getElementById('otipobiglietto').innerHTML = "Biglietto Over 65";
    } else {
      // stampa prezzo Adulto
      document.getElementById('ocostobiglietto').innerHTML = prezzobase.toFixed(2) + " Euro";
      // stampa tipo biglietto adulto
      document.getElementById('otipobiglietto').innerHTML = "Biglietto Standard";
    }
    // seleziona la sezione da rendere visibile per mostrare il biglietto aggiungendo la classe visible e togliendo quella di default
    document.getElementById('sezionebiglietto').className = "visible"
  }
)

// bottone: recupero l'informazione dell'oggetto bottone
var AnnullaButton = document.getElementById('annullabutton');
console.log(AnnullaButton);
// fai accadere qualcosa al click del dell'oggetto bottone
AnnullaButton.addEventListener('click',
  function(){
    // modifica il VALUE dell'input, tornando a quello di start
    document.getElementById("inome").value = StartNome;
    document.getElementById("ikm").value = StartKm;
    document.getElementById("isconto").value = StartEta;
  }
)
