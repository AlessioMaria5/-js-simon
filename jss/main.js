let randomNumbers = document.getElementById('rNumbers');
let numeriGiusti = document.getElementById('numeriGiusti')
let arrayNumb = [];
let numeriInseriti = []
let numeroInserito;


for (let i=0 ; i<5 ; i++){
    let generatoreNumeri = Math.floor(Math.random()*100);
    arrayNumb.push(generatoreNumeri);
    while(!arrayNumb.includes(generatoreNumeri)){
        let generatoreNumeri = Math.floor(Math.random()*100);
        arrayNumb.push(generatoreNumeri);
    }
}

    randomNumbers.append(arrayNumb);

// let finalNmbArray = randomNumbers.append(arrayNumb)
console.log(arrayNumb);

setTimeout(function(){

    randomNumbers.style.display = 'none';
},2000)

setTimeout(function() {

    

    for(let i=0 ; i<5 ; i++){

        numeroInserito = parseInt(prompt('Inserisci un Valore'));
    
        if(arrayNumb.includes(numeroInserito)){
    
            numeriInseriti.push(parseInt(numeroInserito));
            console.log('si')
        }
    
        else {
    
            console.log('no');
        }
    
        console.log(numeriInseriti);
    }
    
    numeriGiusti.append(numeriInseriti);

},3000)



// for (i=0 ; i<arrayNumb.length ; i++) {
// }