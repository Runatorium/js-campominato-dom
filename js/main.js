const gridDom = document.getElementById('grid');
const btnDom = document.getElementById('action-button')

let bombnumbers = [];
let score = 0;
let nsquare;

btnDom.addEventListener('click', function(){

    const difficoltà = document.getElementById('selezione-difficolta');
    const dfc = difficoltà.value;
    

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
    bombgenerator(nsquare);
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

                if(score == (nsquare - 17)){
                    let victory = document.getElementById('victorymessage');
                    victory.innerHTML = 'Hai vinto';
                    punteggio.append(score); 
                }
                else if(bombnumbers.includes(quadratocorrente.value)){
                    this.classList.add('boom');
                    console.log('sei finito su una mina');
                    let perso = document.getElementById('mina')
                    perso.innerHTML = 'hai perso ';
                    punteggio.append(score);
                }
                 else if (!bombnumbers.includes(quadratocorrente.value)){
                    this.classList.toggle('clicked');
                    console.log(quadratocorrente.innerHTML);
                    score++
                    punteggio.append(score);
                }         
         });
        gridDom.append(quadratocorrente);
        quadratocorrente.append(i);
            
     }
}; 



function bombgenerator(nsquare){
    do {
        const bmbnumber = Math.floor((Math.random() * nsquare) + 1);
        
        if (!bombnumbers.includes(bmbnumber)) {
            bombnumbers.push(bmbnumber);
        }
    
    } while (bombnumbers.length < 16);
    
};

