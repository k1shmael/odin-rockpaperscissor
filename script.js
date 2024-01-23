function getComputerChoice(paper,rock,scissors){
    
    let computerChoices = [rock, paper, scissors];

    const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];  


    return computerChoice ; 

}

   const  computerChoice = getComputerChoice("rock", "paper", "scissors")
   const    userChoice = prompt("Pick rock paper or scissors")
   
   if (userChoice = "rock" )




