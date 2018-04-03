var board = (function(sequence) {
	function BoardLogic(sequence) {
		this.sequence = sequence;
		this.level = 1;
		this.userSequence = [];
    this.clicked = 0;
    this.boardLevel = 1;
    this.call = false;
	}

	BoardLogic.prototype.getLevelSequence = function(level) {
    if(this.call == false){
      var sequenceEnd = this.level;
      console.log('NIVEL', sequenceEnd);
      this.call = true;
      return this.sequence.slice(0, sequenceEnd);
      
    } else {
      var sequenceEnd = this.level + 1;
      console.log('NIVEL', sequenceEnd);
      return this.sequence.slice(0, sequenceEnd);
    }

	};
 
	BoardLogic.prototype.addLevel = function() {
		this.level++;
	};

	BoardLogic.prototype.getSequence = function() {
		return this.getLevelSequence(this.level);
	};

	BoardLogic.prototype.checkSequence = function(userSequence) {
		var sequence = this.sequence;
		var result;
		this.clicked = 0;
		for (var i = 0; i < this.userSequence.length; i++) {
			if (this.userSequence[i] == sequence[i]) {
				view.playSequence(board.getLevelSequence());
				result = true;
			} else if (this.userSequence[i] !== sequence[i]) {
				result = false;
				console.log('GAME OVER');
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

	var board = new BoardLogic(sequence);
	var API = {
		checkSequence: board.checkSequence.bind(board),
		addToUserSequence: board.addToUserSequence.bind(board),
		getLevelSequence: board.getLevelSequence.bind(board),
		userSequence: board.userSequence,
    level: board.level,
    boardLevel : board.boardLevel,
		sequence: board.sequence,
		clicked: board.clicked
	};

	return API;
})([ 1, 3, 2, 1, 1, 3, 2, 2, 3, 2, 1 ]);
//console.log(board.checkSequence(3));
