
function start(){
  document.getElementById("start").style.display = "none";
  document.getElementById("form").style.display = "block";
  document.getElementById('timer').innerHTML =
      01 + ":" + 00;
  startTimer();


  function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
    if(m<0){
      return
    }

    document.getElementById('timer').innerHTML =
        m + ":" + s;
    console.log(m)
    setTimeout(startTimer, 1000);

  }

  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
  }
}
function myFunction() {

  score = 0
  let answer1 = document.getElementById("less").checked
  let answer2 = document.getElementById("true2").checked
  let answer3 = document.getElementById("true3").checked
  let answer4 = document.getElementById("answer44").checked

  if (answer1 == true )
    score = score + 1
  if (answer2 == true)
    score = score + 1
  if (answer3 == true)
    score = score + 1
  if (answer4 == true)
    score = score + 1

  document.getElementById("score").innerHTML = "Score: " + score + " / 4  "

  if (score==4){
    document.getElementById("excellent").style.display = "block";
    document.getElementById("veryGood").style.display = "none";
    document.getElementById("good").style.display = "none";
  }
  else if (score < 4 && score >2){
    document.getElementById("excellent").style.display = "none";
    document.getElementById("veryGood").style.display = "block";
    document.getElementById("good").style.display = "none";
  }else{
    document.getElementById("excellent").style.display = "none";
    document.getElementById("veryGood").style.display = "none";
    document.getElementById("good").style.display = "block";
  }

}




