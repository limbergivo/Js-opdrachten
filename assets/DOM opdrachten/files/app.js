// class verwijderen & toevoegen
let removeClass = document.getElementsByClassName("bg-aqua");
removeClass[0].classList.replace("bg-aqua", "bg-olive");


// paragrahp slecteren
let firstParagraph = document.getElementById("first-paragraph");
// klasses toevoegen en verwijderen
firstParagraph.removeAttribute("class");
firstParagraph.setAttribute("class", "aqua");

// selecteren van classes met querySelectorAll
let allSilverClasses = document.querySelectorAll(".bg-silver");  //array
if (allSilverClasses[0].hasAttribute("class")) {                
    allSilverClasses[0].setAttribute("class", "bg-teal");
}

// selecteren van blockqoutes
let blockQoutes = document.getElementById("blockquote");
if (blockQoutes.hasAttribute("class")) {
    blockQoutes.setAttribute("class", "bg-white");
}
//console.log(blockQoutes);


// EXERCISE 2: CSS-selectoren querySelector geeft geen array terug
// #  gebruiken voor my-table op te roepen.
let table = document.querySelector("#my-table");
if (table.hasAttribute("class")) {
    table.setAttribute("class", "bg-purple");
}
//console.log(table);
// forEach gebruikt om class  toe te voegen met voorkeur voor add
let p = document.querySelector(".container").querySelectorAll("p");
p.forEach(element => {
    // element.classList += " shadow"
    element.classList.add("shadow");
    //   console.log(element);
});

// EXERCISE 3 querySeelector neemt alle elementen op de pagina weer. Gebruik makend van twee methodes
let pre = document.querySelectorAll("pre");
/*pre.forEach(element => {
    element.style.color ="#E82C0C";
*/
for (let i = 0; i < pre.length; i++) {
    pre[i].style.color = "red"; // veranderd text color
    pre[i].style.backgroundColor = "white"; // verander bg color
    pre[i].style.borderTop = "3px solid red"; // border top
    pre[i].style.borderBottom = "3px solid red"; // border bottom
}
// console.log(pre);

//  Selecteer het eerste element van het type h3.
let firstHeaderThree = document.querySelector("h3");
firstHeaderThree.innerHTML = ("<em>Italic title ! yeah !</em>");
//console.log(firstHeaderThree);

// MET CLASS PROBEREN. ALS DE REST AF IS
let firstHeaderTwo = document.querySelector("h2");
firstHeaderTwo.style.color = "blue";
firstHeaderTwo.innerHTML = "<strong>HTML doesn't work !</strong>";
//console.log(firstHeaderTwo);

//EXERCISE 4: Elementen aanmaken
/*let firstUl = document.querySelector("ul");
let newLi = document.createElement("li");
let contentLi = document.createTextNode("My best friend is <a href='http://www.google.com'>Google</a>");
firstUl.appendChild(contentLi);*/

let node = document.createElement("li");                 // maakt een <li> node
let anchor = document.createElement("a");               // maakt een a node
let textnode = document.createTextNode("My best friend is ");         // maakt text node
let anchorText = document.createTextNode('google');   // maakt text node
anchor.setAttribute("href", "http://www.google.com"); // geeft waarde mee aan anchor let
anchor.appendChild(anchorText);                        //voegt anchor en anchorText samen
node.appendChild(textnode);                              //  voegt textnode toe aan node let in de<li>
document.getElementById("myList").appendChild(node);
node.appendChild(anchor);
document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"*/


// verwijderen van child
let firstOl = document.querySelector('ol');
while(firstOl.firstChild) {
  console.log(firstOl.firstChild);
  firstOl.removeChild(firstOl.firstChild);
}
// array maken en items toevoegen 
let arrayGames = ["Silent Teacher","Code Monkey", "CodeCombat"]; // array maken
for (variable of arrayGames);{
console.log(variable);  // console log van variable
let li = document.createElement('li'); // aanmaken li
let arrayVar = document.createTextNode(variable); // text maken voor variable.
li.appendChild(arrayVar);  // toevoegen aan let arraVar
firstOl.appendChild(li); // li toepassen 
}
