

// Chiedere le informazioni di base all'utente
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let color = prompt("Qual è il tuo colore preferito?")
let number1 = prompt("Dimmi un primo numero")
let number2 = prompt("Dimmi un secondo numero")
let randInt = Math.floor(Math.random()*100);

// Converto variabili NUMBER (che erano testi per via del prompt) in NUMERI
number1 = parseInt(number1);
number2 = parseInt(number2);
// OPERAZIONI

let DivisionBetweenNumbers = number1 / number2
let password = randInt + name + surname + color




// Compliazione del ConsoleLog
let InformationForPassword = `
------------------------------------------------------------
> Informazioni personali:
Nome e Cognome: ${name} ${surname}
Colore preferito: ${color}
Numero 1: ${number1}
Numero 2: ${number2}
Divisione tra numero 1 e numero 2: ${DivisionBetweenNumbers}
La tua password è: ${password}
-------------------------------------------------------------
`;

console.log(InformationForPassword);

// Qui posso poi compilare l'eventuale pagina HTML prodisposta.
document.getElementById("password").innerHTML = password;