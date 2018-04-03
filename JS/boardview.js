var view = (function(boardElement) {
	function BoardView(boardElement) {
		this.boardElement = boardElement;
		this.buttons = boardElement.children;
		this.attachListeners();
	}

	BoardView.prototype.attachListeners = function() {
		var functionGenerator = function(i) {
			return function() {
				board.addToUserSequence(i);
				board.clicked++;
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

	BoardView.prototype.lightButton = function(position) {
		this.buttons[position].style.backgroundColor = 'gray';
	};

	BoardView.prototype.resetButton = function(position) {
		this.buttons[position].removeAttribute('style');
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
					800
				);
			}.bind(this),
			1000
		);
	};

	var boardElement = document.querySelector('.board');
	var view = new BoardView(boardElement);
	var API = {
		playSequence: view.playSequence.bind(view)
	};
	return API;
})();
