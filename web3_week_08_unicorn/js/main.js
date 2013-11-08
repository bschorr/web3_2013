				var canvas = document.getElementById('myCanvas');

				//Check if the browser supports canvas
				if(canvas.getContext){
					/*---------- VARIABLES ----------*/
					//Getting canvas context
					var ctx = canvas.getContext('2d');

					//Canvas position
					var canvasPosition;

					//Canvas size adjustment for Chrome and Firefox
					var ratio;
					var pList;
					var cList;
					var colors = ["#ff0033", "#ff6600", "#ffff00", "#00cc00", "#0033ff", "#663399", "#990099"];
					var unicornXcounter = 0;
					var unicornX;
					var prevUnicornX;
					var unicornInc = 10;
					var unicornY = canvas.height/2;
					var unicornImg = new Image();
					unicornImg.src = 'unicorn.png';
					var unicornFlippedImg = new Image();
					unicornFlippedImg.src = 'unicorn_flipped.png';
					var cloud = new Image();
					cloud.src = 'cloud.png';


					/*---------- FUNCTIONS ----------*/

					function map (value, istart, istop, ostart, ostop) {
      					return ostart + (ostop - ostart) * ((value - istart) / (istop - istart))
    				};						

					//Resizing the canvas to the full window size
					function canvasResize(){
						screenWidth = window.innerWidth;
						screenHeight = window.innerHeight;

						canvasPosition = canvas.getBoundingClientRect(); // Gets the canvas position
						canvas.width = screenWidth;
						canvas.height = screenHeight;
					}


					//Adjusting the size to work with Firefox and Chrome at retina resolutions 
					function canvasAdjustment(){
				    // finally query the various pixel ratios
			        var devicePixelRatio  = window.devicePixelRatio || 1;
			        //console.log(devicePixelRatio);
			        var backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
				                            ctx.mozBackingStorePixelRatio ||
				                            ctx.msBackingStorePixelRatio ||
				                            ctx.oBackingStorePixelRatio ||
				                            ctx.backingStorePixelRatio || 1;

				    ratio = devicePixelRatio / backingStoreRatio;
				    //console.log(ratio);
				    
				    // upscale the canvas if the two ratios don't match
					    if (devicePixelRatio !== backingStoreRatio) {

					        var oldWidth = canvas.width;
					        var oldHeight = canvas.height;

					        canvas.width = oldWidth * ratio;
					        canvas.height = oldHeight * ratio;

					        canvas.style.width = oldWidth + 'px';
					        canvas.style.height = oldHeight + 'px';

							ctx.scale(ratio, ratio);				        
					    }
				  	}

				  	function Cloud () {
				  		this.posX = Math.random();
				  		this.posX = map (this.posX, 0, 1, -300, canvas.width);
				  		this.posY = -500;
				  		this.vel = Math.random();
				  		this.vel = map (this.vel, 0, 1, 3, 7);

				  		this.draw = function() {
				  			this.posY += this.vel;
				  			ctx.drawImage(cloud, this.posX, this.posY);
				  		}

				  	}

					function Particle (posX, posY) {

						this.colorIndex = Math.floor(Math.random()*7);
						this.posX = posX;
						this.posY = posY;
						this.velX = (Math.random()) - 0.5;
						this.velY = Math.random();
						this.velY = map(this.velY, 0, 1, 1.5, 3);

						
						this.update = function() {
							this.velY += 0.1;
							this.posX += this.velX;	
							this.posY += this.velY;
						}					
      					
      					this.draw = function () {
							ctx.fillStyle = colors[this.colorIndex];
      						ctx.fillRect (this.posX, this.posY, 4, 4);
      					}


					}

					function setup(){
						
						pList = new Array();
						cList = new Array();
						draw();
					}						

					// var n = 0;
					
					function draw(){

						unicornXcounter += 1.5;

						var unicornXcos = Math.cos(unicornXcounter * (Math.PI/180));
						unicornX = map(unicornXcos, -1, 1, 100, canvas.width-100);

						ctx.fillStyle = '#84d2ff';
						ctx.fillRect(0, 0, canvas.width/ratio, canvas.height/ratio);

						for(var i = 0; i < 40; i++){
							
							var tempParticle = new Particle( unicornX, unicornY );
							pList.push (tempParticle);

						}

						if( unicornXcounter%24 === 0 ){

							var tempCloud = new Cloud();
							cList.push (tempCloud);

						}

						for ( var i = 0; i < pList.length; i++) {
							if (pList[i].posY > canvas.height) {
								pList.splice(i, 1);
							} else {
								pList[i].update();
								pList[i].draw();
							}
						}

						for ( var i = 0; i < cList.length; i++) {
							if (cList[i].posY > canvas.height) {
								cList.splice(i, 1);
							} else {
								cList[i].draw();
							}
						}

						var imgToDraw = new Image();

						if (prevUnicornX - unicornX > 0 ) imgToDraw = unicornImg;
						if (prevUnicornX - unicornX < 0 ) imgToDraw = unicornFlippedImg;

						var absCos = Math.abs(unicornXcos);
						if (absCos > 0.3) {
							var unicornRotation = map (Math.abs(unicornXcos), 0.3, 1, 1, 0);
						} else {
							var unicornRotation = 1;
						}
						ctx.drawImage(imgToDraw, unicornX-(imgToDraw.width/2*unicornRotation), unicornY-imgToDraw.height/2, imgToDraw.width*unicornRotation, imgToDraw.height);
						prevUnicornX = unicornX;

						requestAnimationFrame (draw);

						//console.log (pList.length);



					}
					
					

					//Resizing the canvas
					canvasResize();

					//Adjusting for retina
					//canvasAdjustment();
					ratio = 1;

					//Calling the setup function
					setup();		


				//If the browser doesn't support canvas
				}else{
					alert('Your browser doesn\'t support canvas');
				}