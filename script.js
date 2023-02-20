

let mainContainer = document.getElementById('container-main');

function numberOfBoxes(nmbr) {
    for(i = 0; i < nmbr*nmbr; i++) {
mainContainer.innerHTML += `<div class="inner-box"></div>`;
    }
}

numberOfBoxes(6); 






