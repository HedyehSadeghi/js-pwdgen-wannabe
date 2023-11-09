let name = prompt("Qual è il tuo nome? ");
let surname = prompt("Qual è il tuo cognome?");
let favoriteColor= prompt("Qual è il tuo colore preferito?")

let passwordCreated= "{" +name + "}" + "{" + surname + "}" + "{" +favoriteColor+ "}" +21;

document.getElementById("userPasswordCreated").innerHTML= passwordCreated;