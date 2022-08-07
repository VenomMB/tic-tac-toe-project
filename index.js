import { checkresult } from './module.js';

// Custom Event
const startGameEvent = new Event("gameStarted");

const button = document.getElementById("startGame");
const game = document.getElementById("game");
const boardGame = document.getElementById("board");

const homeButton = document.querySelector(".home");
const mainMenu = document.querySelector(".mainMenu");
const resetButton = document.querySelector(".reset");

const resultElement = document.getElementById("result");
const pointsPlayer1 = document.getElementById("pointsUser1")
const pointsPlayer2 = document.getElementById("pointsUser2")

const gameStyles = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '800px',
}


let points1 = 0;
let points2 = 0;

const gameStates = {
    xWon: 'xWon',
    yWon: 'yWon',
    draw: 'draw',
}

let gameResult;

const resetGame = () => {
    game.style.display = 'flex';
    boardGame.style.display = 'grid';

    document.dispatchEvent(startGameEvent);
}

document.addEventListener('DOMContentLoaded', (event) => {


    button.onclick = () => {
        Object.entries(gameStyles).forEach(([key, value]) => {
            game.style[key] = value;
        });
        mainMenu.style.display = "none";
        document.dispatchEvent(startGameEvent);
    }
    
    homeButton.onclick = () => {

        game.style.display = "none";
        mainMenu.style.display = "flex";
    }
    
   

    document.addEventListener('gameStarted', () => {
        let listOfTicTacToe = Array(9).fill(0).map((_, index) => { return { id: index, value: null, isFilled: false } });
        const board = document.querySelectorAll(".block");
        let flag = true;

        resetButton.onclick = () => {
            console.log("Hi")
            resetGame();
        }

        board.forEach((cell) => {
            cell.onclick = () => {

                listOfTicTacToe.forEach((object, index) => {
                    if (cell.id == object.id) {
                        if (object.isFilled === false) {
                            if (flag === true) {
                                listOfTicTacToe[index].value = 1;
                                cell.innerHTML = '<img src="Assets/x.png">';
                                flag = false;
                                object.isFilled = true;
                                let winerX = checkresult(listOfTicTacToe);
                                if (winerX == true) {
                                    console.log("Win X");
                                    points1++;
                                    pointsPlayer1.innerHTML = `Player 1: ${points1}`
                                    resultElement.innerHTML = "Player 1 won"
                                    gameResult = gameStates.xWon;
                                    return;
                                }

                            }
                            else {
                                listOfTicTacToe[index].value = 2;
                                cell.innerHTML = '<img src="Assets/circle.png">';
                                flag = true;
                                object.isFilled = true;
                                let winerO = checkresult(listOfTicTacToe);
                                if (winerO == true) {
                                    console.log("Win O");
                                    points2++;
                                    pointsPlayer2.innerHTML = `Player 2: ${points2}`
                                    resultElement.innerHTML = "Player 2 won"
                                    gameResult = gameStates.yWon;
                                    return;
                                }

                            }
                        }

                    }

                })

                const isDraw = listOfTicTacToe.every((cell) => {
                    return cell.isFilled === true;
                });


                if (isDraw && checkresult(listOfTicTacToe) === false) {
                    console.log('draw!!!')
                    resultElement.innerHTML = "Draw"
                    gameResult = gameStates.draw;
                }



            }
        });

    });
})




