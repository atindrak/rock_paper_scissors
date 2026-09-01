let userName = prompt("Enter your username: ")
let m = parseFloat(prompt("Enter the rounds of game you want to play:"));
let userScore = 0,compScore = 0;

function userPLay(){
    let str = prompt("Enter the option you wanna select: ");
    let userStr;
    if(str[0]==='r' || str[0]==='R'){
        userStr = "Rock";
    }
    else if(str[0]==='p' || str[0]==='P'){
        userStr = "Paper";
    }
    else if(str[0]==='s' || str[0]==='S'){
        userStr = "Scissors";
    }
    console.log("User: "+userStr)
    return userStr;
}

function compPlay(){
    let ran = Math.floor(Math.random()*10)+1;
    let compStr;
    if(ran>=1 && ran<=3){
        compStr = "Rock";
    }
    else if(ran>=4 && ran<=7){
        compStr = "Paper";
    }
    else{
        compStr = "Scissors";
    }
    console.log("Comp: "+compStr);
    return compStr;
}



function play(){
    let user = userPLay()
    let com = compPlay()
    if(user==="Paper" && com==="Rock"){
        userScore++;
        console.log("The user won")
        console.log(`The User score: ${userScore} and Comp score: ${compScore}`)
    }
    else if(user==="Paper" && com==="Scissors"){
        compScore++;
        console.log("The comp won ")
        console.log(`The User score: ${userScore} and Comp score: ${compScore}`)   
    }
    else if(user==="Rock" && com==="Paper"){
        compScore++;
        console.log("The comp won ");
        console.log(`The User score: ${userScore} and Comp score: ${compScore}`) 

    }
    else if(user==="Rock" && com==="Scissors"){
        userScore++;
        console.log("The user won "+userScore);
        console.log(`The User score: ${userScore} and Comp score: ${compScore}`)  

    }
    else if(user==="Scissors" && com==="Paper"){
        userScore++;
        console.log("The user won "+userScore);
        console.log(`The User score: ${userScore} and Comp score: ${compScore}`)
    }
    else if(user==="Scissors" && com==="Rock"){
        compScore++;
        console.log("The comp won "+userScore);
        console.log(`The User score: ${userScore} and Comp score: ${compScore}`)
    }
    else if(user===com){
        console.log("Its a draw");
        console.log(`The User score: ${userScore} and Comp score: ${compScore}`)
    }   
    else{
        console.log("Undefined")
    }
}


for(let i=0;i<m;i++){
    console.log(`-------------- The Round ${i+1} ---------------`)
    play()
}  

if(userScore===compScore){
    alert("Its a draw")
    alert("Reload to play again")
}
else if(userScore>compScore){
    alert("Congo you have won the game User: "+userName)
    alert("Reload to play again")
}
else{
    alert("Congo you have lost the game to a Computer")
    alert("Reload to play again")
}
