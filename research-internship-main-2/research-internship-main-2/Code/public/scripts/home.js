let position = 1;

document.addEventListener("DOMContentLoaded", start);
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.getElementsByClassName(" circle");
const actives = document.getElementsByClassName(" active");


// window.onload =()=>{ circles = document.getElementsByClassName(" circle"); }


async function start(){

    const next = document.querySelector("#next");
    //const previous = document.querySelector("#previous");
    const item1 = document.querySelector("#i1");
    const item2 = document.querySelector("#i2");
    const item3 = document.querySelector("#i3");
    const item4 = document.querySelector("#i4");
    const item5 = document.querySelector("#i5");
    const item6 = document.querySelector("#i6");
    const item7 = document.querySelector("#i7");
    const item8 = document.querySelector("#i8");
    const item9 = document.querySelector("#i9");
    const item10 = document.querySelector("#i10");
    const item11 = document.querySelector("#i11");
    const item12 = document.querySelector("#i12");
    const item13 = document.querySelector("#i13");
    const item14 = document.querySelector("#i14");
    const item15 = document.querySelector("#i15");
    const item16 = document.querySelector("#i16");

    next.addEventListener("click", (event) => {
        event.preventDefault();
        nextFunction();
    })
    // previous.addEventListener("click", (event) => {
    //     event.preventDefault();
    //     previousFunction();
    // })
    item1.addEventListener("click", (event) => {
        event.preventDefault();
        selectItem(1);
    })
    item2.addEventListener("click", (event) => {
        event.preventDefault();
        selectItem(2);
    })
    item3.addEventListener("click", (event) => {
        event.preventDefault();
        selectItem(3);
    })
    item4.addEventListener("click", (event) => {
        event.preventDefault();
        selectItem(4);
    })
    item5.addEventListener("click", (event) => {
        event.preventDefault();
        selectItem(5);
    })
    item6.addEventListener("click", (event) => {
        event.preventDefault();
        selectItem(6);
    })
    item7.addEventListener("click", (event) => {
        event.preventDefault();
        selectItem(7);
    })
    item8.addEventListener("click", (event) => {
        event.preventDefault();
        selectItem(8);
    })
    item9.addEventListener("click", (event) => {
        event.preventDefault();
        selectItem(9);
    })
    item10.addEventListener("click", (event) => {
        event.preventDefault();
        selectItem(10);
    })
    item11.addEventListener("click", (event) => {
        event.preventDefault();
        selectItem(11);
    })
    item12.addEventListener("click", (event) => {
        event.preventDefault();
        selectItem(12);
    })
    item13.addEventListener("click", (event) => {
        event.preventDefault();
        selectItem(13);
    })
    item14.addEventListener("click", (event) => {
        event.preventDefault();
        selectItem(14);
    })
    item15.addEventListener("click", (event) => {
        event.preventDefault();
        selectItem(15);
    })
    item16.addEventListener("click", (event) => {
        event.preventDefault();
        selectItem(16);
    })
}

// function previousFunction(){
//     position = position - 1;
//     if(position < 1)
//         position = 1;
//     content();  
// }

function nextFunction(){
    position = position + 1;    
    if(position > 16){
        position = 16;
    }
    content();
}

function content(){

    let displayType;
    for(let i = 1; i<17; i++){
        if ( i < position){
            circles[i].classList.add("active");
        }else{
           // circles[i].classList.remove("active");
        }

        if(i == position) {
            displayType = 'block';
        }
        else {
            displayType = 'none';
        }
        document.getElementById(i).style.display = displayType;   
    }    
}

function selectItem(index){
    
    for(let i = 1; i<17; i++){
        if ( index <= actives.length) {
            if (i==index){
                document.getElementById(i).style.display = 'block'; 
            }else{
                document.getElementById(i).style.display = 'none';  
            }
        }else{
           //document.getElementById("test").innerHTML = "Not allowed";
        }
        
    }
}

