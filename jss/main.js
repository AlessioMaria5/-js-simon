let randomNumbers = document.getElementById('rNumbers');
let arrayNumb = [];
let numeriInseriti = []

for (let i=0 ; i<6 ; i++){
    let generatoreNumeri = Math.floor(Math.random()*100);
    arrayNumb.push(generatoreNumeri);
}

let finalNmbArray = randomNumbers.append(arrayNumb)
console.log(arrayNumb);

for(let i=0 ; i<6 ; i++){

    let numeroInserito = prompt('Inserisci un Valore');
    numeriInseriti.push(parseInt(numeroInserito));

    if(numeroInserito.includes(arrayNumb){

        console.log('ciao')
    }

    else {

        console.log('no');
    }
}


// for (i=0 ; i<arrayNumb.length ; i++) {
// }