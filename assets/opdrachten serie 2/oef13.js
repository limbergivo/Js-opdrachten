function calcBMI(){
    let gewicht = prompt("Geef uw gewicht in in kg");
    let hoogte = prompt("Geef uw lengte in in m");
    let bmi = (gewicht/(hoogte*hoogte));
    bmi = bmi.toFixed(2);
    alert("u BMI is: "+bmi);
    
    if (bmi <16.5){
      alert("Ondervoeding of hongersnood")
    }
    else if (bmi >=16.5 && bmi <18.5){
    alert("dunheid")
    }
    else if (bmi >=18.5 && bmi <25){
      alert("normale bouw")
    }
    else if (bmi >=25 && bmi <30){
      alert("overgewicht")
    }
    else if (bmi >=30 && bmi <35){
      alert("matige overgewicht")
    }
    else if (bmi >=35 && bmi <40){
      alert("ernstige overgewicht")
    }
    else (bmi >40);{
      alert("morbide obesitas")
    }
  }