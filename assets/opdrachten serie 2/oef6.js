let tab = [-2, 1, 4];
let x
function Subtract(x){
    console.log(x >= 0?"getal positief":"getal negatief") // console log de uitkomst.
    return x - 2;
}

function Display(){
    let  a = Subtract(tab[0]); // waarde nemen uit de Array in dit geval -2
    alert(Subtract(tab[0]));
    let b = Subtract(tab.length-1);
    alert(Subtract(tab.length-1));
}