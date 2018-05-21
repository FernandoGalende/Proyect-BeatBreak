fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

var moves = ["up", "left", "right", "left", "left"];
var result = [];

function streetFighterSelection(fighters, position, moves) {
  var fila = 0;
  var colum = 0;
  for (i = 0; i < moves.length; i++) {
    if (moves[i] == "up") {
      if (fila !== 0) {
        fila = 0;
        result.push(fighters[fila][colum]);
      } else {
        result.push(fighters[fila][colum]);
      }
    } else if (moves[i] == "left") {
      if (colum === 0) {
        column = fighters[0].length - 1;
        result.push(fighters[fila][colum]);
      } else {
        colum--;
        result.push(fighters[fila][colum]);
      }
    } else if (moves[i] == "right") {
      if (fila === fighters[0].length - 1) {
        fila = 0;
        result.push(fighters[fila][colum]);
      } else {
        fila++;
        result.push(fighters[fila][colum]);
      }
    } else if (moves[i] == "down") {
      if (fila === 1) {
        result.push(fighters[fila][colum]);
      } else {
        fila = 0;
        result.push(fighters[fila][colum]);
      }
    }
  }
}

streetFighterSelection(fighters, [0, 0], moves);
