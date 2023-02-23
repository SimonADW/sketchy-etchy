

let mainContainer = document.getElementById('container-main');


// Creates drawingpad (Grid)

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

// Enables drawing function

let selectedInnerBox;

mainContainer.onmouseover = function(event) {
    let target = event.target; 
    draw(target); 
}

function draw(innerBox) {
    selectedInnerBox = innerBox;
    selectedInnerBox.classList.add('drawn');
}

// Add "New sketchpad" button

let newPadButton = document.getElementById('new-grid');
newPadButton.addEventListener('click', () => {    
    while(mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.lastChild);
    }       
    createGrid(prompt('Enter wanted grid size: '));
    
});

createGrid(16);




