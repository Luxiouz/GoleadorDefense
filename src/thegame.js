var theGame = function(game){
	this.time = 0;
    this.score = 0;
    attempts = 0;
    isPause = false;
    
}

theGame.prototype = {
    init: function(buttonClicked){
        console.log("theGame_init");
        team = buttonClicked;
        State = "Awake";
        attempts = 0;
},
    create: function(){ console.log("theGame_create");
        isPause = false;
        
        this.lasTime = this.game.time.now; console.log("NUEVO");

        this.time = 0;
        this.score = 0;
        
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        
        timeInFinish = 0;

        tribunaInitY = -58;
        tribuna = this.game.add.sprite(0, tribunaInitY,'tribuna');
        this.game.add.sprite(0,0,'bgGame');
        
        jabonBlanco0 = this.game.add.sprite(0,185, 'btnBlanco');
        jabonBlanco0.scale.setTo(0.3,0.3);
        
        jabonAzul0 = this.game.add.sprite(100,185, 'btnAzul');
        jabonAzul0.scale.setTo(0.3,0.3);
        
        jabonAmarillo0 = this.game.add.sprite(200,185, 'btnAmarillo');
        jabonAmarillo0.scale.setTo(0.3,0.3);
        
        jabonBlanco1 = this.game.add.sprite(300,185, 'btnBlanco');
        jabonBlanco1.scale.setTo(0.3,0.3);
        
        jabonAzul1 = this.game.add.sprite(400,185, 'btnAzul');
        jabonAzul1.scale.setTo(0.3,0.3);
        
        jabonAmarillo1 = this.game.add.sprite(500,185, 'btnAmarillo');
        jabonAmarillo1.scale.setTo(0.3,0.3);
        
        jabonBlanco2 = this.game.add.sprite(600,185, 'btnBlanco');
        jabonBlanco2.scale.setTo(0.3,0.3);
        
        jabonAzul2 = this.game.add.sprite(700,185, 'btnAzul');
        jabonAzul2.scale.setTo(0.3,0.3);
        
        jabonAmarillo2 = this.game.add.sprite(800,185, 'btnAmarillo');
        jabonAmarillo2.scale.setTo(0.3,0.3);

        
        var directionArqueroX = 0;
        var directionArqueroY = 0;
        var tapado=false;
        var isPause
        
        patearSounded=false;
        timeInStart = 0;
        startPatear = false;
        finishPatear = false;
        
        pelotaGP = this.game.physics.p2.createCollisionGroup();
        guanteGP = this.game.physics.p2.createCollisionGroup();
        pisoGP = this.game.physics.p2.createCollisionGroup();
        nadaGP = this.game.physics.p2.createCollisionGroup();
        
		arco = this.game.add.sprite(0,0,'arco');
		arco.scale.setTo(1,1);
		arco.x = this.game.world.width/2 - arco.width/2 + 25;
		arco.y = this.game.world.height/2 - arco.height/2-80 ;
        arco.inputEnabled = true;
        arco.events.onInputDown.add(this.OnPlayerDown, this);
        arco.events.onInputUp.add(this.OnPlayerUp, this);
        
       // newAttempButton = this.game.add.button(550,100,"play",this.newAttemp,this);
       // newAttempButton.visible = false;
        
       
        
        barraIzquierda = this.game.add.sprite(0,0,'barra');
        barraIzquierda.scale.x = 1.2;
        barraIzquierda.name = "barra";
        this.game.physics.p2.enable(barraIzquierda);
        barraIzquierda.body.kinematic = true;
        barraIzquierda.body.x = 225;
        barraIzquierda.body.y = 150;
        barraIzquierda.body.rotation = Math.PI/2;
        barraIzquierda.body.setCollisionGroup(guanteGP);

        
        barraDerecha = this.game.add.sprite(0,0,'barra');
        barraDerecha.scale.x = 1.2;
        barraDerecha.name = "barra";
        this.game.physics.p2.enable(barraDerecha);
        barraDerecha.body.kinematic = true;
        barraDerecha.body.x = 635;
        barraDerecha.body.y = 150;
        barraDerecha.body.rotation = Math.PI/2;
        barraDerecha.body.setCollisionGroup(guanteGP);
        //this.game.debug.body(barraDerecha);
        //barraDerecha.renderable = false;

        
        barraSuperior = this.game.add.sprite(0,0,'barra');
        barraSuperior.scale.x = 3;
        barraSuperior.name = "barra";
        this.game.physics.p2.enable(barraSuperior);
        barraSuperior.body.kinematic = true;
        barraSuperior.body.x = this.game.width/2;
        barraSuperior.body.y = 120;
        barraSuperior.body.setCollisionGroup(guanteGP);
        
        piso = this.game.add.sprite(0,0,'barra');
        piso.scale.x = 10;
        piso.name = "guante";
        this.game.physics.p2.enable(piso);
        piso.body.kinematic = true;
        piso.body.x = this.game.width/2;
        piso.body.y = 360;
        piso.body.setCollisionGroup(nadaGP);
        
      /*  barraIzquierda.visible = false;
        barraDerecha.visible = false;
        barraSuperior.visible = false;*/


        
        guante = this.game.add.sprite(0,0,'arquero_sheet');
        guante.frame = 1;
        guante.anchor.setTo(1,1);
        guante.scale.setTo(0.29,0.29);
        guante.x = this.game.world.width/2 - guante.width/2 + 45;
		guante.y = this.game.world.height/2 - guante.height/2 + 10;
        guante.name = "guante";
        this.game.physics.p2.enable(guante);
        guante.body.setCollisionGroup(guanteGP);
        //this.game.physics.arcade.enableBody(guante);
        
        guante.body.kinematic = true;
					
		pelota = this.game.add.sprite(0,0,'pelota');
		initPelotaScale = 1;
		//pelota.scale.setTo(initPelotaScale,initPelotaScale);
		pelota.x = this.game.world.width/2 - pelota.width/2 + 60;
		pelota.y = this.game.world.height - pelota.height*1.5 - 40;
        pelota.name = "pelota";
        this.game.physics.p2.enable(pelota);
        pelota.body.setCircle(15, 0, 0, 0)
        pelota.body.setCollisionGroup(pelotaGP);
     //   pelota.body.kinematic = true;

       // this.game.physics.arcade.enableBody(pelota);
        
        guante.body.collides(pelotaGP, this.OnTaparPelota, this);
        barraSuperior.body.collides(pelotaGP, this.OnTaparPelota, this);
        barraDerecha.body.collides(pelotaGP, this.OnTaparPelota, this);
        barraIzquierda.body.collides(pelotaGP, this.OnTaparPelota, this);
        pelota.body.collides(guanteGP, this.OnTaparPelota, this);
        
       
        pelota.body.onBeginContact.add(this.OnEnterCollision, this);
        
        //player = this.game.add.sprite(0,0, 'player_sheet_blue');
        srcSkinPlayer = "none";
        if(team == "blue") srcSkinPlayer = "player_sheet_blue";
        if(team == "white") srcSkinPlayer = "player_sheet_white";
        if(team == "yellow") srcSkinPlayer = "player_sheet_yellow";
        player = this.game.add.sprite(0,0, srcSkinPlayer);
        
        player.frame = 0;
        player.scale.setTo(0.7,0.7);
        player.x = this.game.world.width/2 - player.width/2 -80;
		player.y = this.game.world.height/2 - player.height/2 +300 ;
        
        player.animations.add('idle', [0], 10, false);
        player.animations.add('patear', [1, 2, 3, 4], 10, false);
        
        //player.animations.play('idle');
        
       
        initPelotaX = pelota.x;
        initPelotaY = pelota.y;
			
		/*this.preloadBarBG = this.game.add.graphics(50, 50);
  		this.preloadBarBG.lineStyle(10, 0xFFFFFF, 1);
  		this.preloadBarBG.moveTo(0, 0);
  		this.preloadBarBG.lineTo(0, 30);
        this.preloadBarBG.rotation = 90*Math.PI/180;
        this.preloadBarBG.x = 75;
		this.preloadBarBG.y= this.game.world.height - 45;
		this.preloadBarBG.scale.y = -3.1;
        this.preloadBarBG.alpha = 0.5;*/
        
        
        
        soundGol = this.game.add.audio('sfxGol');
        soundPatear = this.game.add.audio('sfxPatear');
        soundFail = this.game.add.audio('sfxFail');

		this.preloadBar = this.game.add.graphics(50, 50);
  		this.preloadBar.lineStyle(8, 0xFFFFFF, 1);
  		this.preloadBar.moveTo(0, 0);
  		this.preloadBar.lineTo(0, 30);
        this.preloadBar.rotation = 90*Math.PI/180;
        this.preloadBar.x = 72;
		this.preloadBar.y= this.game.world.height - 46;
        this.preloadBar.scale.y = -3.2;
        this.preloadBar.alpha = 0.98;
        
  		this.preloadBar.scale.x = 1;
		this.preloadBar.scale.y = 0; // set the bar to the beginning position*/
        
        this.gol1 = this.game.add.sprite(512,558,'pelota');
        this.gol1.scale.setTo(0.58,0.58); 
        this.fallo1 = this.game.add.sprite(512,558,'fallo');
        this.fallo1.scale.setTo(0.58,0.58);
        this.gol1.visible = false;
        this.fallo1.visible = false;
        
        this.gol2 = this.game.add.sprite(570,558,'pelota');
        this.gol2.scale.setTo(0.58,0.58);
        this.fallo2 = this.game.add.sprite(570,558,'fallo');
        this.fallo2.scale.setTo(0.58,0.58);
        this.gol2.visible = false;
        this.fallo2.visible = false;
        
        this.gol3 = this.game.add.sprite(628,558,'pelota');
        this.gol3.scale.setTo(0.58,0.58);
        this.fallo3 = this.game.add.sprite(628,558,'fallo');
        this.fallo3.scale.setTo(0.58,0.58);
        this.gol3.visible = false;
        this.fallo3.visible = false;
        
        this.gol4 = this.game.add.sprite(686,558,'pelota');
        this.gol4.scale.setTo(0.58,0.58);
        this.fallo4 = this.game.add.sprite(686,558,'fallo');
        this.fallo4.scale.setTo(0.58,0.58);
        this.gol4.visible = false;
        this.fallo4.visible = false;
        
        this.gol5 = this.game.add.sprite(744,558,'pelota');
        this.gol5.scale.setTo(0.58,0.58);
        this.fallo5 = this.game.add.sprite(744,558,'fallo');
        this.fallo5.scale.setTo(0.58,0.58);
        this.gol5.visible = false;
        this.fallo5.visible = false;
        
        var style = { font: "36px Arial", fill: "#0040FF" };  
        this.label_score = this.game.add.text(30, 72, "¡Metela!", style);
        this.label_score.rotation = -8*Math.PI/180;
        
        var styleTime = { font: "18px Arial", fill: "#0040FF" };          
        this.label_time = this.game.add.text(730, 473, "0:00", styleTime);
       // this.label_time.text.align = "center";
       // this.label_time.anchor.x = 0.5;
        
        //this.label_time.rotation = -8*Math.PI/180;
				
		this.game.input.onDown.add(this.OnDown, this);
		this.game.input.onUp.add(this.OnUp, this);
		State = "Awake";
		Speed = 0;
		Offset = 0;
		number = 0;
        targetAngle = 0;
        targetArqueroX = 0;
        targetArqueroY = 0;
        
        golPopup = this.game.add.button(0,0,"golScreen",this.HidePopup,this);
        golPopup.visible = false;
        
        falloPopup = this.game.add.button(0,0,"falloScreen",this.HidePopup,this);
        falloPopup.visible = false;
        
        tribunaRefresh = 0;
        
        this.newAttemp();
    },
   update: function(){// pelota.body.y = 300;
       console.log("pause: "+isPause);
       tribunaRefresh=tribunaRefresh+0.3;
       if(tribunaRefresh <= 180){
        tribuna.y = tribunaInitY + Math.sin(tribunaRefresh)*10;
       }else tribunaRefresh=0;
       
       initJabones = -100;
       endJabones= 800;
       
       jabonAmarillo2.x --;
       if(jabonAmarillo2.x <= initJabones) jabonAmarillo2.x = endJabones;
       jabonAzul2.x --;
       if(jabonAzul2.x <= initJabones) jabonAzul2.x = endJabones;
       jabonBlanco2.x --;
       if(jabonBlanco2.x <= initJabones) jabonBlanco2.x = endJabones;
       jabonAmarillo1.x --;
       if(jabonAmarillo1.x <= initJabones) jabonAmarillo1.x = endJabones;
       jabonAzul1.x --;
       if(jabonAzul1.x <= initJabones) jabonAzul1.x = endJabones;
       jabonBlanco1.x --;
       if(jabonBlanco1.x <= initJabones) jabonBlanco1.x = endJabones;
       jabonAmarillo0.x --;
       if(jabonAmarillo0.x <= initJabones) jabonAmarillo0.x = endJabones;
       jabonAzul0.x --;
       if(jabonAzul0.x <= initJabones) jabonAzul0.x = endJabones;
       jabonBlanco0.x --;
       if(jabonBlanco0.x <= initJabones) jabonBlanco0.x = endJabones;

       this.time = this.game.time.now - this.lasTime; //console.log("timeabvs: "+this.time);
       
        if(!isPause){
            if(State == "Awake"){}//{pelota.body.kinematic = false};
            if(State == "Charging"){ 
                console.log("state charging");
                 piso.body.setCollisionGroup(nadaGP);
                this.game.physics.p2.friction= 0;
                    this.tapado = false;
                    if(this.preloadBar.scale.y > -3.2)
                        this.preloadBar.scale.y = this.preloadBar.scale.y-0.015;
                    else {
                        this.preloadBar.scale.y = -3.2;
                        this.OnUp();
                    }
                    frictioner = 0;
                    rotationPelota = 0;
                    
                    
                    finishPatear = false;

                }

                if(State == "Shooting" && finishPatear && !startPatear){
                    if(!patearSounded){
                        patearSounded = true;
                        soundPatear.play('');
                    }
                    guante.frame = 1;
                    
                    Speed = Math.abs(this.preloadBar.scale.y)/3.2;
                    
                    distanceTiro = 600*Math.abs(this.preloadBar.scale.y)/3.2;

                    distancePelota = Math.sqrt((pelota.x-initPelotaX)*(pelota.x-initPelotaX)+(pelota.y-initPelotaY)*(pelota.y-initPelotaY));

                    if(guante.body.rotation < Math.abs(targetAngle)){//console.log(targetAngle +" angle");
                        if(targetAngle > 0){
                            guante.body.x += 2.5;
                            guante.body.y -= 1.5;
                            if(Math.abs(guante.body.rotation) < Math.abs(targetAngle*Math.PI/180)/1.1) guante.body.y -= 0.5;
                            else guante.body.y += 4;
                            
                            guante.body.rotation += 2.5*Math.PI/180;
                        }
                        if(targetAngle < 0){
                            guante.body.x -= 2.5;
                            guante.body.y -= 1.5;
                            
                            if(Math.abs(guante.body.rotation) < Math.abs(targetAngle*Math.PI/180)/1.1) guante.body.y -= 0.5;
                            else guante.body.y += 4;
                            
                            guante.body.rotation -= 2.5*Math.PI/180;
                        }
                    }
                    else{
                        guante.body.rotation = targetAngle;
                    }

                     if(frictioner < 100){
                         frictioner = frictioner+2.5; 
                         pelota.body.velocity.x = directionX*2000*Speed*(100-frictioner)/100;//pelota.body.x = pelota.body.x + directionX*Speed;
                         pelota.body.velocity.y = directionY*2000*Speed*(100-frictioner)/100;//pelota.body.y = pelota.body.y  + directionY*Speed;
                    }
                    else{
                        pelota.body.velocity.x = 0;
                        pelota.body.velocity.y = 0;
                        pelota.body.angularDamping = 0.9999;
                        pelota.body.damping = 0.99999999999999;
                        if(State != "UpdatedData")
                        State = "finishAttemp";
                        
                    }

                    pelota.body.angularVelocity = 50*Math.abs(this.preloadBar.scale.y)/3.2;
                }

           if(State == "finishAttemp"){
                guante.body.velocity.x = 0;
                guante.body.velocity.y = 0;
                isPause = true;
                
               /*if(!this.tapado && pelota.body.x > 230 && pelota.body.x < 630 && pelota.body.y < 310){//falta validar la colision con dentro del arco
                  this.Gol();
                }
                else{
                   this.Fail();        
                }*/
                
          
               
                timeInFinish = this.time;
                attempts++; console.log(attempts);
               
               
                if(!this.tapado){//falta validar la colision con dentro del arco
                    if(pelota.body.x > 230 && pelota.body.x < 630 && pelota.body.y < 310){
                        this.GolInstant();
                    }
                    else{
                        this.FailInstant();    
                    }
                }
                else{
                    //this.tapado = false; 
                    this.FailInstant(); 
                  
                }
                
               State = "UpdatedData";

           }
        }
       
        if(State == "UpdatedData"){
                if((this.time - timeInFinish) > 500){
                    timeInFinish = Math.POSITIVE_INFINITY;
                    if(!this.tapado){//falta validar la colision con dentro del arco
                    if(pelota.body.x > 230 && pelota.body.x < 630 && pelota.body.y < 310){
                        console.log("gol: "+this.score);
                        this.Gol();
                    }
                    else{
                        this.Fail();    
                    }
                }
                else{
                    this.tapado = false; console.log("la tapó");
                    this.Fail(); 
                  
                }
                }
        }
			
         if(pelota.scale.y >= 0.075){
            pelota.scale.x = initPelotaScale*(pelota.body.y/initPelotaY);
            pelota.scale.y = initPelotaScale*(pelota.body.y/initPelotaY);

        }

       if(startPatear && (this.game.time.now - timeInStart) < 600){
            console.log("entree " +(startPatear));
            player.animations.play("patear");
            player.y -= 3;
            player.x += 4.5;
            player.scale.y *= 0.98;
            player.scale.x *= 0.98;
        }
       else{
           startPatear =false;
           finishPatear = true;
           timeInStart = 0;
        }
       
        pelota.body.debug = false;
        barraIzquierda.visible = false;
        barraDerecha.visible = false;
        barraSuperior.visible = false;
        piso.visible = false;
        this.time = this.game.time.now-this.lasTime;
       
       soundFail.volume = soundFail.volume*0.993;
       this.label_time.text = (Math.floor(this.time/1000) + ":"+Math.round((this.time-1000*Math.floor(this.time/1000))/10));
	},
    render: function(){
    },
   OnDown: function() {
			//State = "Charging";
		},
    OnPlayerUp: function(){
          
    },
    OnUp: function() {
            //attempts++;
			if(State == "Charging"){
                
                distanceArquero = Math.sqrt((targetArqueroX-guante.x)*(targetArqueroX-guante.x)+(targetArqueroY-guante.y)*(targetArqueroY-guante.y));
                directionArqueroX = targetArqueroX - guante.x;
                directionArqueroY = targetArqueroY - guante.y;
                directionArqueroX =  directionArqueroX/distanceArquero;
                directionArqueroY =  directionArqueroY/distanceArquero;
				
				targetX = this.game.input.x;
				targetY = this.game.input.y;
				distance = Math.sqrt((targetX-pelota.x)*(targetX-pelota.x)+(targetY-pelota.y)*(targetY-pelota.y));
				directionX = targetX - pelota.x;
				directionX = directionX/distance;
				directionY = targetY - pelota.y;
				directionY = directionY/distance; 
				Speed = 20*Math.abs(this.preloadBar.scale.y)/3.2;
                number = Math.floor(Math.random()*100+1);
				State = "Shooting";
				console.log("random "+ number);
                if(number<=50) targetAngle = -45;
                else targetAngle = 45;
                arco.inputEnabled = false;
                startPatear = true;
                timeInStart = this.game.time.now;
			}
         
    },
    newAttemp: function (){
        this.game.physics.p2.gravity.y = 0;
        patearSounded = false;
        this.label_score.text = "¡Vamos!";
        
        player.frame = 0;
        player.scale.setTo(0.7,0.7);
        player.x = this.game.world.width/2 - player.width/2 -80;
		player.y = this.game.world.height/2 - player.height/2 +300 ;
        
        guante.scale.setTo(0.29,0.29);
        guante.body.x = this.game.world.width/2 - guante.width/2 + 45;
		guante.body.y = this.game.world.height/2 - guante.height/2 + 10;
        guante.body.rotation = 0;
        guante.frame = 0;
					
		pelota.scale.setTo(initPelotaScale,initPelotaScale);
		pelota.body.x = this.game.world.width/2 - pelota.width/2 + 60;
		pelota.body.y = this.game.world.height - pelota.height*1.5 - 40;
        pelota.body.velocity.x = 0;
        pelota.body.velocity.y = 0;
        pelota.body.angularVelocity = 0;
        pelota.body.damping = 0;
        pelota.body.angularDamping = 0;
        
        this.preloadBar.scale.y = 0;
        
        startPatear = false;
        
        arco.inputEnabled = true;
       
        guante.body.velocity.x = 0;
        guante.body.velocity.y = 0;
        
        this.game.physics.p2.gravity.y = 0;
        
        
        State = "Awake";
        isPause = false;
    },
    OnPlayerDown: function(player, pointer){
        State = "Charging";
        console.log("charg");
    },
    OnTaparPelota: function(body1, body2){
        console.log("TAPAREVENT "+this.isPause);
        if(!isPause){
            if((body1.sprite.name == "pelota" && body2.sprite.name == "guante") || (body2.sprite.name == "pelota" && body1.sprite.name == "guante")){
                State = "finishAttemp";
                this.tapado = true;

                return true;
            }else return false;
        }
        else return false;
    },
    HidePopup: function(){
        golPopup.visible = false;
        falloPopup.visible = false;
         if(attempts >= 5){
            attempts = 0;
            this.time = 0;
            this.score = 0;
            
        }
       this.newAttemp();
    },
    OnEnterCollision: function(target){
        if(target.sprite.name == "barra" && !isPause){
            console.log("TAPAREVENTB: "+isPause);
            State = "finishAttemp";
            this.tapado = true;
            this.game.physics.p2.gravity.y = 3000;
            piso.body.setCollisionGroup(pisoGP);
            pelota.body.collides(pisoGP, this.OnTaparPelota, this);
            piso.body.collides(pelotaGP, this.OnTaparPelota, this);
            this.game.physics.p2.friction= 500;
        }
        
         if(target.sprite.name == "guante" && !isPause){
            console.log("TAPAREVENTG: "+isPause);
            State = "finishAttemp";
            this.tapado = true;
            this.game.physics.p2.gravity.y = 2050;
            this.game.physics.p2.friction= 500;
        }
        
        
    },
    GolInstant: function(){
        console.log("entro");
        this.score++; 
        soundGol.play('');
        this.label_score.text = "¡Gooool!";
        switch(attempts){
            case 1:
                this.gol1.visible = true;
                break;
            case 2:
                this.gol2.visible = true;
                break;
            case 3:
                this.gol3.visible = true;
                break;
            case 4:
                this.gol4.visible = true;
                break;
            case 5:
                this.gol5.visible = true;
                break;
        }
    },
    Gol: function(){
        
        
        if(attempts <5)
            golPopup.visible = true;
        else 
            this.GameOverPopup();


    },
    Fail: function(){
        
        
        if(attempts <5)
            falloPopup.visible = true;
        else 
            this.GameOverPopup();
    },
    FailInstant: function(){
        console.log("fallo");
        soundFail.play('');
        soundFail.volume = 1;
        this.label_score.text = "¡Buuuuu!";
                    //soundFail.fadeIn(0);
        switch(attempts){
            case 1:
                this.fallo1.visible = true;
                break;
            case 2:
                this.fallo2.visible = true;
                break;
            case 3:
                this.fallo3.visible = true;
                break;
            case 4:
                this.fallo4.visible = true;
                break;
            case 5:
                this.fallo5.visible = true;
                break;
        }         
    },
    GameOverPopup: function(){console.log("gameover!");
        var gameOverTitle = this.game.add.sprite(0,0,"bgGOpositive");
        var playButton = this.game.add.button(656,550,"play",this.Compartir,this);
        playButton.anchor.setTo(0.5,0.5);
        playButton.renderable = false;
        alert("GO->Equipo: "+buttonClicked+ " Metiste: "+this.score+" goles en "+this.time/1000+" seconds!");
    },
    Compartir: function(){
        console.log("compartiendo");
        this.game.state.start("GameOver",true,false,this.score, this.time, team);
    }
}
