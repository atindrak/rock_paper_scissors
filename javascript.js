// // 1 = rock 2 = paper  3 = scissors

// const intro = document.querySelector("#txt");
// const userName = document.querySelector(".user");
// const parUser = document.createElement("p");
// parUser.textContent = `${intro.value}`;
// userName.appendChild(parUser);


// function userPLay(){
//    let user;
//     const rock = document.querySelector(".rock");
//     const paper = document.querySelector(".paper");
//     const sci = document.querySelector(".sci");
//     rock.addEventListener("click",()=>{
//         user = 1;
//     });
//     paper.addEventListener("click",()=>{
//         user = 2;
//     });
//     sci.addEventListener("click",()=>{
//         user = 3;
//     });
//     return user;
// }

// function compPlay(){
//     const ran = Math.floor(Math.random()*3)+1;
//     return ran;
// }


// // main function
// let userScore=0,compScore=0;
// const rct = document.querySelector(".roundCt p");
// const comp = document.querySelector(".comp");

// function play(){
//     let user = userPLay();
//     let com = compPlay();

//     if(user===2 && com===1){ //user
//         userScore++;
//     }
//     else if(user===2 && com===3){ //comp
//         compScore++;
//     }
//     else if(user===1 && com===2){//comp
//         compScore++;
//     }
//     else if(user===1 && com===3){//user
//         userScore++;
//     }
//     else if(user===3 && com===2){//user
//         userScore++;
//     }
//     else if(user===3 && com===1){//comp
//         compScore++;
//     }
//     else if(user===com){//draw

//     }
// }

// function playGame(){
//     let rctNum = 1;
//     const userScoreDisplay = document.createElement("p");
//     const compScoreDisplay = document.createElement("p");
//     userName.appendChild(userScoreDisplay);
//     comp.appendChild(compScoreDisplay);
//     while(userScore!=5 && compScore!=5){
//         rct.textContent = `Round : ${rctNum}`;
//         userScoreDisplay.textContent = `The ${intro.value} score is: ${userScore}`;
//         compScoreDisplay.textContent = `The value of Cmputer is: ${compScore}`;
//         play();
//         rctNum++;
//     }
// }

// let playButton = document.querySelector(".play");
// playButton.addEventListener("click",()=>{
//     playGame();
// });

// let fin = document.querySelector(".final_statement");
// let paraFin = document.createElement("p");
// let res = document.createElement("button");
// if(userScore===compScore){
//     paraFin.textContent = "Its is a draw Wanna Play Again";
// }
// else if(userScore>compScore){
//     paraFin.textContent = `Yay ${intro.value} you won Wanna Play Again`;
// }
// else{
//     paraFin.textContent = "Well played The computer won Wanna Play Again";
// }
// fin.appendChild(paraFin);

// fin.appendChild(res);
// res.textContent = "Restart";
// res.addEventListener("click",()=>{
//     fin.remove(paraFin);
//     userScore=0;
//     compScore=0;
//     playGame();
// });


// 1 = rock, 2 = paper, 3 = scissors
const intro = document.querySelector("#txt");
const userName = document.querySelector(".user");
const comp = document.querySelector(".comp");
const rct = document.querySelector(".roundCt p");
const fin = document.querySelector(".final_statement");

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const sciBtn = document.querySelector(".sci");
const playBtn = document.querySelector(".play");

// create score displays once
const userScoreDisplay = document.createElement("p");
const compScoreDisplay = document.createElement("p");
userName.appendChild(userScoreDisplay);
comp.appendChild(compScoreDisplay);

let userScore = 0, compScore = 0, round = 1;
let playing = false;

function compPlay() {
    return Math.floor(Math.random() * 3) + 1;
}

function updateDisplay() {
    rct.textContent = `Round : ${round}`;
    userScoreDisplay.textContent = `The ${intro.value} score is: ${userScore}`;
    compScoreDisplay.textContent = `The score of Computer is: ${compScore}`;
}

function playRound(user) {
    if (!playing) return;           // ignore clicks before Play / after game over
    const com = compPlay();

    if(user !== com){             // draw = do nothing
        const userWins =
            (user === 1 && com === 3) ||
            (user === 2 && com === 1) ||
            (user === 3 && com === 2);
        if (userWins) userScore++;
        else compScore++;
    }

    round++;
    updateDisplay();

    if (userScore === 5 || compScore === 5) endGame();
}

function startGame() {
    userScore = 0;
    compScore = 0;
    round = 1;
    playing = true;
    fin.innerHTML = "";             // clears old message + restart button
    updateDisplay();
}

function endGame() {
    playing = false;
    const paraFin = document.createElement("p");

    if (userScore > compScore) {
        paraFin.textContent = `Yay ${intro.value} you won! Wanna play again?`;
    } else {
        paraFin.textContent = "Well played, the computer won! Wanna play again?";
    }

    const res = document.createElement("button");
    res.textContent = "Restart";
    res.addEventListener("click", startGame);

    fin.appendChild(paraFin);
    fin.appendChild(res);
}

// listeners attached ONCE
rockBtn.addEventListener("click", () => playRound(1));
paperBtn.addEventListener("click", () => playRound(2));
sciBtn.addEventListener("click", () => playRound(3));
playBtn.addEventListener("click", startGame);
