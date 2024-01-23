function getComputerChoice(paper,rock,scissors){
    
    let computerChoices = [rock, paper, scissors];

    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];  


    return computerChoice ; 

}

   const  computerChoice = getComputerChoice("rock", "paper", "scissors")
   const    userChoice = prompt("Pick rock paper or scissors")

   console.log(`You picked ${userChoice}! `)
   console.log(`The computer picked ${computerChoice}!`)


   
   




