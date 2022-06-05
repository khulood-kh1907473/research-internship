import {updateStudent} from "../repositories/StudentRepository.js"

document.addEventListener("DOMContentLoaded", start);

async function start(){
    document.querySelector("body").classList.remove("fadeout");
    const submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click",(event) => {
        event.preventDefault();
        const values = getFormValues();
    });
}

 async function getFormValues(){
     const values = {};
     values.question1 = document.querySelector('input[name="question-1"]:checked').value;
     values.question2 = document.querySelector('input[name="question-2"]:checked').value;
     values.question3 = document.querySelector('input[name="question-3"]:checked').value;
     values.question4 = document.querySelector('input[name="question-4"]:checked').value;
     values.question5 = document.querySelector('input[name="question-5"]:checked').value;
     values.question6 = document.querySelector('input[name="question-6"]:checked').value;
     values.question7 = document.querySelector('input[name="question-7"]:checked').value;
     values.question8 = document.querySelector('input[name="question-8"]:checked').value;
     values.question9 = document.querySelector('input[name="question-9"]:checked').value;
     values.question10 = document.querySelector('input[name="question-10"]:checked').value;
     const email = sessionStorage.getItem("email");
     await updateStudent(email, values);
     console.log(values);
     console.log(email);
     //getStudent()
     return values;
 }