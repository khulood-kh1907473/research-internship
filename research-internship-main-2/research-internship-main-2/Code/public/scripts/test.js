// function dbox() {

//     document.getElementById("form").style.display = "block";
//     document.getElementById("boxTxt").innerHTML = "Feedback";
//     document.getElementById("boxBack").classList.add("show");

//   }



function changedButton(){

  if (document.getElementById("start").innerHTML == "Submit") {
      document.getElementById("start").innerHTML = "Start";
      submitFunction();
  }
  else{
      document.getElementById("start").innerHTML = "Submit";
      validateName();
  }
}

function submitFunction(){
  // document.getElementById("score").innerHTML = "/77";
  // score = document.getElementById("score").value;
  //showScore();
  document.getElementById("boxTxt").innerHTML = "Your score is: " + showScore() + " /4"; 
  document.getElementById("boxBack").classList.add("show");
}

function feedBack () {
  document.getElementById("boxBack").classList.remove("show"); 
  window.location.href = "result.html";
}

function showScore()
{
  score = 0
    let answer1 = document.getElementById("QuestionOneAnswerOne").checked;
    let answer2 = document.getElementById("QuestionTwoAnswerFour").checked;
    let answer3 = document.getElementById("QuestionThreeAnswerThree").checked;
    let answer4 = document.getElementById("QuestionFourAnswerOne").checked;
  
    if (answer1 == true)
      score = score + 1
    if (answer2 == true)
      score = score + 1
    if (answer3 == true)
      score = score + 1
    if (answer4 == true)
      score = score + 1
    
    //document.getElementById("score").innerHTML = "Score: 4" + score + " / 4  "; 
    return score;
}

function validateName() {
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  var name = document.getElementById('studentName').value;
  if(!regName.test(name)){
    alert('Invalid name given.');
  }else{
    start()
  }
}

function start() {
  document.getElementById("studentName").setAttribute('readonly', true);
  document.getElementById("form").style.display = "block";
  document.getElementById('timer').innerHTML = 07 + ":" + 00;
  startTimer();
}

function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){
      m=m-1
    }
      if(m<0){
        return
      }
    document.getElementById('timer').innerHTML = m + ":" + s;
    setTimeout(startTimer, 1000);
    if (m == 0 && s <=59){
      document.getElementById("timeLeft").style.color = "red";
    }
}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
}