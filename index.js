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

    });
})




