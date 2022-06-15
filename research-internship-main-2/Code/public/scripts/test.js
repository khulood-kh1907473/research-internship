import {updateStudentProgress, updateStudentTest} from "../repositories/StudentRepository.js"

let results;
const buttonClicked = new Audio("media/buttonClicked.mp3");

document.addEventListener("DOMContentLoaded", () => {
    const result = document.getElementsByClassName(" questionsResult");
    results = result;
    const button = document.querySelector("#start");
    button.addEventListener("click", changedButton);
});

async function changedButton(){
    
    if (document.getElementById("start").innerHTML == "Submit") {
        await submitFunction();
    }
    else{
        document.getElementById("start").innerHTML = "Submit";
        start();
    }
}

async function submitFunction(){
    buttonClicked.play();
    const uuid = sessionStorage.getItem("email");
    const message = document.querySelector("#window-message");
    const student = {};
    student.progress = "post-survey";
    await updateStudentProgress(uuid, student);
    document.querySelector("#popup").style.opacity = "0.9";
    message.innerHTML = "Your score is: " + await showScore() + "/7. Your response was submitted. Thank you for your time";
    window.setTimeout(async() => {
        window.location.href = "../post-survey.html";
    },5000);
    
}

// function feedBack () {
//     document.getElementById("boxBack").classList.remove("show");
//     //document.getElementById("timeLeft").innerHTML = "Score: " + showScore() + " / 7";
//     for (let i=0; i<results.length+1; i++){
//         results[i].style.display = "block";
//     }
// }

async function showScore()
{
    let score = 0;
    let answer1 = document.getElementById("QuestionOneAnswerFour").checked;
    let answer2 = document.getElementById("QuestionTwoAnswerFour").checked;
    let answer3 = document.getElementById("QuestionThreeAnswerThree").checked;
    let answer4 = document.getElementById("QuestionFourAnswerTwo").checked;
    let answer5 = document.getElementById("QuestionFiveAnswerOne").checked;
    let answer6 = document.getElementById("QuestionSixAnswerThree").checked;
    let answer7 = document.getElementById("QuestionSevenAnswerOne").checked;

    const correctAnswers = [ answer1, answer2, answer3, answer4, answer5, answer6, answer7 ];
    const values = [];
    for (let i=0; i<correctAnswers.length; i++){
        if (correctAnswers[i] == true){
            score = score + 1;
            values.push(1);
            document.getElementById("question"+(i+1)+"Result").innerHTML = "Correct &#10003";
            document.getElementById("question"+(i+1)+"Result").style.color = "green";
        }else{
            values.push(0);
            document.getElementById("question"+(i+1)+"Result").innerHTML = "Wrong &#10007";
            document.getElementById("question"+(i+1)+"Result").style.color = "red";
        }
    }
    
    console.log(values);
    const uuid = sessionStorage.getItem("email");
    await updateStudentTest(uuid, values);
    return score;
}

function start() {
    buttonClicked.play();
    document.getElementById("form").style.display = "block";
}
