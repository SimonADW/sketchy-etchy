

let mainContainer = document.getElementById('container-main');



function numberOfColumns(nmbr) {
    for(i = 0; i < nmbr; i++) {
        mainContainer.innerHTML += `<div class="column-box" id="column-box${i}"></div>`;
        
    }
}

function numberOfBoxes(nmbr) {
    for(i = 0; i < nmbr; i++) {
        let columnBox = document.getElementById(`column-box${i}`);
            for(nr = 0; nr < nmbr; nr++) {
            columnBox.innerHTML += `<div class="inner-box" id="inner-box${nr}"></div>`;
            }
    }
}

function createGrid(nmbr) {
    numberOfColumns(nmbr); 
    numberOfBoxes(nmbr);
}


let selectedInnerBox;

mainContainer.onmouseover = function(event) {
    let target = event.target; 
    draw(target); 
}


function draw(innerBox) {
    selectedInnerBox = innerBox;
    selectedInnerBox.classList.add('drawn');
}



createGrid(25);





