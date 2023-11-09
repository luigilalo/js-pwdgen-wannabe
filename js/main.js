

// Chiedere le informazioni di base all'utente
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let color = prompt("Qual è il tuo colore preferito?")
let number1 = prompt("Dimmi un primo numero")
let number2 = prompt("Dimmi un secondo numero")




// Compliazione del biglietto
let InformationForPassword = `
-------------- Il tuo bigliettino da visita --------------
> Informazioni personali:
Nome e Cognome: ${name} ${surname}
Colore preferito: ${color}
Numero 1: ${number1}
Numero 2: ${number2}
-------------------------------------------------------------
`;

console.log(InformationForPassword);