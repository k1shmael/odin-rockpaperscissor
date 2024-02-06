function getComputerChoice(paper,rock,scissors){
    
    let computerChoices = [rock, paper, scissors];

    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];  

    


    return computerChoice ; 
}

let playerPoints = 0;
let compPoints = 0;




   

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
    else if(computer === "scissors"){

        const  win = document.createElement('div');
        win.textContent = "You win!";
        const contain = document.querySelector('#container')
        contain.appendChild(win);
         playerPoints++
       
        }

        else if(computer === "paper"){
            const lose = document.createElement('div');
            lose.textContent = "You lost!";
            const contain = document.querySelector('#container');
            contain.appendChild(lose);
             compPoints++
            
  }
  console.log("Player Points:", playerPoints);
    console.log("Computer Points:", compPoints);
    
    if(playerPoints === 5){
        window.open('win.html')
     
         
       }
     else if(compPoints === 5){
        window.open('lose.html')
     
       
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
    const compResult =document.createElement('div')
    compResult.textContent=(`The computer picked ${computer}!`)
    contain.appendChild(compResult);


    if(computer=== "paper" ){

        const tie =  document.createElement('div');
        tie.textContent = 'You and the Computer tied!';
        const contain = document.querySelector('#container')
        contain.appendChild(tie);
    }
    else if(computer === "rock"){

        const  win = document.createElement('div');
        win.textContent = "You win!";
        const contain = document.querySelector('#container')
        contain.appendChild(win);
         playerPoints++
      
        }

        else if(computer === "scissors"){
            const lose = document.createElement('div');
            lose.textContent = "You lost!";
            const contain = document.querySelector('#container')
            contain.appendChild(lose)
            compPoints++
        
  }
  console.log("Player Points:", playerPoints);
    console.log("Computer Points:", compPoints);

    if(playerPoints === 5){
        window.open('win.html')
     
         
       }
     else if(compPoints === 5){
        window.open('lose.html')
     
       
     }




    });

    ///Code for the Scissors Button

    const scissorsButton = document.querySelector('#scissors');
    scissorsButton.addEventListener('click', () => {
    const scissors= document.createElement('div');
    const computer = getComputerChoice("paper","rock","scissors");
    scissors.textContent = ('You Picked Scissors!');
    const contain = document.querySelector('#container')
    contain.appendChild(scissors) 


    if(computer=== "scissors" ){

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
         playerPoints++
     
        }

        else if(computer === "rock"){
            const lose = document.createElement('div');
            lose.textContent = "You lost!";
            const contain = document.querySelector('#container')
            contain.appendChild(lose)
            return compPoints++
            
  }
  console.log("Player Points:", playerPoints);
    console.log("Computer Points:", compPoints);

    if(playerPoints === 5){
        window.open('win.html')
     
         
       }
     else if(compPoints === 5){
        window.open('lose.html')
     
       
     }
    });

    
    
    


    

    












  