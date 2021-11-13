// current players turn 
let currentPlayer = "x";

//Selects all tile elements in the grid
const tiles = document.querySelectorAll(".tic");

// this loops through all of the tiles on the grid
for (let i = 0; i < tiles.length; i++) {

  // adds as an event listener to each tile
  tiles[i].addEventListener('click', function () {
    //checks if the tile has an X or O
    if (tiles[i].innerHTML == "") {
      //adds X or O for the current play in their choosen tile 
      tiles[i].innerHTML = currentPlayer;

      //changes the players turn

      currentPlayer = currentPlayer == "x" ? "o" : "x";

      //changes text of players turn on top of game

      document.getElementById("player").innerHTML = currentPlayer.toUpperCase();


      //checks 3 matching x's or o's

      if (
        tiles[0].innerHTML == tiles[1].innerHTML &&
        tiles[1].innerHTML == tiles[2].innerHTML &&
        tiles[0].innerHTML.trim() != ""
      ) {
        displayWinner(0, 1, 2);
      } else if (
        tiles[3].innerHTML == tiles[4].innerHTML &&
        tiles[4].innerHTML == tiles[5].innerHTML &&
        tiles[3].innerHTML.trim() != ""
      ) {
        displayWinner(3, 4, 5);
      } else if (
        tiles[6].innerHTML == tiles[7].innerHTML &&
        tiles[7].innerHTML == tiles[8].innerHTML &&
        tiles[6].innerHTML.trim() != ""
      ) {
        displayWinner(6, 7, 8);
      } else if (
        tiles[0].innerHTML == tiles[3].innerHTML &&
        tiles[3].innerHTML == tiles[6].innerHTML &&
        tiles[0].innerHTML.trim() != ""
      ) {
        displayWinner(0, 3, 6);
      } else if (
        tiles[1].innerHTML == tiles[4].innerHTML &&
        tiles[4].innerHTML == tiles[7].innerHTML &&
        tiles[1].innerHTML.trim() != ""
      ) {
        displayWinner(1, 4, 7);
      } else if (
        tiles[2].innerHTML == tiles[5].innerHTML &&
        tiles[5].innerHTML == tiles[8].innerHTML &&
        tiles[2].innerHTML.trim() != ""
      ) {
        displayWinner(2, 5, 8);
      } else if (
        tiles[0].innerHTML == tiles[4].innerHTML &&
        tiles[4].innerHTML == tiles[8].innerHTML &&
        tiles[0].innerHTML.trim() != ""
      ) {
        displayWinner(0, 4, 8);
      } else if (
        tiles[2].innerHTML == tiles[4].innerHTML &&
        tiles[4].innerHTML == tiles[6].innerHTML &&
        tiles[2].innerHTML.trim() != ""
      ) {
        displayWinner(2, 4, 6);

      }

    }

  });
}

//Displays the winner

function displayWinner(a, b, c) {

  tiles[a].style.color = "#556DC8"
  tiles[b].style.color = "#556DC8"
  tiles[c].style.color = "#556DC8"

  document.getElementById("whoWon").innerHTML = currentPlayer == "x" ? "o" : "x";

  document.getElementById("popup").style.visibility = "visible";
}

//resets the game if there is a winner 
document.getElementById("reset").addEventListener("click", function () {
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].innerHTML = "";
  }
  document.getElementById("popup").style.visibility = "hidden";

});

document.getElementById("close").addEventListener("click", function() {
  document.getElementById("popup").style.visibility = "hidden";
});


// //resets the game  if there is no winner 
// document.getElementById("reset").addEventListener("click", function () {
//   for (let i = 0; i < tiles.length; i++) {
//     tiles[i].innerHTML = null;
//   }
//   document.getElementById("restart-game").style.visibility = "hidden";

// });