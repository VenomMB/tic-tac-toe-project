// import { checkresult } from 'module';
const startGameEvent = new Event("gameStarted");
// document.addEventListener('DOMContentLoaded', (event) => {
//     const startGameButton = document.getElementById("startGame");
//     startGameButton.onclick = () => {
//         const mainMenu = document.querySelector(".mainMenu");
//         const forms = document.getElementsByTagName("form");
//         mainMenu.style.display = "none";
//         forms.style.display = "flex";
//     }
// })

const gameStates = {
    xWon: 'xWon',
    yWon: 'yWon',
    draw: 'draw',
}

let gameResult;

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById("startGame");
    const homeButton = document.querySelector(".home");
    const resetButton = document.querySelector(".reset");

    button.onclick = () => {
        const game = document.getElementById("game");
        const mainMenu = document.querySelector(".mainMenu");
        game.style.display = "block";
        mainMenu.style.display = "none";
        document.dispatchEvent(startGameEvent);
    }
    homeButton.onclick = () => {
        const game = document.getElementById("game");
        const mainMenu = document.querySelector(".mainMenu");
        game.style.display = "none";
        mainMenu.style.display = "flex";
    }
    resetButton.onclick = () => {

    }

    document.addEventListener('gameStarted', () => {
        let listOfTicTacToe = Array(9).fill(0).map((_, index) => { return { id: index, value: null, isFilled: false } });
        const board = document.querySelectorAll(".block");
        let flag = true;
        function checkresult(list) {
            for (let i = 0; i < 9; i += 3) {
                if (list[i].value != null && (list[i].value == list[i + 1].value && list[i].value == list[i + 2].value)) {
                    return true;
                }
            }
            for (let i = 0; i < 3; i++) {
                if (list[i].value != null && (list[i].value == list[i + 3].value && list[i].value == list[i + 6].value)) {
                    return true;
                }
            }
            for (let i = 0; i < 1; i++) {
                if (list[i].value != null && (list[i].value == list[i + 4].value && list[i].value == list[i + 8].value)) {
                    return true;
                }
            }
            for (let i = 2; i > 1; i--) {
                if (list[i].value != null && (list[i].value == list[i + 2].value && list[i].value == list[i + 4].value)) {
                    return true;
                }
            }
            return false;



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


                if (isDraw) {
                    console.log('draw!!!')
                    gameResult = gameStates.draw;
                }



            }
        });

    });
})




