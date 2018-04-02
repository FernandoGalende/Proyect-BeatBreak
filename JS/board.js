var board = function(sequence) {
  function BoardLogic(sequence) {
    this.sequence = sequence;
    this.level = 1;
    this.userSequence = [];
    this.clicked = 0;
  }
  
  BoardLogic.prototype.getLevelSequence = function(level) {
    var sequenceEnd = this.level; 
    return this.sequence.slice(0, sequenceEnd);    
  }
  
  BoardLogic.prototype.addLevel = function() {
    this.level++;
    console.log(this.level)
  }
  
  BoardLogic.prototype.getSequence = function() {
    return this.getLevelSequence(this.level);
  }
  
  BoardLogic.prototype.checkSequence = function(userSequence) {
    var sequence = this.sequence;
    var result;
    this.clicked = 0;
    console.log("CheckSequence USER SECUENCE", userSequence)
    debugger;
    for (var i = 0; i < this.userSequence.length; i++) {    
      if(userSequence[i] == sequence[i]){
        this.addLevel();
        console.log("checkSequence correcta");
        view.playSequence(board.getLevelSequence());
        result = true;       
      }
      
      else if (userSequence[i] !== sequence[i]) {
        result = false;
        console.log("Game over");
        break;
      }
      
    }
    return result;
  }

  BoardLogic.prototype.addToUserSequence = function(value) {
    this.userSequence.push(value);
    console.log("addToUserSequence"+this.userSequence);
    console.log("ThisClicked: "+ this.clicked );


  }
  var board = new BoardLogic(sequence);
  var API = {
    checkSequence: board.checkSequence.bind(board),
    addToUserSequence: board.addToUserSequence.bind(board),
    getLevelSequence: board.getLevelSequence.bind(board),
    userSequence: board.userSequence,   
    level:  board.level,
    sequence: board.sequence,
    clicked : board.clicked
 
  }

  return API;
  
}([1, 3, 2, 1, 4 ,3 ,4, 2, 3, 2, 1]);
//console.log(board.checkSequence(3));
