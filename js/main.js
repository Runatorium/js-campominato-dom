const gridDom = document.getElementById('grid');
const btnDom = document.getElementById('action-button')

let bombnumbers = [];
let score = 0;

btnDom.addEventListener('click', function(){

    const difficoltà = document.getElementById('selezione-difficolta');
    const dfc = difficoltà.value;
    var nsquare;

    switch(dfc){
        case 'easy':
        var nsquare = 100;
        break;
        
        case 'hard':
        var nsquare = 81;
        break;

        case 'insane':
        var nsquare = 49;
        break;

    }
         
    gridDom.innerHTML = "";
    creagriglia(nsquare);
    bombgenerator();
    console.log(bombnumbers);
   
});
    

    
function creanuovoquadrato(){
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement;
}


function creagriglia (nsquare){
    for(i=0; i < nsquare; i++){
        const quadratocorrente = creanuovoquadrato();
        quadratocorrente.value=i;
        
            quadratocorrente.addEventListener('click', function() {

                let punteggio = document.getElementById('score');
                punteggio.innerHTML ="";

                if(bombnumbers.includes(quadratocorrente.value)){
                    this.classList.add('boom');
                    console.log('sei finito su una mina');
                    let perso = document.getElementById('mina')
                    perso.append('hai perso ');
                    punteggio.append(score);
                }else{
                    this.classList.toggle('clicked');
                    console.log(quadratocorrente.innerHTML);
                    score++
                    punteggio.append(score);
                    victory(score);
                }           
         });
        gridDom.append(quadratocorrente);
        quadratocorrente.append(i);
            
     }
}; 



function bombgenerator(){
    do {
        const bmbnumber = Math.floor((Math.random() * 100) + 1);
        
        if (!bombnumbers.includes(bmbnumber)) {
            bombnumbers.push(bmbnumber);
        }
    
    } while (bombnumbers.length < 16);
    
};



function victory (score){
    let victory = document.getElementById('victorymessage');
    if(score == 84){
        victory.append('Hai vinto');
    }
}