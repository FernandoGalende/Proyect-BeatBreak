var view = (function(boardElement) {
	function BoardView(boardElement) {
		this.boardElement = boardElement;
		this.buttons = boardElement.children;
		//this.gameOver = document.querySelector("gameOver");
		this.attachListeners();
	}

	BoardView.prototype.attachListeners = function() {
		var functionGenerator = function(i) {
			return function() {
				board.addToUserSequence(i);
				board.clicked++;
				console.log("click");
				var audioArray = ['./Audio/3.mp3','./Audio/3.mp3','./Audio/3.mp3','./Audio/3.mp3'];
				var a = new Audio()
				a.src = audioArray[i];
				console.log("la secuencia es"+i);
				a.play()

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
		this.buttons[position].classList.add("board__neon___button--dos");
		setTimeout(function(){
			this.resetButton(position);
		}.bind(this),200);
	};

	BoardView.prototype.lightButton = function(position) {		
		this.buttons[position].classList.add("board__neon___button");
	};

	BoardView.prototype.resetButton = function(position) {
		this.buttons[position].classList.remove("board__neon___button","board__neon___button--dos");
	};

	BoardView.prototype.gameOver = function(){
		console.log('GAME OVER');
		document.querySelector(".gameOver").classList.remove("hide");		
	};
	BoardView.prototype.score = function(){
		
			
	};

	BoardView.prototype.playSequence = function(sequence) {
		var counter = 0;
		console.log(sequence);
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
					50
				);
			}.bind(this),
			100
		);
	};

	var boardElement = document.querySelector('.board');
	var view = new BoardView(boardElement);
	var API = {
		playSequence: view.playSequence.bind(view),
		gameOver: view.gameOver.bind(view)
	};
	return API;
})();
