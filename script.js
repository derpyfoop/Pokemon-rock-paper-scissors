 //DOM cache
 let trainerScore = 0;
 let joeyScore = 0;
 const trainerScoreSpan = document.getElementById("trainer-score");
 const joeyScoreSpan = document.getElementById("joey-score");
 const scoreBoardDiv = document.querySelector(".score-board");
 const resultP = document.querySelector(".result > p");
 const rockButton = document.getElementById("rock");
 const grassButton = document.getElementById("grass");
 const airButton = document.getElementById("flying");
 //

 function getJoeyChoice() {
    const choices = ["rock", "grass", "flying"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
 }

 function win(trainerChoice, joeyChoice) {
    trainerScore++;
    trainerScoreSpan.innerHTML = trainerScore;
    joeyScoreSpan.innerHTML = joeyScore;
    resultP.innerHTML = trainerChoice + " beats " + joeyChoice + ", Trainer Wins!";
 }

 function lose(trainerChoice, joeyChoice) {
    joeyScore++;
    trainerScoreSpan.innerHTML = trainerScore;
    joeyScoreSpan.innerHTML = joeyScore;
    resultP.innerHTML = trainerChoice + " loses to " + joeyChoice + ", Trainer lost...";
 }

 function draw(trainerChoice, joeyChoice) {
    resultP.innerHTML = trainerChoice + " and " + joeyChoice + " are the same type, Draw!";
 }

function game(trainerChoice) {
    const joeyChoice = getJoeyChoice();
    switch (trainerChoice + joeyChoice) {
        case "rockflying":
        case "grassrock":
        case "flyinggrass":
            win(trainerChoice, joeyChoice);
            break;
        case "rockgrass":
        case "grassflying":
        case "flyingrock":
            lose(trainerChoice, joeyChoice);
            break;
        case "rockrock":
        case "grassgrass":
        case "flyingflying":
            draw(trainerChoice, joeyChoice);
            break;

    }
}

 main();

 function main() {
    rockButton.addEventListener('click', function() {
    game("rock");
    })

    grassButton.addEventListener('click', function() {
        game("grass");
    })

    airButton.addEventListener('click', function() {
        game("flying");
    })
}