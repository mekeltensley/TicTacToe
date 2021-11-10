// current players turn 
let currentPlayer = "x";

const tiles = document.querySelectorAll('.tic'); 

// this loops through all of the tiles on the grid
for (let i = 0; i < tiles.length; i++) {

    // adds as an event listener to each tile
    tiles[i].addEventListener('click', function () {
        //checks if the tile has an X or O
        if (tiles[i].innerHTML == "") {
            //adds X or O for the current play in their choosen tile 
            tiles[i].innerHTML = currentPlayer;

            currentPlayer = currentPlayer == "x" ? "o" : "x";

            document.getElementById('player').innerHTML = currentPlayer.toUpperCase();
            

            //checks 3 matching x's or o's

            if (
                tiles[0].innerHTML == tiles[1].innerHTML &&
                tiles[1].innerHTML == tiles[2].innerHTML &&
                tiles[0].innerHTML.trim() != ""
              ) {

              } else if (
                tiles[3].innerHTML == tiles[4].innerHTML &&
                tiles[4].innerHTML == tiles[5].innerHTML &&
                tiles[3].innerHTML.trim() != ""
              ) {
                
              } else if (
                tiles[6].innerHTML == tiles[7].innerHTML &&
                tiles[7].innerHTML == tiles[8].innerHTML &&
                tiles[6].innerHTML.trim() != ""
              ) {
                
              } else if (
                tiles[0].innerHTML == tiles[3].innerHTML &&
                tiles[3].innerHTML == tiles[6].innerHTML &&
                tiles[0].innerHTML.trim() != ""
              ) {
                
              } else if (
                tiles[1].innerHTML == tiles[4].innerHTML &&
                tiles[4].innerHTML == tiles[7].innerHTML &&
                tiles[1].innerHTML.trim() != ""
              ) {
                
              } else if (
                tiles[2].innerHTML == tiles[5].innerHTML &&
                tiles[5].innerHTML == tiles[8].innerHTML &&
                tiles[2].innerHTML.trim() != ""
              ) {
                
              } else if (
                tiles[0].innerHTML == tiles[4].innerHTML &&
                tiles[4].innerHTML == tiles[8].innerHTML &&
                tiles[0].innerHTML.trim() != ""
              ) {
            
              } else if (
                tiles[2].innerHTML == tiles[4].innerHTML &&
                tiles[4].innerHTML == tiles[6].innerHTML &&
                tiles[2].innerHTML.trim() != ""
              ) {
          
            }
            
        }

    });
}

function displayWinner ()