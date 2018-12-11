let getallen= [];
let gem= 0;
let totaal = 0;

function calcAverage(){
  let getal = parseInt(prompt("Geef een geheel getal in:"));
  while (getal>=0){ // als getal gelijk is of groter dan 0
    while (getal%1 !=0){
      alert("Geef een geheel getal in");
      getal = parseInt(prompt("getal:"));
    }
    getallen.push(getal);
    getal = parseInt(prompt("Geef een geheel getal in:"));
  }  
  alert("totaal aantal getallen:"+getallen.length);
  for (let i = 0; i< getallen.length; i++){
    totaal = totaal + getallen[i];
  }
  gem = totaal/getallen.length;
  alert("gemiddelde:" + gem);
}