function getComputerChoice(paper,rock,scissors){
    
    let computerChoices = [rock, paper, scissors];

    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];  


    return computerChoice ; 

}

   
   
   
let  userChoice = prompt("Rock, Paper or Scissors")
   
   do {

    
    
    
   


   if(userChoice ===  ("rock" || "scissors" || "paper") ){


        console.log(`You picked ${userChoice}! `)
        

        
    }

    else{

            console.log("Try Again")
        }

    }  while(userChoice != ("rock" || "scissors" || "paper"))


    
    
    
    
    ///console.log(`The computer picked ${computerChoice}!`)




   
   




