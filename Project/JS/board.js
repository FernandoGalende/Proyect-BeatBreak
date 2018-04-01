
var board = function(sequence) {
  function BoardLogic(sequence) {
    this.sequence = sequence;
    this.level = 1;
  }
  
  BoardLogic.prototype.getLevelSequece = function(level) {
    var sequenceEnd = level;  
    return this.sequence.slice(0, sequenceEnd);
  }
  
  BoardLogic.prototype.addLevel = function() {
    this.level++;
  }
  
  BoardLogic.prototype.getSequence = function() {
    return this.getLevelSequece(this.level);
  }
  
  BoardLogic.prototype.checkSequence = function(userSequence) {
    var sequence = this.sequence;
    var result = true;
  
    for (var i = 0; i < userSequence.length; i++) {
      if (userSequence[i] !== sequence[i]) {
        result = false;
        break;
      }
    }
   
    return result;
  }
  var board = new BoardLogic(sequence);
  var API = {
    checkSequence: board.checkSequence.bind(board),
    
  }
  return API;
}([0, 0, 1, 1, 4 ,3 ,4, 2, 3, 2, 1]);
console.log(board.checkSequence(3));