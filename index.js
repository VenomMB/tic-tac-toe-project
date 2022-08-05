const startGameEvent = new Event("gameStarted");

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById("startGame");

    button.onclick = () => {
        const gameContainer = document.querySelector(".container");
        const mainMenu = document.querySelector(".mainMenu");
        gameContainer.style.display = "flex";
        mainMenu.style.display = "none"
        document.dispatchEvent(startGameEvent);
    }

    document.addEventListener('gameStarted', () => {
        let listOfTicTacToe = Array(9).fill(0).map((_, index) => { return { id: index, value: null, bool: true } });
        const board = document.querySelectorAll(".block");
        let flag = true;
        let sum = 0;
        function checkresult(list) {
            for (let i = 0; i < 9; i += 3) {
                if(list[i].value != null && (list[i].value == list[i+1].value && list[i].value == list[i+2].value)){
                    return true;
                }
            }
            for (let i = 0; i < 3; i ++) {
                if(list[i].value != null && (list[i].value == list[i+3].value && list[i].value == list[i+6].value)){
                    return true;
                }
            }
            for (let i = 0; i < 1; i ++) {
                if(list[i].value != null && (list[i].value == list[i+4].value && list[i].value == list[i+8].value)){
                    return true;
                }
            }
            for (let i = 2; i > 1 ; i--) {
                if(list[i].value != null && (list[i].value == list[i+2].value && list[i].value == list[i+4].value)){
                    return true;
                }
            }
            return false;

            
            
        }
        board.forEach((cell) => {
            cell.onclick = () => {
                listOfTicTacToe.forEach((object, index) => {

                    if (cell.id == object.id) {
                        if (object.bool === true) {
                            if (flag === true) {
                                listOfTicTacToe[index].value = 1;
                                cell.innerHTML = '<img src="Assets/x.png">';
                                flag = false;
                                object.bool = false;
                                let winerX = checkresult(listOfTicTacToe);
                                if(winerX == true){
                                    console.log("Win X");
                                }
                                else{
                                    console.log("Draw")
                                }
                            }
                            else {
                                listOfTicTacToe[index].value = 2;
                                cell.innerHTML = '<img src="Assets/circle.png">';
                                flag = true;
                                object.bool = false;
                                let winerO = checkresult(listOfTicTacToe);
                                if(winerO == true){
                                    console.log("Win O");
                                }
                                else{
                                    console.log("Draw")
                                }
                            }
                        }

                    }

                })
                console.log(listOfTicTacToe);
            }
        });

    });
})




