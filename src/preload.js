var preload = function(game){}

preload.prototype = {
	preload: function(){ 
        this.game.add.sprite(0,0,"preloading");

        var loadingBar = this.add.sprite(0,0,"loading");
          //loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
		//this.game.load.spritesheet("numbers","assets/numbers.png",100,100);
        
        this.game.load.image("bgGame","assets/bgGame.png");
        this.game.load.image("tribuna","assets/tribuna.png");
        this.game.load.spritesheet("player_sheet_blue","assets/player_sheet_blue.png", 340, 780);
        this.game.load.spritesheet("player_sheet_white","assets/player_sheet_white.png", 340, 780); 
        this.game.load.spritesheet("player_sheet_yellow","assets/player_sheet_yellow.png", 340, 780);
        this.game.load.spritesheet("arquero_sheet","assets/arquero_sheet.png", 244, 643);
        this.game.load.image("golScreen","assets/popupgol.png");
        this.game.load.image("falloScreen","assets/popupfail.png");
        this.game.load.image("bgT0","assets/background_GameTitle.png");
        this.game.load.image("bgT1","assets/background_GameTitle1.png");
        this.game.load.image("bgT2","assets/background_GameTitle2.png");
        this.game.load.image("bgT3","assets/background_GameTitle3.png");
        
        this.game.load.image("bgGOpositive","assets/popupgameoverp.png");
        
        this.game.load.image("btnAzul","assets/btnAzul.png");
        this.game.load.image("btnBlanco","assets/btnBlanco.png");
        this.game.load.image("btnAmarillo","assets/btnAmarillomini.png");
        
        this.game.load.image("btnAmarilloEf","assets/btnAmarillo_effectomini.png");
        this.game.load.image("btnAzulEf","assets/btnAzul_effect.png");
        this.game.load.image("btnBlancoEf","assets/btnBlanco_effect.png");
        
        this.game.load.image("background","assets/BG.png");
        this.game.load.image("barra","assets/platform.png");
        //this.game.load.image("player","assets/player.png");
		this.game.load.image("arco","assets/arco.png");
		this.game.load.image("pelota","assets/pelota.png");
        //this.game.load.image("guante","assets/guante.png");
        this.game.load.image("play","assets/play.png");
        this.game.load.image("fallo","assets/fallo.png");
        
        this.game.load.audio('sfxGol', ['assets/sonido_gol.mp3']);
        this.game.load.audio('sfxPatear', ['assets/pateando.mp3']);
        this.game.load.audio('sfxEstadio', ['assets/estadio.mp3']);
        this.game.load.audio('sfxFail', ['assets/fail.mp3']);
		/*this.game.load.image("higher","assets/higher.png");
		this.game.load.image("lower","assets/lower.png");
		this.game.load.image("gameover","assets/gameover.png");*/
	},
  	create: function(){
        soundEstadio = this.game.add.audio('sfxEstadio');
        soundEstadio.loop = true;
        soundEstadio.play('');
		this.game.state.start("GameTitle");
	}
}