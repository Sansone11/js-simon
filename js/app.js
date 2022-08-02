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
let numberRandom =[]; 

// crea un generatore di numeri casuali da 1 a 100
//  let num = 1 + Math.floor(100 * Math.random());
//     console.log(num)
// crea un ciclo che compia 5 iterazioni  
   function generateRandom (){
    for (let i = 0; i < 100; i++){
        let num = 1 + Math.floor(100 * Math.random());
// pusha i valori dentro l'array
        numberRandom.push(i);
    }
   }
 // crea un alert che mostri i 5 numeri contenuti nell array
 alert(num); 
    // console.log(numberRandom [i]);
// chiuso l'alert parte il timer di 30 secondi