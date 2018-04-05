function BoardLogic(a) {
	this.sequence = this.randomGame();
	this.level = 1;
	this.userSequence = [];
	this.clicked = 0;
	this.boardLevel = 1;
	this.call = false;	
	this.finish = false;
}

BoardLogic.prototype.randomGame = function() {
	var sequence = [];
	for (var i = 0; i < 3; i++) {
		sequence.push(Math.round(Math.random() * 7));
	}
	return sequence;
};

BoardLogic.prototype.getLevelSequence = function(level) {
	if (this.call == false) {
		var sequenceEnd = this.level;
		this.call = true;
		return this.sequence.slice(0, sequenceEnd);
	} else {
		var sequenceEnd = this.level + 1;
		return this.sequence.slice(0, sequenceEnd);
	}
};

BoardLogic.prototype.addLevel = function() {
	this.level++;
};

BoardLogic.prototype.getSequence = function() {
	return this.getLevelSequence(this.level);
};
BoardLogic.prototype.addScore = function() {
	console.log(view.score)
	view.score +=17;	
	view.playScore();
};

BoardLogic.prototype.checkSequence = function(userSequence) {
	var sequence = this.sequence;
	var result;
	this.clicked = 0;
	for (var i = 0; i < this.userSequence.length; i++) {
		if (this.userSequence[i] === sequence[i]) {
			if (this.userSequence.length === this.sequence.length) {
				setTimeout(
					function() {
						view.win();
					}.bind(this),
					2000
				);
				setTimeout(
					function() {
						view.win();
					}.bind(this),
					100
				);
				setTimeout(
					function() {
						view.startAgain();
					}.bind(this),
					2000
				);
			} else {
				view.playSequence(board.getLevelSequence());
				this.addScore();
				result = true;
			}
		} else if (this.userSequence[i] !== sequence[i]) {
			result = false;
			setTimeout(
				function() {
					view.scoreCounter();
				}.bind(this),
				6000
			);
			setTimeout(
				function() {
					view.scoreCounter();
				}.bind(this),
				100
			);
			setTimeout(
				function() {
					view.gameOver();
				}.bind(this),
				5900
			);
			
			break;
		}
	}
	this.addLevel();
	this.userSequence = [];
	return result;
};

BoardLogic.prototype.addToUserSequence = function(value) {
	this.userSequence.push(value);
};
