let userScore =  0;
let compScore = 0;

const body = document.querySelector("body");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const showWinner = () =>{
    if(userScore == 5){
        body.innerHTML = "<div class='result'><i>Congratulations, YOU WIN!!</i></div>"
        let res = document.querySelector(".result");
        res.setAttribute("style","height:15rem; line-height:15rem; width:30rem; border-radius:3rem; background-color:#081b31; color:white; font-size:xx-large; font-weight:800; position:fixed; top:33.33vh; left:33.33vw")
    }
    if(compScore == 5){
        body.innerHTML = "<div class='result'><i>Oops, YOU LOSE!!</i></div>"
        let res = document.querySelector(".result");
        res.setAttribute("style","height:15rem; line-height:15rem; width:30rem; border-radius:3rem; background-color:#081b31; color:white; font-size:xx-large; font-weight: 800; position:fixed; top:33.33vh; left:33.33vw;")
    }
}

const genCompChoice = () =>{
    const options = ["stone","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userCh) =>{
    console.log(`user choice = ${userCh}`)
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice =",compChoice)

    let compHtmlScore = document.querySelector("#comp-score");
    let userHtmlScore = document.querySelector("#user-score");

    if(userCh === compChoice){
        msg.innerText = "Its a draw !";
        msg.classList.add("draw");
        msg.classList.remove("winning");
        msg.classList.remove("losing");
    }
    else if(userCh === "stone" && compChoice === "paper"){
        compScore += 1;
        compHtmlScore.innerText = `${compScore}`;
        msg.innerText = "You lose! Stone is covered by paper";
        msg.classList.add("losing");
        msg.classList.remove("winning");
        msg.classList.remove("draw");
    }
    else if(userCh === "stone" && compChoice === "scissors"){
        userScore += 1;
        userHtmlScore.innerText = `${userScore}`;
        msg.innerText = "You win! Stone breaks scissors.";
        msg.classList.add("winning");
        msg.classList.remove("losing");
        msg.classList.remove("draw");
    }
    else if(userCh === "paper" && compChoice === "stone"){
        userScore += 1;
        userHtmlScore.innerText = `${userScore}`;
        msg.innerText = "You win! Paper covers stone.";
        msg.classList.add("winning");
        msg.classList.remove("losing");
        msg.classList.remove("draw");
    }
    else if(userCh === "paper" && compChoice === "scissors"){
        compScore += 1;
        compHtmlScore.innerText = `${compScore}`;
        msg.innerText = "You lose! Paper is cut by scissors.";
        msg.classList.add("losing");
        msg.classList.remove("winning");
        msg.classList.remove("draw");
    }
    else if(userCh === "scissors" && compChoice === "stone"){
        compScore += 1;
        compHtmlScore.innerText = `${compScore}`;
        msg.innerText = "You lose! Scissors is broken by stone."; 
        msg.classList.add("losing");
        msg.classList.remove("winning");
        msg.classList.remove("draw"); 
    }
    else //when userChoice=scissors && compChoice=paper
        {
            userScore += 1;
            userHtmlScore.innerText = `${userScore}`;
            msg.innerText = "You win! Scissors cuts paper";
            msg.classList.add("winning");
            msg.classList.remove("losing");
            msg.classList.remove("draw");
    }
    showWinner();
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})