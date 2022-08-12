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

                const leftPlayerBoard = document.createElement("div");
                leftPlayerBoard.setAttribute("id","human");
                leftPlayerBoard.classList.add("checkBoard");
                leftPlayer.appendChild(leftPlayerBoard);

                const leftPlayerShipsRemaining = document.createElement("div");
                leftPlayerShipsRemaining.setAttribute("id","leftShipCount");
                leftPlayer.appendChild(leftPlayerShipsRemaining);

            const rightPlayer = document.createElement("div");
            rightPlayer.setAttribute("id","rightPlayer");
            gameScreen.appendChild(rightPlayer);

                const rightPlayerBoard = document.createElement("div");
                rightPlayerBoard.setAttribute("id","ai");
                rightPlayerBoard.classList.add("checkBoard");
                rightPlayer.appendChild(rightPlayerBoard);

                const rightPlayerShipsRemaining = document.createElement("div");
                rightPlayerShipsRemaining.setAttribute("id","rightShipCount");
                rightPlayer.appendChild(rightPlayerShipsRemaining);
            const gameControlButtons = document.createElement("div");
            gameControlButtons.setAttribute("id","buttons");
            gameScreen.appendChild(gameControlButtons);

    const bottomBox = document.createElement("div");
    bottomBox.setAttribute("id","bottomBox");
    box.appendChild(bottomBox);

}

function renderTheGameboard(player) {
    const leftPlayer = document.getElementById(player.aiOrHuman)
    for (var i = 0; i < player.legalSpaces.length; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile", player.legalSpaces[i][2], player.aiOrHuman)
        tile.setAttribute("id",player.legalSpaces[i][0]+player.aiOrHuman);
        leftPlayer.appendChild(tile);
    }
    renderTheFleet(player);
    addTileFunctionality(player);
}
function renderTheFleet(player) {
    var fleetCoordinates = [];
    for (var z = 0; z < player.fleet.length; z++) {
        for (var y = 0; y < player.fleet[z].position.length; y++) {
            fleetCoordinates.push(player.fleet[z].position[y])
        }
    }
    for (var x = 0; x < fleetCoordinates.length; x++) {
        var occupiedTile = document.getElementById(fleetCoordinates[x]+player.aiOrHuman)
        occupiedTile.classList.add("occupied")
    }
}

function addTileFunctionality(player) {
    const tiles = document.getElementsByClassName("ai")
    for (let item of tiles) {
        // item.addEventListener("click", function() {
        //     getTile(player)
        // })
        item.addEventListener("click", getTile)
    }
}

function getTile() {
    console.log(this)
    console.log(this.attributes[1]);
    console.log(this.attributes.class);
}
export { renderThePage, renderTheGameboard }