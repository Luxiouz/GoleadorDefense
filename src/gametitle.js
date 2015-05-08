var gameTitle = function(game){}

gameTitle.prototype = {
    init: function(score, time, team){
        this.score = 0;
        this.time = 0;
        this.attempts = 0;
	},
  	create: function(){
        
        var gameTitle = this.game.add.sprite(0,0,"bgT0");
        
		//var gameTitle = this.game.add.sprite(400,200,"pelota");
		//gameTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(656,550,"play",this.showBG2,this);
		playButton.anchor.setTo(0.5,0.5);
        playButton.renderable = false;
	},
    showBG2: function(){console.log("bg2");
        var gameTitle2 = this.game.add.sprite(0,0,"bgT1");
		var playButton2 = this.game.add.button(656,550,"play",this.showBG3,this);
		playButton2.anchor.setTo(0.5,0.5);
        playButton2.renderable = false;
    },
    showBG3: function(){
        var gameTitle3 = this.game.add.sprite(0,0,"bgT2");
		var playButton3 = this.game.add.button(656,550,"play",this.showBG4,this);
        
        btnAmarilloEf = this.game.add.button(665,365,"btnAmarilloEf",this.saveTeamData,this);
        btnAmarillo = this.game.add.button(665,365,"btnAmarillo",this.saveTeamData,this);
        btnAmarillo.variable = "yellow";
        btnAmarillo.scale.setTo(0.93, 0.93);
        btnAmarillo.anchor.setTo(0.5,0.5);
        btnAmarilloEf.variable = "yellow";
        btnAmarilloEf.scale.setTo(0.93, 0.93);
        btnAmarilloEf.anchor.setTo(0.5,0.5);
        btnAmarilloEf.visible = false;
        btnAmarillo.events.onInputOver.add(this.over, this);
        btnAmarillo.events.onInputOut.add(this.out, this);
        
        btnAzulEf = this.game.add.button(410,365,"btnAzulEf",this.saveTeamData,this);
        btnAzul = this.game.add.button(410,365,"btnAzul",this.saveTeamData,this);
        btnAzul.variable = "blue";
        btnAzul.scale.setTo(0.93, 0.93);
        btnAzul.anchor.setTo(0.5,0.5);
        btnAzulEf.variable = "blue";
        btnAzulEf.scale.setTo(0.93, 0.93);
        btnAzulEf.anchor.setTo(0.5,0.5);
        btnAzulEf.visible = false;
        btnAzul.events.onInputOver.add(this.over, this);
        btnAzul.events.onInputOut.add(this.out, this);
        
        btnBlancoEf = this.game.add.button(140,365,"btnBlancoEf",this.saveTeamData,this);
        btnBlanco = this.game.add.button(140,365,"btnBlanco",this.saveTeamData,this);
        btnBlanco.variable = "white";
        btnBlanco.scale.setTo(0.93, 0.93);
        btnBlanco.anchor.setTo(0.5,0.5);
        btnBlancoEf.variable = "white";
        btnBlancoEf.scale.setTo(0.93, 0.93);
        btnBlancoEf.anchor.setTo(0.5,0.5);
        btnBlancoEf.visible = false;
        btnBlanco.events.onInputOver.add(this.over, this);
        btnBlanco.events.onInputOut.add(this.out, this);
        
        buttonClicked = "none";

        
		playButton3.anchor.setTo(0.5,0.5);
        playButton3.renderable = false;
    },
    showBG4: function(){
        
        if(buttonClicked == "none") alert("¡Debes escoger un equipo para jugar!");
        else{
            var gameTitle4 = this.game.add.sprite(0,0,"bgT3");
            var playButton4 = this.game.add.button(656,550,"play",this.playTheGame,this);
            playButton4.anchor.setTo(0.5,0.5);
            playButton4.scale.setTo(1.2,1.2);
            playButton4.renderable = false;
        }
    },
	playTheGame: function(){
		//this.game.state.start("TheGame");
       
        this.game.state.start("TheGame",true,false,buttonClicked);
	},
    saveTeamData: function(button){
        buttonClicked = button.variable;
        console.log(button.variable);
        if(button.variable == "yellow"){
            btnAmarillo.scale.setTo(1.1, 1.1);
            btnAmarilloEf.scale.setTo(1.1, 1.1);
            btnAmarilloEf.visible = true;
            this.out(btnAzul);
            this.out(btnBlanco);
        }
        
        if(button.variable == "blue"){
            btnAzul.scale.setTo(1.1, 1.1);
            btnAzulEf.scale.setTo(1.1, 1.1);
            btnAzulEf.visible = true;
            this.out(btnAmarillo);
            this.out(btnBlanco);
        }
        
         if(button.variable == "white"){
            btnBlanco.scale.setTo(1.1, 1.1);
            btnBlancoEf.scale.setTo(1.1, 1.1);
            btnBlancoEf.visible = true;
            this.out(btnAmarillo);
            this.out(btnAzul);
        }
    },
    over: function(button){
        if(buttonClicked != "yellow" && button.variable == "yellow"){
            console.log(button.variable);
            btnAmarillo.scale.setTo(1.1, 1.1);
            btnAmarilloEf.scale.setTo(1.1, 1.1);
            btnAmarilloEf.visible = false;
        }
        
        if(buttonClicked != "blue" && button.variable == "blue"){
            console.log(button.variable);
            btnAzul.scale.setTo(1.1, 1.1);
            btnAzulEf.scale.setTo(1.1, 1.1);
            btnAzulEf.visible = false;
        }
        
        if(buttonClicked != "white" && button.variable == "white"){
            console.log(button.variable);
            btnBlanco.scale.setTo(1.1, 1.1);
            btnBlancoEf.scale.setTo(1.1, 1.1);
            btnBlancoEf.visible = false;
        }
    },
    out: function(button){
        if(buttonClicked != "yellow" && button.variable == "yellow"){
            btnAmarillo.scale.setTo(0.93, 0.93);
            btnAmarilloEf.visible = false;
        }
        if(buttonClicked != "blue" && button.variable == "blue"){
            btnAzul.scale.setTo(0.93, 0.93);
            btnAzulEf.visible = false;
        }
        if(buttonClicked != "white" && button.variable == "white"){
            btnBlanco.scale.setTo(0.93, 0.93);
            btnBlancoEf.visible = false;
        }
    }
}