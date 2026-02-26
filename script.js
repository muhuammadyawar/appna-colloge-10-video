let UserScore = 0;
let ComScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScore1 = document.querySelector("#user-score")
const compScore1 = document.querySelector("#com-score")

const genCompChoice = () => {
    const option = ["Rock", "Paper", "Scissor"]
    const randomId = Math.floor(Math.random() * 3);
    return option[randomId];
}


const drawGame = () => {
    // console.log("draw your game")
    msg.innerText = "game was draw play again";
    msg.style.backgroundColor = "blue";
}
const showWinner = (userWin, UserChoice, compChoice) => {
    if (userWin) {
        // console.log("your win the match!");
        UserScore++;
        userScore1.innerText = UserScore;
        msg.innerText = `you win!.  your ${UserChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        ComScore++;
        compScore1.innerText = ComScore;
        // console.log("your are lose");
        msg.innerText = `you lost.  ${compChoice} beat your ${UserChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const PlayChoice = (UserChoice) => {
    console.log("user choice is =", UserChoice);
    const compChoice = genCompChoice();
    console.log("computer choice is =", compChoice);

    if (UserChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (UserChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (UserChoice === "paper") {
            userWin = compChoice === "Scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, UserChoice, compChoice);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const UserChoice = choice.getAttribute("id");
        // console.log("choice was clicked",UserChoice);
        PlayChoice(UserChoice);
    });
});