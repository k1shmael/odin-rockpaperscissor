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

    ///Code for the Rock Button

    const rockButton = document.querySelector('#rock');
    rockButton.addEventListener('click', () => {
    const computer = getComputerChoice("paper","rock","scissors");
    const rock= document.createElement('div');
    rock.textContent = 'You Picked Rock!'   
    const contain = document.querySelector('#container')
    contain.appendChild(rock)   
    const compResult =document.createElement('div')
    compResult.textContent=(`The computer picked ${computer}!`)
    contain.appendChild(compResult);

    if(computer=== "rock" ){

        const tie =  document.createElement('div');
        tie.textContent = 'You and the Computer tied!';
        const contain = document.querySelector('#container')
        contain.appendChild(tie);
    }
    else if(computer === "paper"){

        const  win = document.createElement('div');
        win.textContent = "You win!";
        const contain = document.querySelector('#container')
        contain.appendChild(win);
        }

        else{
            const lose = document.createElement(div);
            lose.textContent = "You lost!";
            const contain = document.querySelector('#container')
            contain.appendChild(lose)
  }
});



/// Code for the Paper Button


    const paperButton = document.querySelector('#paper');
    paperButton.addEventListener('click', () => {
    const computer = getComputerChoice("paper","rock","scissors");
    const paper= document.createElement('div');
    paper.textContent = ('You Picked Paper!');
    const contain = document.querySelector('#container')
    contain.appendChild(paper) ;




    });

    ///Code for the Scissors Button

    const scissorsButton = document.querySelector('#scissors');
    scissorsButton.addEventListener('click', () => {
    const scissors= document.createElement('div');
    const computer = getComputerChoice("paper","rock","scissors");
    scissors.textContent = ('You Picked Scissors!');
    const contain = document.querySelector('#container')
    contain.appendChild(scissors) 
    });



  