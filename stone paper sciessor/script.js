// let userscore=0;
// let compscore=0;
// const userscorepara=document.querySelector("#user-score");
// const compscorepara=document.querySelector("#comp-score");

// const choices=document.querySelectorAll(".choice");
// const msag=document.querySelector("#msg");

// const gencompchoice=()=>{
//     const options=["rock ","paper","scissor"];
//     const indx=Math.floor(Math.random()*3);
//     return options[indx];
// };

// const drawgame = () =>{
//     msag.innerText="Game Draw .Choice Again";
//     msag.style.backgroundColor="yellow";
// };

// const showwinner=(Win) =>{
//     if(Win){
//         console.log("you win");
//         userscore++;
//         userscorepara.innerText=userscore;
//         msag.innerText="You Win!.Choice Again to Play";
//         msag.style.backgroundColor="green";
//     }
//     else{
//         console.log("you lose");
//         compscore++;
//         compscorepara.innerText=compscore;
//         msag.innerText="You lose... Choice Again to Play";
//         msag.style.backgroundColor="red";
//     }
// };

// const playgame=(userchoice) =>{
//     console.log("user choice= ",userchoice);
//     const compchoice=gencompchoice();
//     console.log("computer choice= ",compchoice)
    
  
//     if (userchoice === compchoice){        
//         drawgame()
                   
//     } 
//     else{
//         let userWin=true;
//         if(userchoice  === "rock"){
//             //scissor , paper
//             if (compchoice === "paper") {
//                 userWin = false;
//             } else {
//                 userWin = true;
//             }
            
//         }
//         else if(userchoice === "paper"){
//             // rock ,scissor
//             if (compchoice === "scissor") {
//                 userWin = false;
//             } else {
//                 userWin = true;
//             }
            
//         }
//         else{
//             // rock ,paper
//             if (compchoice === "rock") {
//                 userWin = false;
//             } else {
//                 userWin = true;
//             }
            
//         }
//         showwinner(userWin);
//     }
// };



// choices.forEach((choice)=>{     
//     choice.addEventListener("click",()=>{
//         const choiceid=choice.getAttribute("id");
        
//         playgame(choiceid);
//     })
// });

 


let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});