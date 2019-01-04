
// Create a array containing "Html", "CSS", "Java", "PHP"
var CreationArrayLanguages = function () {
let talen = ["Html", "CSS", "Java", "PHP"]; // maak een variabel aan
return talen;  // geeft de uitkomst van de var talen
}

// Create a array containing the numbers from 0 to 5
var CreateArrayNumbers = function () {
let nummers = [0, 1, 2, 3, 4, 5]; // maakt een var nummers aan
return nummers; // geeft het resultaat weer van de var nummers
}

// Replace the third element of the array with "Javascript"
var languages = ["Html","CSS","Java","PHP"];
var ReplacementElement = function (languages) {
languages[2] = "Javascript"; // verander een element in ene array met de positie 2
return languages; // weergeeft de uitkomst ervan
}

// Add "Ruby" and "Python" at the end of the array
var languages = ['Html', 'CSS', 'Javascript', 'PHP'];
var AddElementLanguages = function (languages) {
     languages.push("Ruby", "Python"); // voegt twee elementen toe aan het einde van de array
     return languages;  //weergeeft het resultaat
}

// Add "-2" and "-1" at the beginning of the table numbers
var numbers = [0,1,2,3,4,5];
var AddElementNumbers = function (numbers) {
numbers.unshift(-2, -1); // voegt twee items toe aan het begin van de array
return numbers; // weergeeft het resultaat van numbers var
}

// Delete the first element of the languages array
var languages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
var DeletingFirstElement = function (languages) {
languages.shift(); // verwijder een item in het begin van een array 
return languages; // weergeeft het resultaat van de var
}

// Delete the last element of the languages array
var languages = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
var DeleteLastElement = function (languages) {
languages.pop(); // verwijderd een item op het einde van een array
return languages; // weergeeft het resultaat van de var
}

// Make the "social_networks_chain" chain into a "social_networks" array
var social_networks_chain = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
var ArrayStringConversion = function (social_networks_chain) {
    return social_networks_chain.split(",");    //maakt array van string var
}

// Make the "languages" array into a "languages_chaine" string. Separate languages with a comma
var languages = ['CSS', 'Javascript', 'PHP', 'Ruby'];
var ChainArrayConversion = function (languages) {
return languages.toString();  // zet een array om naar tekst met comma's tussen
}

// Sort the "social_networks" array
var social_networks = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'];
var SortingArray = function (social_networks) {
return social_networks.sort(); // sorteert de array op alphabed
}

// Bonus: Reverse the "languages" array
var languages = ['CSS','Javascript','PHP','Ruby'];
var ReverseArray = function (languages){
return languages.reverse();
}
