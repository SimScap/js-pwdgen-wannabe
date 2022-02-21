const firstName = prompt("Qual'è il tuo nome?")
document.getElementById('name').innerHTML = firstName;

const secondName = prompt("Qual'è il tuo cognome?")
document.getElementById('surname').innerHTML = secondName;

const favouriteColor = prompt("Qual'è il tuo colore preferito?")
document.getElementById('color').innerHTML = favouriteColor;

document.getElementById("password").innerHTML =
firstName + secondName + favouriteColor + "21";

