function BoardView(boardElement) {
	this.boardElement = boardElement;
	this.buttons = boardElement.children;
	this.screnLevel = 500;
	this.screnLevelTime = 700;
	this.iterateSequence;
	this.attachListeners();
}

BoardView.prototype.startAgain = function(){
	this.screnLevel-=50;
	this.screnLevelTime-=20;
	clearInterval(this.iterateSequence);
	board.finish = true;
}

BoardView.prototype.attachListeners = function() {
	var functionGenerator = function(i) {
		return function() {
			board.addToUserSequence(i);
			board.clicked++;
			var audioArray = [ './assets/Audio/3.mp3', './assets/Audio/3.mp3', './assets/Audio/3.mp3', './assets/Audio/3.mp3'];
			var a = new Audio();
			a.src = audioArray[i];
			a.play();
			view.userLightButton(i);
			if (board.clicked === board.boardLevel) {
				board.boardLevel++;
				board.clicked = 0;
				board.checkSequence(board.userSequence);
			}
		};
	};
	for (var i = 0; i < this.buttons.length; i++) {
		this.buttons[i].addEventListener('click', functionGenerator(i));
	}
};
BoardView.prototype.userLightButton = function(position) {
	this.buttons[position].classList.add('board__neon___button--dos','board__button--z-index');
	setTimeout(
		function() {
			this.resetButton(position);
		}.bind(this),
		500
	);
};

BoardView.prototype.lightButton = function(position) {
	this.buttons[position].classList.add('board__neon___button', 'board__button--z-index');
};

BoardView.prototype.resetButton = function(position) {
	this.buttons[position].classList.remove('board__neon___button', 'board__neon___button--dos','board__button--z-index');
};

BoardView.prototype.gameOver = function() {
	document.querySelector('.gameOver').classList.remove('hide');
};
BoardView.prototype.win = function() {

	document.querySelector('.win').classList.toggle('hide');
};
BoardView.prototype.playScore = function() {
	document.querySelector('.score__number').innerHTML = board.score;
};

BoardView.prototype.playSequence = function(sequence) {
	var counter = 0;
	var iterateSequence = setInterval(
		function() {
			this.lightButton(sequence[counter]);
			setTimeout(
				function() {
					this.resetButton(sequence[counter]);
					if (counter === sequence.length - 1) {
						clearInterval(iterateSequence);
					}
					counter++;
				}.bind(this),
				this.screnLevel
			);
		}.bind(this),
		this.screnLevelTime
	);
};
