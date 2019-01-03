let value1 = document.getElementById("password");
let value2 = document.getElementById("confirmation");
// console.log(value1);
// console.log(value2);
let check = function() {
if (value1.value === value2.value) {
value1.style.border= "3px solid green";
value2.style.border= "3px solid green";
} else {
value1.style.border= "3px solid red";
value2.style.border= "3px solid red";
}
}

value1.onkeyup = check;
value2.onkeyup = check;