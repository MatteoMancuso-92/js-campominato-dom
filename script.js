// Griglia 

const eleGrid = document.querySelector(".grid");

const eleBtnPlay = document.querySelector(".btn");
let clickedOnce = false
eleBtnPlay.addEventListener("click",
   function () {
    for (let i = 0; i < 100; i++) {
        eleGrid.innerHTML += `<div class="cell">${i + 1}</div>`;
    } if (!clickedOnce) {
        clickedOnce = true;
    } else {
        location.reload();
    }
    
// Caselle

    const listCells = document.querySelectorAll(".cell")
    
    for (let i = 0; i < listCells.length; i++) {
        const cell = listCells[i];
        cell.addEventListener("click",
           function() {
             this.classList.toggle("clicked");
             console.log(this);
           }
        );
    
    }
    
}
)