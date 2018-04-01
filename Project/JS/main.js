function BoardView(boardElement) {
  this.boardElement = boardElement;
  this.buttons = boardElement.children;
  this.attachListeners();
}
BoardView.prototype.attachListeners = function() {
  for(var i = 0; i < this.buttons.length; i++) {
    this.buttons[i].addEventListener("click", this.clickButton);
  };
}
BoardView.prototype.clickButton = function() {
  console.log("botton click!");
}
BoardView.prototype.lightButton = function(position) {
  this.buttons[position].style.backgroundColor = "gray";
}
BoardView.prototype.resetButton = function(position) {
  this.buttons[position].removeAttribute("style")
}
BoardView.prototype.playSecuence = function(sequence) {
  var counter = 0;
  var iterateSequence = setInterval(function(){ 
    this.lightButton(sequence[counter]);
    setTimeout(function(){
      this.resetButton(sequence[counter])
      if(counter === sequence.length - 1) {
        clearInterval(iterateSequence)
      }
      counter++;
    }.bind(this), 800);
  }.bind(this), 1000);
}
var boardElement = document.querySelector('.board');
var boardView = new BoardView(boardElement);
boardView.playSecuence([0, 1, 0]);