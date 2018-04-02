var view = function(boardElement) {
	function BoardView(boardElement) {
		this.boardElement = boardElement;
		this.buttons = boardElement.children;
    this.attachListeners();   
  }
  
	BoardView.prototype.attachListeners = function() {
    var functionGenerator = function (i){
      return function() {
				board.addToUserSequence(i);
				console.log('botton click!'+ i);
				board.clicked++;
				console.log("boardClicked: "+ board.clicked + "boardLevel: " + board.level);
				if (board.clicked == board.level) {
					board.clicked=0;
					console.log("Comprobado numero de clicks");
					board.checkSequence(board.userSequence);
				}
      }
    }
		for (var i = 0; i < this.buttons.length; i++) {
			this.buttons[i].addEventListener('click', functionGenerator(i));   
		}

	

	};
	// BoardView.prototype.clickButton = function() {
  //   console.log('botton click!');
	// };
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
    playSequence: view.playSequence.bind(view),
  
  };
  return API;
}();


