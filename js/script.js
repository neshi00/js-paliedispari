
// definisco una funzione per la verifica di palindromi con argomento word
function verificaPalindromi(word) {

// apro un ciclo for che verifica incrementalmente le singole lettere (dalla lettera 0 fino alla lettera posta a metà parola)
// e le confronta (verificando eventuale diversità) con l'altrà metà della parola stessa, partendo dall'ultima lettera
  const lunghezzaStringa = parolaInserita.length;
  for (let i = 0; i < lunghezzaStringa / 2; i++) {


    if (word[i] !== word[lunghezzaStringa - 1 - i]) {
        return "non è un palindromo";
    } else {
        return "è proprio un palindromo";
    }
  }


// chiedo all'utente di inserire una parola
let parolaInserita = prompt("digita una parola per verificare se è palindroma");
// richiamo la funzione associandola ad una variabile
const verify = verificaPalindromi(word);

console.log(verify);