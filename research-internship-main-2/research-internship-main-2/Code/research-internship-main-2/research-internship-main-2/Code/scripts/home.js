let position = 1;
let progressBar = 0;
let initialBar = 0;

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
    initialBar = progressBar;           // 0, 6.25, 12.5, 18.75
    progressBar = progressBar + 6.25;   // 6.25, 12.5, 18.75, ...
    if(position > 16)
        position = 16;
    
    content();
    move(initialBar, progressBar) 
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

// var i = 0;
function move(initialBar, progressBar) {

      var elem = document.getElementById("myBar");
      var end = document.getElementById("myProgress");
      var width = 0;
      var id = setInterval(frame, 10);
      
      document.getElementById("ratio").innerHTML = "Ratio: " + initialBar + " / " +  progressBar + 'Width' + width
      function frame() {
        if (width >= 100) {
        //   clearInterval(id);
        //   i = 0;
        } else {
              end.style.width = progressBar + '%';
              width++
              elem.style.width = width + "%";  // 0, 25, 50, 75, 100
          
        }
      }
    //}

}