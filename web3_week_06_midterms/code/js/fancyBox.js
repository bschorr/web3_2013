	var myNode = document.querySelector('.page');

	function centerImage(theImage) {


		var myDifX = (window.innerWidth - theImage.clientWidth)/2;
		var myDifY = (window.innerHeight - theImage.clientHeight)/2;

		theImage.style.top = myDifY + 'px';
		theImage.style.left = myDifX + 'px';

		return theImage;
	}

	myNode.addEventListener("click", function(e) {

		if(e.target.tagName === 'IMG') {

			var myOverlay = document.createElement('div');
			var floatingDiv = document.createElement('div');

			myOverlay.id = 'overlay';
			floatingDiv.id = 'floatingDiv';

			document.body.appendChild(myOverlay);
			myOverlay.appendChild(floatingDiv);


			//set up overlay styles
			myOverlay.style.position = 'absolute';
			myOverlay.style.top = 0;
			myOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
			myOverlay.style.cursor = 'pointer';

			//set up floating div styles
			floatingDiv.style.position = 'absolute';
			floatingDiv.style.top = 0;
			floatingDiv.style.backgroundColor = '#333';
			floatingDiv.style.width = "80%";
			floatingDiv.style.height = "475px";

			//resize and position overlay
			myOverlay.style.width = window.innerWidth + 'px';
			myOverlay.style.height = window.innerHeight + 'px';
			myOverlay.style.top = window.pageYOffset + 'px';
			myOverlay.style.left = window.pageXOffset + 'px';

			//Create image element
			var imageSrc = e.target.src;
			var largeImage = document.createElement('div');
			largeImage.id = 'largeImage';
			largeImage.style.width = "50%";
			largeImage.style.height = "100%";
			//largeImage.src = imageSrc;
			imageSrc = imageSrc.substr(0, imageSrc.length-4) + '_hi.jpg';
			imageSrc = "url('"+imageSrc+"')";
			largeImage.style.backgroundImage = imageSrc;
			largeImage.style.backgroundSize = "600px";
			largeImage.style.backgroundPosition = "center";
			largeImage.style.backgroundColor = 'rgba(255,0,0,0.7)';
			console.log (imageSrc);
			//largeImage.style.display = 'block';
			//largeImage.style.position = 'absolute';
			floatingDiv.appendChild(largeImage);
			centerImage (floatingDiv);

			
			//wait until the image has loaded
			largeImage.addEventListener('load', function() {

				//Resize if taller
				// if (this.height > window.innerHeight) {
				// 	this.ratio = window.innerHeight / this.height;
				// 	this.height = this.height * this.ratio;
				// 	this.width = this.width * this.ratio;
				// }

				// //Resize if wider
				// if (this.width > window.innerWidth) {
				// 	this.ratio = window.innerWidth / this.width;
				// 	this.height = this.height * this.ratio;
				// 	this.width = this.width * this.ratio;
				// }

				this.style.height = "475px";
				this.style.width = "50%";
				floatingDiv.appendChild(largeImage);
				centerImage (floatingDiv);


			}); //image has loaded

			myOverlay.addEventListener('click', function() {
				if (myOverlay) {
					window.removeEventListener('resize', window, false);
					window.removeEventListener('scroll', window, false);
					myOverlay.parentNode.removeChild(myOverlay);
				}
			}, false);

			window.addEventListener('scroll', function() {
				if (myOverlay) {
					myOverlay.style.top = window.pageYOffset + 'px';
					myOverlay.style.left = window.pageXOffset + 'px';
					centerImage (floatingDiv);
				}
			}, false);

			window.addEventListener('resize', function() {
				if (myOverlay) {
					myOverlay.style.width = window.innerWidth + 'px';
					myOverlay.style.height = window.innerHeight + 'px';
					myOverlay.style.top = window.pageYOffset + 'px';
					myOverlay.style.left = window.pageXOffset + 'px';

					centerImage(floatingDiv);
				}
			}, false);


		} // target is an image

	}, false); //image is clicked