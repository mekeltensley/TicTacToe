// current players turn 
let currentPlayer = "X";

const tiles = document.getElementsByClassName('tic'); 

// this loops through all of the tiles on the grid
for (let i = 0; i < tiles.length; i++) {

    // adds as an event listener to each tile
    tiles[i].addEventListener('click', function () {
        //checks if the tile has an X or O
        if (tiles[i].innerHTML == "") {
            //adds X or O for the current play in their choosen tile 
            tiles[i].innerHTML.trim() = currentPlayer;

            currentPlayer = currentPlayer == "X" ? "O" : "X";

            document.getElementById('')
        }

    });
}
