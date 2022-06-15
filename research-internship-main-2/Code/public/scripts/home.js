import {updateStudentProgress} from "../repositories/StudentRepository.js";

let position = 0;
let toggle = false;

document.addEventListener("DOMContentLoaded", start);
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.getElementsByClassName(" circle");
const actives = document.getElementsByClassName(" active");
const itemSelected = new Audio("media/itemClicked.mp3");
const buttonClicked = new Audio("media/buttonClicked.mp3");


// window.onload =()=>{ circles = document.getElementsByClassName(" circle"); }


async function start(){
    document.querySelector("body").classList.remove("fadeout");
    nextFunction();

    const next = document.querySelector("#next");
    const previous = document.querySelector("#previous");

    next.addEventListener("click", (event) => {
        buttonClicked.play();
        event.preventDefault();
        toggle=false;
        nextFunction();
    })
     previous.addEventListener("click", (event) => {
        buttonClicked.play();
         event.preventDefault();
         toggle=false;
         previousFunction();
     });



    let showSolution = document.querySelectorAll(".show-answer-button");
    showSolution.forEach((element) => {
        element.addEventListener("click", (event) => {
            event.preventDefault();
            let location = getPosition();
            toggleSolution(toggle, element, location);
        })
    });
    const items = [];
    for(let i =1; i<17; i++){
        let item = document.querySelector(`#i${i}`);
         item.addEventListener("click", (event) =>{
           itemSelected.play();
           event.preventDefault();
           selectItem(i);
       }) ;
    }

}

 function previousFunction(){
     position = position - 1;
     if(position < 1)
         position = 1;
     content(position, position+1);
 }

function nextFunction(){
    position = position + 1;    
    if(position > 16){
        position = 16;
    }
    content(position, position-1);
}

function content(actual, previous){
    if(actual === previous)
        return;

    if(actual > previous) {
        for (let i = previous; i < actual; i++) {
            circles[i].classList.add("active");
        }
    }
    else {
        if(previous === 16){
            for (let i = previous; i > actual; i--)
            circles[i-1].classList.remove("active");
            
        }
        else {
            for (let i = previous; i >= actual; i--) {
                circles[i].classList.remove("active");
                //  circles[i].classList.add("inactive");
            }
        }
    }

    const actualContent = document.getElementById(actual);
    actualContent.style.visibility = "visible";
    actualContent.style.opacity = "1";
    actualContent.style.transition = "opacity 1s linear";
    actualContent.style.height = "auto";

    if(previous === 0)
        return;

    const previousContent = document.getElementById(previous);
    previousContent.style.visibility = "hidden";
    previousContent.style.opacity = "0";
    previousContent.style.height = "0";

}

function selectItem(index){
    let currentLocation = getPosition();
    position = index;
    content(index, currentLocation);

}

async function toggleSolution(toggleInstance, toggleButton, location){
    if(document.querySelector(`#solution-${location}`).style.opacity === "1"){
        toggleButton.innerHTML = "--&#8609;--";
        const element = document.querySelector(`#solution-${location}`);
        element.style.visibility = "hidden";
        element.style.opacity = "0";
        element.style.height = "0";
    }
    else{
        toggleButton.innerHTML = "--&#8607;--";
        const element = document.querySelector(`#solution-${location}`);
        element.style.visibility = "visible";
        element.style.opacity = "1";
        element.style.transition = "opacity 1s linear";
        element.style.height = "auto";

    }
    toggle = !toggleInstance;
}

function getPosition(){
    return position;
}

