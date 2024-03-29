import {getStats} from "../repositories/StudentRepository.js"

document.addEventListener("DOMContentLoaded", start);

async function start(){
    document.querySelector("body").classList.remove("fadeout");
    const rezponse = await getStats();
    const results = rezponse.statAnalysis;
    const count = rezponse.participants;
    const x = [];
    const temp = [];
    results.forEach((element) => {
        x.push(element);
    })
    for(let j=0; j<10; j++) {
        for (let i = 0; i < 5; i++) {
            temp[i] = 0;
        }
        await fillStats(temp, x[j], count, `#question${j+1} > div`);
    }

}

async function fillStats(filledArray, question, count, selector){
    for(let i=0; i<question.length; i++) {
        filledArray[(question[i]._id - 1)] = question[i].count;
    }

    for(let i=0; i<5; i++){
        filledArray[i] = ((Number(filledArray[i])/count[0].count)*100).toFixed();
        document.querySelector(selector).innerHTML += `<span>${filledArray[i]}%</span>`;
    }
}