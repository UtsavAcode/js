card = document.querySelector('.container');
heading = document.querySelector('.heading1');

card.addEventListener('mousemove', runEvent);

function runEvent(e){
    

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},40`;
}