function TemperatureConversion(){
    let keuze = parseInt(prompt("Welke soort conversie wilt u?"));
    let temperatuur = parseInt(prompt("Wat is de temperatuur?"));
    let temp = 0;
    switch (keuze) {
      case 1:
      temp =(temperatuur*9/5) + 32;
        break;
      case 2:
      temp =(temperatuur + 273.15);
        break;
      case 3:
      temp =(temperatuur - 32) / (9/5);
        break;
      case 4:
      temp =(temperatuur - 32*(5/9)) + 273.15;
        break;
      case 5:
      temp =(temperatuur - 273.15);
        break;
      case 6:
      temp = (temperatuur * 9/5) - 459.67;
    }
    alert(temp);
  }