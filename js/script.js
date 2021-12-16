// definisco una funzione per la verifica di palindromi con argomento word
function verificaPalindromi(word) {
  // apro un ciclo for che verifica incrementalmente le singole lettere (dalla lettera 0 fino alla lettera posta a metà parola)
  // e le confronta (verificando eventuale diversità) con l'altrà metà della parola stessa, partendo dall'ultima lettera
  const lunghezzaStringa = word.length;
  for (let i = 0; i < lunghezzaStringa / 2; i++) {
    if (word[i] !== word[lunghezzaStringa - 1 - i]) {
      return "non è un palindromo";
    } else {
      return "è proprio un palindromo";
    }
  }
}

// chiedo all'utente di inserire una parola
let parolaInserita = prompt("digita una parola per verificare se è palindroma");
// richiamo la funzione associandola ad una variabile
const verify = verificaPalindromi(parolaInserita);

console.log(verify);

//---------------------------------------------------------------------------------------

// chiedo all'utente di scegliere tra pari e dispari
let pariDispari = prompt("scegli tra pari e dispari");
console.log("hai scelto", pariDispari);

// chiedo all'utente un numero tra 1 e 5
let sceltaNumero = parseInt(prompt("scegli un numero da 1 a 5"));
console.log("hai scelto il numero", sceltaNumero);

// definisco una funzione per la scelta di un numero casuale
function random(min, max) {
  const result = Math.floor(Math.random() * (max + 1 - min)) + min;
  return result;
}

//richiamo funzione per il numero casuale
const numMacchina = random(1, 5);
console.log('il numero "scelto" dalla macchina è', numMacchina);

// sommo il numero scelto dall'utemte con quello casuale lato macchina
let sum = numMacchina + sceltaNumero;
console.log("la somma dei due numeri è", sum);

// definisco funzione per elaborare se un dato numero è pari o dispari
function winner(numeroDaverificare) {
  if (numeroDaverificare % 2 === 0) {
    return "il risultato è pari";
  } else {
    return "il risultato è dispari";
  }
}

// richiamo la funzione per determinare se la somma dei due numeri (utente e macchina) è un numero  pari o dispari
const verificaSomma = winner(sum);
console.log(verificaSomma);

// richiamo la funzione di verifica pari/dispari
const verificaNumeroUtente = winner(sceltaNumero);

if (verificaSomma === verificaNumeroUtente) {
  console.log("complimenti hai vinto!!");
} else {
  console.log("mi dispiace non hai vinto, però puoi ritentare");
}
