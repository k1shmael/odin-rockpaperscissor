function getComputerChoice(paper,rock,scissors){
    
    let computerChoices = [rock, paper, scissors];

    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];  


    return computerChoice ; 

}



function userChoices() {
        let  userChoice = prompt("Rock, Paper or Scissors").toLowerCase();
   
  
    if (userChoice === ("rock") || ("scissors")|| ("paper"))  {


        console.log(`You picked ${userChoice}! `)

       }
       
       else{

            console.log("Try Again")
    }

    return userChoice;
    }


  
    
   let computerChoice = getComputerChoice("rock", "paper", "scissors");
   let userChoice = userChoices();
   let tie = 0;
   let win = 0;
   let lose = 0;
   

    console.log(`The computer picked ${computerChoice}!`)

if( (userChoice === "paper"  && computerChoice === "rock") || ( userChoice === "scissors" && computerChoice === "paper")
    || (userChoice == "rock" && computerChoice == "scissors") )
{
    console.log(`You win! ${userChoice} beats ${computerChoice}`)
    win++
}
else if(userChoice === computerChoice)
{
    console.log(` Tie! You and the computer both picked ${userChoice}`) 
    tie++
}
else{
    console.log(`You lose! ${computerChoice} beats ${userChoice}`)
    lose++


}
    console.log(`You won ${win} times`)
    console.log(`You lose ${lose}`)
    console.log(`You tied ${tie} times`)
    





   
   




