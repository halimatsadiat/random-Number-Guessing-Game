function randomGameNo(min,max) {
  userName = prompt("what is your name");
  while(true){
    userNo = parseInt(prompt("guess a number between " + min + " and " + max));
     randomNo = Math.floor(Math.random() * (max - min + 1) + min);
    let score = max - 2
    if(userNo == randomNo){
      max = max + 1
        // console.log("the random number is " + randomNo );
  }
    else{
      return 'Oops, ' + userName + ', Game Over, The random number was ' + randomNo + '. Your total score is ' + score;
              break;
    } 
  }
}

  

console.log(randomGameNo(1,2))
