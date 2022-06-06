import {getStats} from "../repositories/StudentRepository.js"

document.addEventListener("DOMContentLoaded", start);

async function start(){
    document.querySelector("body").classList.remove("fadeout");
    const {count, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10} = await getStats();

    const x = [];
    const question = [];
    question[0]=q1;
    question[1]=q2;
    question[2]=q3;
    question[3]=q4;
    question[4]=q5;
    question[5]=q6;
    question[6]=q7;
    question[7]=q8;
    question[8]=q9;
    question[9]=q10;

    for(let j=0; j<10; j++) {
        for (let i = 0; i < 5; i++) {
            x[i] = 0;
        }
        await fillStats(x, question[j], count, `#question${j+1} > div`);
    }

}

async function fillStats(x, question, count, selector){
    for(let i=0; i<question.length; i++)
        x[(question[i]._id - 1)] = question[i].count;

    for(let i=0; i<5; i++){
        x[i] = ((Number(x[i])/count[0].count)*100).toFixed();
        document.querySelector(selector).innerHTML += `<span>${x[i]}%</span>`;
    }
}