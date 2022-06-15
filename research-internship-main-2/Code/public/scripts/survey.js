import {updateStudentSurvey, updateStudentProgress} from "../repositories/StudentRepository.js"

document.addEventListener("DOMContentLoaded", start);

async function start(){
    document.querySelector("body").classList.remove("fadeout");
    const submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click",(event) => {
        event.preventDefault();
        getFormValues();
    });
}

 async function getFormValues(){
     let values = [];
     for(let i=0; i<10; i++){
      const element = document.getElementsByName(`question-${i+1}`);
      for(let j=0; j<element.length; j++)
          if(element[j].checked)
              values.push(element[j].value);
     }
     const uuid = sessionStorage.getItem("email");
     await updateStudentSurvey(uuid, values);
     const student = {};
     student.progress = "test";
     await updateStudentProgress(uuid, student);

     document.querySelector("#popup").style.opacity = "0.9";
     window.setTimeout(() => {
         window.location.href = "../home.html";
     },3000);

     return values;
 }