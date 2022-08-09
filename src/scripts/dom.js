function renderThePage() {
    const box = document.createElement("div");
    box.setAttribute("id","container")
    document.body.appendChild(box);
    
    const topBox = document.createElement("div");
    topBox.setAttribute("id","topBox");
    box.appendChild(topBox);

    const mainBox = document.createElement("div");
    mainBox.setAttribute("id","mainBox");
    box.appendChild(mainBox);

        const gameScreen = document.createElement("div");
        gameScreen.setAttribute("id","gameScreen");
        mainBox.appendChild(gameScreen);

            const leftPlayer = document.createElement("div");
            leftPlayer.setAttribute("id","leftPlayer");
            gameScreen.appendChild(leftPlayer);

                const leftPlayerShipsRemaining = document.createElement("div");
                leftPlayerShipsRemaining.setAttribute("id","leftShipCount");
                leftPlayer.appendChild(leftPlayerShipsRemaining);

                const leftPlayerBoard = document.createElement("div");
                leftPlayerBoard.setAttribute("id","human");
                leftPlayerBoard.classList.add("checkBoard");
                leftPlayer.appendChild(leftPlayerBoard);

            const rightPlayer = document.createElement("div");
            rightPlayer.setAttribute("id","rightPlayer");
            gameScreen.appendChild(rightPlayer);

                const rightPlayerShipsRemaining = document.createElement("div");
                rightPlayerShipsRemaining.setAttribute("id","rightShipCount");
                rightPlayer.appendChild(rightPlayerShipsRemaining);

                const rightPlayerBoard = document.createElement("div");
                rightPlayerBoard.setAttribute("id","ai");
                rightPlayerBoard.classList.add("checkBoard");
                rightPlayer.appendChild(rightPlayerBoard);

            const gameControlButtons = document.createElement("div");
            gameControlButtons.setAttribute("id","buttons");
            gameScreen.appendChild(gameControlButtons);

    const bottomBox = document.createElement("div");
    bottomBox.setAttribute("id","bottomBox");
    box.appendChild(bottomBox);

}

function renderTheGameboard(player) {
    console.log(player.aiOrHuman);
    console.log(player.legalSpaces);
    const leftPlayer = document.getElementById(player.aiOrHuman)
    for (var i = 0; i < player.legalSpaces.length; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.setAttribute("id",[i]);
        leftPlayer.appendChild(tile);
    }
}
export { renderThePage, renderTheGameboard }