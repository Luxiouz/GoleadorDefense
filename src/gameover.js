var gameOver = function(game){}

gameOver.prototype = {
	init: function(score, time, team){
        this.score = 0;
        this.time = 0;
        this.attempts = 0;
	},
  	create: function(){
      
		/*gameOverTitle.anchor.setTo(0.5,0.5);*/
		var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("GameTitle");
	},
   
}