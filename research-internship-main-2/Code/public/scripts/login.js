import {createStudent, getStudent} from "../repositories/StudentRepository.js"
import {readUser} from "../repositories/UserRepository.js";

document.addEventListener("DOMContentLoaded", start);
const alarm = new Audio("media/alarmSound.mp3");
const buttonClicked = new Audio("media/buttonClicked.mp3");

async function start(){
    let role = "none";
    document.querySelector("body").classList.remove("fadeout");
    const selectForm = document.querySelector("#occupation");
    selectForm.addEventListener("change", () => {
        role = selectForm.value;
        if(role === "pre-service teacher" || role === "in-service teacher") {
            document.querySelector("#role").style.height = "20vh";
            document.querySelector("#teacher").style.display = "none";
            document.querySelector("#student").style.display = "flex";
            document.querySelector("#submit").style.display = "none";
            document.querySelector("#student-buttons").style.display = "flex";
        }
        else {
            document.querySelector("#role").style.height = "20vh";
            document.querySelector("#student").style.display = "none";
            document.querySelector("#teacher").style.display = "flex";
            document.querySelector("#student-buttons").style.display = "none";
            document.querySelector("#submit").style.display = "block";
        }
    });

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');
    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye / eye slash icon
        this.classList.toggle('bi-eye');
    });

    const submit = document.querySelector("#submit");
    submit.addEventListener("click", (event) => {
        buttonClicked.play();
        event.preventDefault();
        if(role==="moderator")
            moderatorForm();
    });

    const startnew = document.querySelector("#make-new");
    startnew.addEventListener("click", (e) => {
        e.preventDefault();
        if(document.querySelector("#email").value === "") {
            document.querySelector("#email").style.border = "2px solid red";
            alert("please enter an email");
        }
        else
            studentForm(role, null);
    });

    const cont = document.querySelector("#continue");
    cont.addEventListener("click", (e) => {
        e.preventDefault();
        if(document.querySelector("#email").value === "") {
            document.querySelector("#email").style.border = "2px solid red";
            alert("please enter an email");
        }
        else
            studentForm(role, "continue");
    });

};

async function studentForm(role, type){
    const values = {};
    values.role = role;
    const email = document.querySelector("#email").value;
    if(! (/(.+){2,}@(.+){2,}\.(.+){2,}/.test(email))){
        document.querySelector("#email").style.border = "2px solid red"
        document.querySelector("#popup").style.color = "red";
        document.querySelector("#window-symbol").innerHTML = "&#10005;";
        document.querySelector("#window-message").innerHTML = "Please enter a valid email!";
        document.querySelector("#popup").style.opacity = "0.9";
        document.querySelector("#popup").style.zIndex = "0";
        window.setTimeout(() => {
            document.querySelector("#popup").style.opacity = "0";
            document.querySelector("#popup").style.zIndex = "-1";
        },1500);
        return;
    }

    values.email = email;
    const response = await createStudent(values);
    sessionStorage.setItem("email", values.email);
    if(!response){
        //new email
        document.querySelector("body").classList.add("fadeout");
        window.setTimeout(() => {
            window.location.href = "../survey.html";
        },3000);
    }
    else{
        //email exists
        if(type === "continue"){
           const student = await getStudent(values.email);
            if(student.progress === "complete"){
                document.querySelector("#popup").style.color = "springgreen";
                document.querySelector("#window-symbol").innerHTML = "&#10003;";
                document.querySelector("#window-message").innerHTML = "Submission complete, please start a new submission";
                document.querySelector("#popup").style.opacity = "0.9";
                document.querySelector("#popup").style.zIndex = "0";
                window.setTimeout(() => {
                    document.querySelector("#popup").style.opacity = "0";
                    document.querySelector("#popup").style.zIndex = "-1";
                },1500);
                return;
            }
           document.querySelector("#popup").style.color = "springgreen";
            document.querySelector("#window-symbol").innerHTML = "&#10003;";
            document.querySelector("#window-message").innerHTML = "You will be redirected shortly.";
            document.querySelector("#popup").style.opacity = "0.9";
            document.querySelector("#popup").style.zIndex = "0";
            window.setTimeout(() => {
                window.location.href = `../${student.progress}.html`;
            },3000);
            return;
        }
        document.querySelector("#email").style.border = "2px solid red";
        document.querySelector("#popup").style.color = "red";
        document.querySelector("#window-symbol").innerHTML = "&#10005;";
        document.querySelector("#window-message").innerHTML = "Email already exists!";
        document.querySelector("#popup").style.opacity = "0.9";
        document.querySelector("#popup").style.zIndex = "0";
        window.setTimeout(() => {
            document.querySelector("#popup").style.opacity = "0";
            document.querySelector("#popup").style.zIndex = "-1";
        },1500);
    }

}

async function moderatorForm(){
    const values = {};
    values.username = document.querySelector("#username").value;
    values.password = document.querySelector("#password").value;
    const user = await readUser(values.username, values.password);
    if (user.exists) {
        document.querySelector("body").classList.add("fadeout");
        window.setTimeout(() => {
            window.location.href = "../survey-statistics.html";
        },3000);
    } else {
        alarm.play();
        alert("Incorrect email or password!");
    }
}