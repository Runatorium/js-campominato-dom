const gridDom = document.getElementById('grid');
const btnDom = document.getElementById('action-button')

let bombnumbers = [];

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
                if(bombnumbers.includes(quadratocorrente.value)){
                    this.classList.add('boom');
                    console.log('sei finito su una mina');
                }else{
                    this.classList.toggle('clicked');
                    console.log(quadratocorrente.innerHTML);
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



