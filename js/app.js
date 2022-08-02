console.log('JS ok');
// Visualizzare in pagina 5 numeri casuali. (con un alert)
// Dopo che l’utente avrà chiuso l’alert (quindi i numeri non saranno pìu visibili) parte un timer di 30 secondi.
// Alla fine dei 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// PSEUDOCODICE

// crea un array
// crea un generatore di numeri casuali da 1 a 100
// crea un ciclo che compia 5 iterazioni
// pusha i valori dentro l'array
// crea una array che contenga i 5 numeri casuali da 1 a 100
// crea un alert che mostri i 5 numeri contenuti nell array
// chiuso l'alert parte il timer di 30 secondi
// crea un prompt che richieda all'utente i numeri che ha visto precedentemente
// crea un ciclo che confronti i n utente con gli n presenti nella stringa
// se un numero inserito è uguale al un numero contenuto nell'array attribuisci un punto
// crea un alert che dica all'utente quanti punti ha totalizzato


// crea una array che contenga i 5 numeri casuali da 1 a 100 
const numbers = generateRandom();
function generateRandom() {
    const numberRandom = [];

    // console.log(num);
    // crea un ciclo che compia 5 iterazioni 
    while (numberRandom.length < 5) {
        // crea un generatore di numeri casuali da 1 a 100
        let num = Math.floor(Math.random() * 100 + 1);
        if (!numberRandom.includes(num)) {
            // pusha i valori dentro l'array
            numberRandom.push(num)
        }
    }
    console.log(generateRandom);
    return numberRandom;
}


// crea un alert che mostri i 5 numeri contenuti nell array
alert('memorizza questi numeri:' + numbers.join(','));

// chiuso l'alert parte il timer di 30 secondi
setTimeout(() => {
    let point = 0;
    // crea un prompt che richieda all'utente i numeri che ha visto precedentemente
    let userNumber;
    // crea un ciclo che confronti i n utente con gli n presenti nella stringa
    for (let i = 0; i < 5; i++) {
            userNumber = parseInt(prompt('inserisci i numeri che hai memorizzato'));
            // se un numero inserito è uguale al un numero contenuto nell'array attribuisci un punto
        if (numbers.includes(userNumber)) {
            point++;
            console.log(point);
        }
       
    }
    alert('totale punti...'+ point)
}, 30000);
 // se un numero inserito è uguale al un numero contenuto nell'array attribuisci un punto
 