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
        displayWinner(0,1,2);
      } else if (
        tiles[3].innerHTML == tiles[4].innerHTML &&
        tiles[4].innerHTML == tiles[5].innerHTML &&
        tiles[3].innerHTML.trim() != ""
      ) {
        displayWinner(3,4,5);
      } else if (
        tiles[6].innerHTML == tiles[7].innerHTML &&
        tiles[7].innerHTML == tiles[8].innerHTML &&
        tiles[6].innerHTML.trim() != ""
      ) {
        displayWinner(6,7,8);
      } else if (
        tiles[0].innerHTML == tiles[3].innerHTML &&
        tiles[3].innerHTML == tiles[6].innerHTML &&
        tiles[0].innerHTML.trim() != ""
      ) {
        displayWinner(0,3,6);
      } else if (
        tiles[1].innerHTML == tiles[4].innerHTML &&
        tiles[4].innerHTML == tiles[7].innerHTML &&
        tiles[1].innerHTML.trim() != ""
      ) {
        displayWinner(1,4,7);
      } else if (
        tiles[2].innerHTML == tiles[5].innerHTML &&
        tiles[5].innerHTML == tiles[8].innerHTML &&
        tiles[2].innerHTML.trim() != ""
      ) {
        displayWinner(2,5,8);
      } else if (
        tiles[0].innerHTML == tiles[4].innerHTML &&
        tiles[4].innerHTML == tiles[8].innerHTML &&
        tiles[0].innerHTML.trim() != ""
      ) {
        displayWinner(0,4,8);
      } else if (
        tiles[2].innerHTML == tiles[4].innerHTML &&
        tiles[4].innerHTML == tiles[6].innerHTML &&
        tiles[2].innerHTML.trim() != ""
      ) {
        displayWinner(2,4,6);
      } else {
        // restart game if no one is able match x or o

      }

    }


  });
}

//Displays the winner

function displayWinner(a, b, c) {

  tiles[a].style.color = '#556DC8'
  tiles[b].style.color = '#556DC8'
  tiles[c].style.color = '#556DC8'

  document.getElementById('.winner').innerHTML = currentPlayer ==+ 'x' ? 'o' : 'x';

  document.getElementById('.popup').style.display = 'block';
}