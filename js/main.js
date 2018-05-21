var board = new BoardLogic();
var boardElement = document.querySelector('.board');
var view = new BoardView(boardElement);
view.playSequence(board.getLevelSequence());
//var i = 0	

setInterval(function() {

	if (board.finish == true) {
		board = new BoardLogic();
		view.playSequence(board.getLevelSequence());
	}
	// else if(i >= 10000){
	// 	console.log("Perdiste");
	// }
	// else {
	// 	i++;
	// }
}, 1000);

//Se podría utilizar como timer máximo para el juego.
//Determinar una mayor duración te permite hacer que el juego acabe si no se ha completado al comprobar.
//Entonces puedes hacer que la funcion comprueba si a los 10 segundos a superado el juego
//Por otro lado puedes comprobar si el estatus del mismo es superado o no (true o false)