
var seq = [ 1, 3, 2 ];
var board = new BoardLogic(seq);
var boardElement = document.querySelector('.board');
var view = new BoardView(boardElement);
view.playSequence(board.getLevelSequence());


