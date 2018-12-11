function TestWhile(){
    let str =prompt("Hello world, welcome to the universe.");
    let n = str.includes("p");
    while (n == false){
        alert(str + " Je zin bevat geen p");
        str = prompt("probeer nog eens, geef een string met een p in");
        n = str.includes("p");
    }
    alert("\"" + str + "\" Je zin bevat een p");
}
TestWhile()