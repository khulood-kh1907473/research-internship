// import {getStats} from "../repositories/StudentRepository.js"
document.addEventListener("DOMContentLoaded", start);
const alarm = new Audio("media/alarmSound.mp3");
const buttonClicked = new Audio("media/buttonClicked.mp3");

async function start(){
    document.querySelector("body").classList.remove("fadeout");
    const excel_file = document.getElementById('excel_file');
    excel_file.addEventListener('change', (event) => {
        event.preventDefault();
        readExcel();
    });  
}

function readExcel(){
    var question1Result = 0;
    var question2Result = 0;
    var question3Result = 0;
    var question4Result = 0;
    var question5Result = 0;
    var question6Result = 0;
    var question7Result = 0;
    
    if(!['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'].includes(event.target.files[0].type))
        {
            alarm.play();
            document.getElementById('excel_data').innerHTML = '<div class="alert alert-danger">Only .xlsx or .xls file format are allowed</div>';
            return false;
        }
    document.getElementById('excel_data').innerHTML = " ";
    var reader = new FileReader();
    reader.readAsArrayBuffer(event.target.files[0]);
    reader.onload = function(event){
        var data = new Uint8Array(reader.result);
        var work_book = XLSX.read(data, {type:'array'});
        var sheet_name = work_book.SheetNames;
        var sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[0]], {header:1});
  
        if(sheet_data.length > 0)
        {
            for(var row = 0; row < sheet_data.length; row++)
            {
                for(var cell = 11; cell < sheet_data[row].length-1; cell++)
                {
                    if (cell == 11){
                        if (sheet_data[row][11] == "1"){
                            question1Result += parseInt(sheet_data[row][11]);
                        }
                    }
                    if (cell == 12){
                        if (sheet_data[row][12] == "1"){
                            question2Result += parseInt(sheet_data[row][12]);
                        }
                    }
                    if (cell == 13){
                        if (sheet_data[row][13] == "1"){
                            question3Result += parseInt(sheet_data[row][13]);
                        }
                    }
                    if (cell == 14){
                        if (sheet_data[row][14] == "1"){
                            question4Result += parseInt(sheet_data[row][14]);
                        }
                    }
                    if (cell == 15){
                        if (sheet_data[row][15] == "1"){
                            question5Result += parseInt(sheet_data[row][15]);
                        }
                    }
                    if (cell == 16){
                        if (sheet_data[row][16] == "1"){
                            question6Result += parseInt(sheet_data[row][16]);
                        }
                    }
                    if (cell == 17){
                        if (sheet_data[row][17] == "1"){
                            question7Result += parseInt(sheet_data[row][17]);
                        }
                    }
                }         
            }

            question1Result = (question1Result/(sheet_data.length-2))*100;
            question2Result = (question2Result/(sheet_data.length-2))*100;
            question3Result = (question3Result/(sheet_data.length-2))*100;
            question4Result = (question4Result/(sheet_data.length-2))*100;
            question5Result = (question5Result/(sheet_data.length-2))*100;
            question6Result = (question6Result/(sheet_data.length-2))*100;
            question7Result = (question7Result/(sheet_data.length-2))*100;
            showDiagram(question1Result, question2Result, question3Result, question4Result, question5Result, question6Result, question7Result);
        }
        excel_file.value = '';
    }
}

function showDiagram(value1, value2, value3, value4, value5, value6, value7){
    document.getElementById("testTitle").innerHTML = "Rational Function Test Result";
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7'],
        datasets: [{
            label: 'Question Score Ratio',
            data: [value1, value2, value3, value4, value5, value6, value7],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}



