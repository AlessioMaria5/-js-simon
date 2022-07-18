let randomNumbers = document.getElementById('rNumbers');
let numeriGiusti = document.getElementById('numeriGiusti')
let arrayNumb = [];
let numeriInseriti = []
let numeroInserito;

for (let i=0 ; i<5 ; i++){
    let generatoreNumeri = Math.floor(Math.random()*100);
    let punteggioInseriti = arrayNumb.push(generatoreNumeri);
    while(!arrayNumb.includes(generatoreNumeri)){
        let generatoreNumeri = Math.floor(Math.random()*100);
        arrayNumb.push(generatoreNumeri);
    }
}
    randomNumbers.append(arrayNumb);
    
console.log(arrayNumb);

setTimeout(function(){

    randomNumbers.style.display = 'none';
},2000)

setTimeout(function() {

let punteggio = document.getElementById('punteggio');

    for(let i=0 ; i<5 ; i++){

        numeroInserito = parseInt(prompt('Inserisci un Valore'));
    
        if(arrayNumb.includes(numeroInserito)){
            if(!(numeriInseriti.includes(numeroInserito))){
                numeriInseriti.push(parseInt(numeroInserito));   
            }
        }
    }
    punteggio.append('Hai inserito ' + numeriInseriti.length + ' numeri corretti!');
    numeriGiusti.append(numeriInseriti);

},3000)