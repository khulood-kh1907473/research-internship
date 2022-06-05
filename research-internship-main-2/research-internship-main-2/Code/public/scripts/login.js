import {createStudent} from "../repositories/StudentRepository.js"
import {readUser} from "../repositories/UserRepository.js";

document.addEventListener("DOMContentLoaded", start);

async function start(){
    document.querySelector("body").classList.remove("fadeout");
    let role;
    const selectForm = document.querySelector("#occupation");
    selectForm.addEventListener("change", () => {
        role = selectForm.value;
        document.querySelector("#role").style.height = "20vh";
        if(role === "student") {
            document.querySelector("#student").style.display = "flex";
            document.querySelector("#teacher").style.display = "none";
            document.querySelector("#submit").innerHTML = "Submit";
        }
        else {
            document.querySelector("#teacher").style.display = "flex";
            document.querySelector("#student").style.display = "none";
            document.querySelector("#submit").innerHTML = "Login";
        }
    })

    const submit = document.querySelector("#submit");
    submit.addEventListener("click", (event) => {
        event.preventDefault();
        let values;
        if(role === "teacher")
             teacherForm();
        else
             studentForm();
    });
};

async function studentForm(){
    const values = {};
    values.firstName = document.querySelector("#firstName").value;
    values.lastName = document.querySelector("#lastName").value;
    values.email = document.querySelector("#email").value;
    values.grade = document.querySelector("#grade").value;
    const response = await createStudent(values);
    sessionStorage.setItem("email", values.email);
    if(response === null) {
        document.querySelector("body").classList.add("fadeout");
        window.setTimeout(() => {
            window.location.href = "../home.html";
        },3000);
    }
}

async function teacherForm(){
    const values = {};
    values.username = document.querySelector("#username").value;
    values.password = document.querySelector("#password").value;
    console.log(values.username);
    console.log(values.password);
    const user = await readUser(values.username, values.password);
    console.log(user);
    if (user.exists) {
        document.querySelector("body").classList.add("fadeout");
        window.setTimeout(() => {
            window.location.href = "../survey-statistics.html";
        },3000);
    } else {
        alert("Incorrect email or password!");
    }
}