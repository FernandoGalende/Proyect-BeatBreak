//window.onload = function() {
	var board = new BoardLogic();
	var boardElement = document.querySelector('.board');
	var view = new BoardView(boardElement);
	view.playSequence(board.getLevelSequence());
	

	setInterval(function() {
		if (board.finish == true) {
			board = new BoardLogic();
			view.playSequence(board.getLevelSequence());
		}
	}, 1000);
//};
