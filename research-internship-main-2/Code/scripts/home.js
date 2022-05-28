let position = 1;

document.addEventListener("DOMContentLoaded", start);

async function start(){
    const next = document.querySelector("#next");
    const previous = document.querySelector("#previous");

    next.addEventListener("click", (event) => {
        event.preventDefault();
        nextFunction();
    })

    previous.addEventListener("click", (event) => {
        event.preventDefault();
        previousFunction();
    })
}

function previousFunction(){
    position = position - 1;
    if(position < 1)
        position = 1;
    content();
}

function nextFunction(){
    position = position + 1;
    if(position > 16)
        position = 16;
    content();
}

function content(){
    let displayType;
    for(let i = 1; i<17; i++){
        if(i == position) {
            displayType = 'block';
        }
        else {
            displayType = 'none';
        }
        document.getElementById(i).style.display = displayType;
    }
}