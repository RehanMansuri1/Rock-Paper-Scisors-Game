let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const userScorePa = document.querySelector("#your-score")
const compScorePa = document.querySelector("#comp-score");


const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const renIdx = Math.floor(Math.random() * 3);
    return option[renIdx]
}


const drawGame = (userChoice, compChoice) => {
    msg.innerText = `Game Draw , computer choice ${compChoice} &  your choice ${userChoice}`;
    msg.style.backgroundColor = "081b31";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You Win , your ${userChoice} beats computer ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePa.innerText = userScore;

    } else {
        msg.innerText = `You lose , computer ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePa.innerText = compScore;


    }
}

const playGame = (userChoice) => {
    console.log("User Choice", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice ", compChoice);

    if (userChoice === compChoice) {
        drawGame(userChoice, compChoice);
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})
