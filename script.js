function getComputerChoice(paper,rock,scissors){
    
    let computerChoices = [rock, paper, scissors];

    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];  


    return computerChoice ; 

}
let computerChoice = getComputerChoice("eock", "paper", "scissors");


 function userChoice() {
        let  userChoice = prompt("Rock, Paper or Scissors").toLowerCase();
   
  
    if(userChoice ===  ("rock" || "scissors" || "paper") ){


        console.log(`You picked ${userChoice}! `)

       
        

        
    }

    else{

            console.log("Try Again")
        }
    }



    userChoice();

    console.log(`The computer picked ${computerChoice}!`)

    if( (userChoice === "paper"  && computerChoice === "rock") || ( userChoice === "scissors" && computerChoice === "paper")
    || (userChoice == "rock" && computerChoice == "scissors") )
{
    console.log("You win!")
}
else{

    console.log("you lose")
}




   
   




