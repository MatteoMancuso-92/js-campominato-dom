// creo funzione per contenuto della griglia

function createElementGrid(number, cellRow){

    // creo un div con una classe specifica
    const element = document.createElement('div');
    
    element.style.width = `calc(100% / ${cellRow})`;
    element.style.height = `calc(100% / ${cellRow})`;

    element.classList.add('square');
    element.innerText = number;
    return element;
}

// creo contatore per punteggio

let cont = 0;

// creo funzione per griglia

function createGrid(bomb, cellNumber, cellRow){

    cont = 0;

    let grid = document.getElementById('grid');
    
    // non faccio ripetere la griglia ogni volta che schiaccio play

    if(grid){
        grid.innerHTML = '';
    }

    // creo il ciclo for con i numeri

    for(let i=0; i<cellNumber; i++){
        const square = createElementGrid(i+1, cellRow);
        
        // aggiungo la funzione quando schiaccio sulla casella cambia colore

        square.addEventListener('click', function(){
            this.classList.add('clicked');
            
            // creata condizione che quando becco una bomba esce un alert
            
            if(bomb.includes(parseInt(this.innerText))){
                
                // creo il this per cambio colore quando esce una bomba
                
                this.classList.add('red');
                
                alert(`BOOM! Hai preso una bomba ${this.innerText}`);
                
                // richiamo la funzione per mostrare tutte le bombe 

                showAllBombs(bomb);
            
                // mostro il punteggio fatto dopo che esce la bomba
            
                document.getElementById('point').innerHTML = `Il tuo punteggio è: ${cont}`;
           
                // associo alla griglia la funzione che non si può fare più nulla dopo una bomba

                grid.classList.add('event-none');
            }  
            else{
                cont++
            }
        });

        // creo un figlio di grid

        grid.appendChild(square);
    }
}

// BONUS

let button = document.getElementById('button');
button.addEventListener('click', function(){

    let difficult = document.getElementById('level').value;

    let arrayBomb = [];


    let cellNumber;
    let cellRow;

    switch(difficult){
        case 'Easy':
            cellNumber = 100;
            cellRow = 10;
            break;
        case 'Medium':
            cellNumber = 81;
            cellRow = 9; 
            break;
        case 'Hard':
            cellNumber = 49;
            cellRow = 7;
            break;
        default:
            cellNumber = 100;
            cellRow = 10;
            break;
    }

    arrayBomb = createArrayBomb(1, cellNumber);
    console.log(arrayBomb)

    // richiamo funzione createGrid
    
    createGrid(arrayBomb, cellNumber, cellRow);
});

//  funzione per mostrare le bombe

 function showAllBombs(bombs_array){
      const cells = document.getElementsByClassName('square');
      for (let i=0; i < cells.length; i++){
          let cell = cells[i];
          if(bombs_array.includes(parseInt(cell.innerText))){
              cell.classList.add('clicked');
              cell.classList.add('red');
         }

      };
  }

// funzione che genera numeri casuali

function createArrayBomb(min, max){
    let bomb = [];
    let i = 0;
    while(i < 16){
        let numberRandom = Math.floor(Math.random() * (max - min +1)+ min);
        if(!bomb.includes(numberRandom)){
            bomb.push(numberRandom);
            i++;
        }
    }
    return bomb;
}