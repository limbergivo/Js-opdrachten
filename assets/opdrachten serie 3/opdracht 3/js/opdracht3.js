// Geef in het meegeleverde HTML-bestand een alertvenster met de veldwaarde weer zodra het toetsenbord wordt ingedrukt.
function pressDown(){ // naam functie
    let drukEnter = event.keyCode;  //het evenement keycode
    let veldWaarde = document.getElementById('name').value  // waarde van het input veld
    if (drukEnter === 13) {  // getal voor enter is 13
        alert(veldWaarde); // alrt weergeven met ingegeven string van de let veldWaarde
    }
}

