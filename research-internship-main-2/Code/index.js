

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



}




  