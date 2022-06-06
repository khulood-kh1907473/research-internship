function submit() {
 
    window.location.href = "test.html";
    // document.getElementById("score").innerHTML = "Yes";   
    
    // greeting = "hello! " + document.getElementById('studentName').value;
    //   score = "Your result is: " + document.getElementById("score").value;
    //   message = greeting + "\n" + score;
    //   // msg = "hello! " + name;
    //   document.getElementById("boxTxt").innerHTML = message;
    //   document.getElementById("boxBack").classList.add("show");
  
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
  
    document.getElementById("score").innerHTML = "Score: " + score + " /  4 " 
  
    if (score==4){
      alert('Invalid name given.');
      // document.getElementById("excellent").style.display = "block";
      // document.getElementById("veryGood").style.display = "none";
      // document.getElementById("good").style.display = "none";
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
  
  