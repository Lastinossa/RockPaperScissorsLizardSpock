      function myFunction(){
        var askUser = prompt ("Time to choose", "Rock Paper Scissors Lizard Spock");
        var userChoice = askUser.toLowerCase();
        var ranNum = Math.floor(Math.random()*5);
        //var ranNum = 0;
        var compChoice;

        switch (ranNum){
          case 0:
            compChoice = "rock";
            if(compChoice === userChoice){
                colorFunction(2);
              }
            else if (userChoice === "scissors" || userChoice === "lizard"){
              if(userChoice === "scissors"){
                colorFunction(1);
                document.getElementById("bResult").innerHTML= "Rock crushes scissors.";
              }else{
                colorFunction(1);
                document.getElementById("bResult").innerHTML= "Rock crushes lizard.";
              }
            }else{
              if(userChoice === "paper"){
                colorFunction(0);
                document.getElementById("bResult").innerHTML= "Paper covers rock.";
              }else{
                colorFunction(0);
                document.getElementById("bResult").innerHTML= "Spock vaporizes rock.";
              }
            }
          break;
          case 1:
            compChoice = "paper";
            if(compChoice === userChoice){
              colorFunction(2);
            }
            else if (userChoice === "rock" || userChoice === "spock"){
              if(userChoice === "rock"){
                colorFunction(1);
                document.getElementById("bResult").innerHTML= "Paper covers rock.";
              }else{
                colorFunction(1);
                document.getElementById("bResult").innerHTML= "Paper disproves spock";
              }
            }else{
              if(userChoice === "lizard"){
                colorFunction(0);
                document.getElementById("bResult").innerHTML= "Lizard shreds paper.";
              }else{
                colorFunction(0);
                document.getElementById("bResult").innerHTML= "Scissors cuts paper.";
              }
            }
          break;
          case 2:
            compChoice = "scissors";
            if(compChoice === userChoice){
              colorFunction(2);
            }
            else if (userChoice === "paper" || userChoice === "lizard"){
              if(userChoice === "paper"){
                colorFunction(1);
                document.getElementById("bResult").innerHTML= "Scissors cuts paper.";
              }else{
                colorFunction(1);
                document.getElementById("bResult").innerHTML= "Scissors decapitates lizard.";
              }
            }else{
              if(userChoice === "rock"){
                colorFunction(0);
                document.getElementById("bResult").innerHTML= "Rock crushes scissors.";
              }else{
                colorFunction(0);
                document.getElementById("bResult").innerHTML= "Spock smashes scissors.";
              }
            }
          break;
          case 3:
            compChoice = "lizard";
            if(compChoice === userChoice){
              colorFunction(2);
            }
            else if (userChoice === "paper" || userChoice === "spock"){
              if(userChoice === "paper"){
                colorFunction(1);
                document.getElementById("bResult").innerHTML= "Lizard shreds paper.";
              }else{
                colorFunction(1);
                document.getElementById("bResult").innerHTML= "Lizard poisons Spock.";
              }
            }else{
              if(userChoice === "rock"){
                colorFunction(0);
                document.getElementById("bResult").innerHTML= "Rock crushes lizard.";
              }else{
                colorFunction(0);
                document.getElementById("bResult").innerHTML= "Scissors decapitates lizard.";
              }
            }
          break;
          case 4:
            compChoice = "spock";
            if(compChoice === userChoice){
              colorFunction(2);
            }
            else if (userChoice === "rock" || userChoice === "scissors"){
              if(userChoice === "rock"){
                colorFunction(1);
                document.getElementById("bResult").innerHTML= "Spock vaporizes rock.";
              }else{
                colorFunction(1);
                document.getElementById("bResult").innerHTML= "Spock crushes scissors.";
              }
            }else{
              if(userChoice === "lizard"){
                colorFunction(0);
                document.getElementById("bResult").innerHTML= "Lizard poisons Spock.";
              }else{
                colorFunction(0);
                document.getElementById("bResult").innerHTML= "Paper disproves Spock.";
              }
            }
          break;
        }

        function colorFunction(result){

          switch(result){
            case 0: {
            document.getElementById("button").classList.add("buttonVictory");
            document.getElementById("bTitle").innerHTML= "Victory";
            document.getElementById("bHidden").id = "bResult";
            break;
          }
            case 1: {
            document.getElementById("button").classList.add("buttonDefeat");
            document.getElementById("bTitle").innerHTML= "Defeat";
            document.getElementById("bHidden").id = "bResult";
            break;
          }
            case 2: {
            document.getElementById("button").classList.add("buttonDraw");
            document.getElementById("bTitle").innerHTML= "Draw";
            document.getElementById("bHidden").id = "bResult";  
            document.getElementById("bResult").innerHTML = "Creative as a computer";
            break;
          }
        }
      }


    }

    document.cookie ="playerName=";

    var session = document.cookie;

function createUser(playerName){

}