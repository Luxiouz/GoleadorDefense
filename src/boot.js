var boot = function(game){
	console.log("%cStarting PerlaSOFT Game", "color:white; background:red");
};
  
boot.prototype = {
	preload: function(){
        this.game.load.image("preloading","assets/preload.png"); 
        this.game.load.image("loading","assets/BG.png"); 
	},
  	create: function(){
        
        
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.setScreenSize();
		this.game.state.start("Preload");
	}
}