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
        
            quadratocorrente.addEventListener('click', function() {
                
                this.classList.toggle('clicked');
                console.log(quadratocorrente.innerHTML);  
        });

        gridDom.append(quadratocorrente);
        quadratocorrente.append(i);
            
     }
}; 


function bombgenerator(){
    for(i=0; i<16; i++){
      let bmbnumber = Math.floor(Math.random() * 100 + 1);
      if(bmbnumber != bombnumbers[i-1]){
        bombnumbers[i]=bmbnumber
      }
    } 
}


/*
for(i=0; i<16; i++){
    if(this.value == bombnumbers[i]){
        console.log(explosion);
    }else if(this.value !== bombnumbers[16]){
        this.classList.toggle('clicked');
    }
}
*/