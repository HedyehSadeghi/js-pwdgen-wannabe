/*
let name = prompt("What's your name?");
let surname = prompt("What's your surname?");
let favoriteColor= prompt("What's your favorite color?")
let userNumber1 = prompt ("Choose a number: ");
let userNumber2 = prompt ("Choose a second number: ");

let fourthPasswordElement= parseInt(userNumber1)/parseInt(userNumber2);

let passwordCreated= "{" +name + "}" + "{" + surname + "}" + "{" +favoriteColor+ "}" +fourthPasswordElement;

console.log(passwordCreated);

document.getElementById("userPasswordCreated").innerHTML= passwordCreated;
*/


let name = prompt("What's your name?");
let surname = prompt("What's your surname?");
let favoriteColor= prompt("What's your favorite color?")


// numero casuale tra 0 e 1 
let randomNumber = Math.random();

//numero casuale tra 0 e 1000
randomNumber= Math.floor(Math.random()*1000)

console.log(randomNumber); 

let passwordCreated= "{" +name + "}" + "{" + surname + "}" + "{" +favoriteColor+ "}"+ randomNumber ;

console.log(passwordCreated);

document.getElementById("userPasswordCreated").innerHTML= passwordCreated;