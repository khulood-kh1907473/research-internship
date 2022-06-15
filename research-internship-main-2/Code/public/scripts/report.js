import {getStudents} from "../repositories/StudentRepository.js";

document.addEventListener("DOMContentLoaded", start);
const buttonClicked = new Audio("media/buttonClicked.mp3");


async function start(){
    const submit = document.querySelector("#submit");
    submit.addEventListener("click", async () => {
        buttonClicked.play();
        await generateReport();
    })
}

async function generateReport(){
    const students = await getStudents();

    const data = [];
    const flat = (obj) => Object.values(obj).flat();
    students.forEach((element) => {
        data.push(flat(element));
    });
    data.unshift(["role","email","progress",
        "survey-question-1", "survey-question-2","survey-question-3","survey-question-4","survey-question-5",
        "survey-question-6","survey-question-7","survey-question-8","survey-question-9","survey-question-10",
        "test-question-1","test-question-2","test-question-3","test-question-4","test-question-5",
        "test-question-6","test-question-7",
        "postsurvey-question-1", "postsurvey-question-2","postsurvey-question-3","postsurvey-question-4","postsurvey-question-5",
        "postsurvey-question-6","postsurvey-question-7","postsurvey-question-8","postsurvey-question-9","postsurvey-question-10",
        "postsurvey-question-11","postsurvey-question-12",
        "date"]);
    const csvFile = await dataToCSV(data);
   await downloadFile(csvFile, 'studentSurvey.csv', 'text/csv;charset=utf-8;')
 }

async function dataToCSV(data){
    return data.map(row =>
            row
            .map(String).map(v => v.replaceAll('"', '""'))
            .map(v => `"${v}"`).join(','))
            .join('\r\n');

}

async function downloadFile(content, filename, contentHeader) {
    const binaryFile = new Blob([content], { type: contentHeader });
    let url = URL.createObjectURL(binaryFile);
    let downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.setAttribute('download', filename);
    downloadLink.click();
}