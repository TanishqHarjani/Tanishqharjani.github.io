let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcomputerchoice(){
    const choices = ['r','p','s'];
    const randomnumber = (Math.floor(Math.random() * 3));
    return choices[randomnumber];
}


function Game(userchoice){
 const computerchoice = getcomputerchoice();
 switch (userchoice + computerchoice){
    case "rs":
    case "pr":
    case 'sp':
        win(userchoice,computerchoice);
        break;
    case "sr":
    case "rp":
    case "ps":
        lose(userchoice,computerchoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        Draw(userchoice,computerchoice);
        break;

 }
}
function win(userchoice,computerchoice){
    userscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    result_p.innerHTML =` ${convertoword(userchoice)}  beats  ${convertoword(computerchoice)}  you win! `
    
}
function lose(userchoice,computerchoice){
    computerscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    result_p.innerHTML =` ${convertoword(userchoice)}  loses to  ${convertoword(computerchoice)}  you lose! `
    
}
function Draw(userchoice,computerchoice){
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    result_p.innerHTML =` ${convertoword(userchoice)}  doesn't beat  ${convertoword(computerchoice)}  it's a draw! `
    
}
function convertoword(letter) {
    if (letter == 'p') return "Paper";
    if (letter == 'r') return "Rock";
    return "Scissors";
    }


function main() {
rock_div.addEventListener('click',function() {
    Game("r");
})
paper_div.addEventListener('click',function() {
    Game("p");
})
scissors_div.addEventListener('click',function() {
    Game('s');
})
}
main();
