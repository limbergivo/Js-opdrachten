 // ex 1
 let x = document.getElementsByClassName("hoverMe");

 function hideDiv(x) { // functie toevoegen aan onmouseenter="hideDiv(this)"  
     x.style.visibility = "hidden"; // element weghalen
 }


 function showDiv(x) {
     // door de loop gaan let for. i
     x.style.visibility = "visible";

 }

 //ex 2
 function resetDiv() {
     for (let i = 0; i < x.length; i++) {
         x[i].style.visibility = "visible";
     }
 }


 // EX3
 // Gebruik de ontvangen event als argument/parameter. TIP
//event.clientX roept de X as coordinaten op
 function coordsX(event) {
     let xAs = event.clientX;
     let coords = "x coords " + xAs;
     document.getElementById("x-axis").innerHTML = coords;
 }
// event.clientY roept de Y as coordinaten op
 function coordsY(event) {
     let yAs = event.clientY;
     let coords = "y coords " + yAs;
     document.getElementById("y-axis").innerHTML = coords;
 }

 // KEYBOARD EVENTS

 window.addEventListener('keydown', event => {
     switch (event.keyCode) {
         case 49: // JS CHAR CODES 49 is nummer 1
             setBackgroundColor('red');
             break;
         case 50: // JS CHAR CODES 50 is nummer 2
             setBackgroundColor('green');
             break;
         case 51: // JS CHAR CODES 51 is nummer 3
             setBackgroundColor('blue');
             break;
         case 52: // JS CHAR CODES 52 is nummer 4
             setBackgroundColor('yellow');
             break;
         case 53: // JS CHAR CODES 53 is nummer 5
             setBackgroundColor('black');
             break;
         case 54: //// JS CHAR CODES 54 is nummer  6
             setBackgroundColor('white');
             break;
         case 55: // JS CHAR CODES 55 is nummer 7
             setBackgroundColor('purple');
             break;
         case 56: // JS CHAR CODES 56 is nummer 8
             setBackgroundColor('#333');
     }
 });
// functie die achtergroond kleur aanpast met querySelector en .style.background = color;
 function setBackgroundColor(color) {
     document
         .querySelector('#character')
         .style
         .backgroundColor = color;
 }


 //Ex 2

 // gebruik maken van https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
 let upDiv = document.getElementById("up");  // variabel aanmaken met naam upDiv -> arrow UP
 let downDiv = document.getElementById("down");  // variabel aanmaken met naam upDiv -> arrow DOWN
 let leftDiv = document.getElementById("left"); // variabel aanmaken met naam upDiv -> arrow LEFT
 let rightDiv = document.getElementById("right");  //// variabel aanmaken met naam upDiv -> arrow RIGHT



 window.addEventListener('keydown', event => {
     switch (event.keyCode) {
         case 38: // ARROW UP
             upDiv.className = upDiv.className.replace("highlight"); //roep klas naam op en vervang met highlight
             upDiv.style.opacity = "0.5"
             break;
         case 40: // ARROW DOWN
             downDiv.className = downDiv.className.replace("highlight");
             downDiv.style.opacity = "0.5"
             break;
         case 37: // LEFT ARROW
             leftDiv.className = leftDiv.className.replace("highlight");
             leftDiv.style.opacity = "0.5"
             break;
         case 39: // RIGHT ARROW
             rightDiv.className = rightDiv.className.replace("highlight");
             rightDiv.style.opacity = "0.5"
             break;
     }
 });

 window.addEventListener('keyup', event => {
     switch (event.keyCode) {
         case 38: // ARROW UP
         upDiv.style.opacity = "1"  // changed opacity van 0.5 naar 1
             break;
         case 40: // ARROW DOWN
             downDiv.style.opacity = "1"
             break;
         case 37: // LEFT ARROW
             leftDiv.style.opacity = "1"
             break;
         case 39: // RIGHT ARROW
             rightDiv.style.opacity = "1"
             break;
     }
 });