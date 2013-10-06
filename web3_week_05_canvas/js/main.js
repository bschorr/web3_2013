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

					//Particles
					var squares;			//Array of particles
					var counter;
					var trueCounter;

					/*---------- FUNCTIONS ----------*/							

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

				  	function square (mySize, myColor) {

						this.mySize = mySize;
						this.myColor = myColor;
						this.angle = 0;
						this.trigger = false;
						
						this.update = function() {
							if (this.trigger === true) this.angle+= 1;
    						if ( this.angle >= 90 ) {
      							this.angle = 0;
      							this.trigger = false;
      						}
						}
      					
      					this.draw = function () {
      						ctx.save();
      							if (myColor >= 16) { 
      								ctx.fillStyle = "#"+(this.myColor).toString(16)+(this.myColor).toString(16)+(this.myColor).toString(16);;
      							} else {
      								ctx.fillStyle = "#0"+(this.myColor).toString(16)+"0"+(this.myColor).toString(16)+"0"+(this.myColor).toString(16);
      							}
      							ctx.rotate(this.angle*Math.PI/180);
      							ctx.translate (-this.mySize/2, -this.mySize/2);
      							ctx.fillRect (0, 0, this.mySize, this.mySize);
      							//ctx.stroke();
      						ctx.restore();
      					}


					}

					function setup(){
						
						squares = new Array(30);
						counter = 0;
						trueCounter = 0;
						var temp = 16;
						temp = temp.toString(16);
						console.log(temp);

						for(var i = 0; i < squares.length; i++){
							
							var tempSq = new square( i*50, i*8 );
							squares[i] = tempSq;

						}

						ctx.translate (canvas.width/2, canvas.height/2);
						
						draw();
					}						

					// var n = 0;
					
					function draw(){

						ctx.fillStyle = '#fff';
						ctx.fillRect(0, 0, canvas.width/ratio, canvas.height/ratio);

						for ( var i = squares.length-1; i > 0; i--) {
							if (trueCounter === i) squares[i].trigger = true;
							squares[i].update();
							squares[i].draw();
						}

      						//ctx.fillRect (0, 0, 50, 50);

      					  counter+=2;
						  if (counter%8 === 0) trueCounter++;
						  if (trueCounter > squares.length) {
						    trueCounter = 0;
						    counter = 0;
						  }

						//console.log(squares.length);
						requestAnimationFrame (draw);



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