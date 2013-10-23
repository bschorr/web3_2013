	var json = [{
	projTitle:"Heart Pillow",
	projDescription:"Heart Pillow is a transhuman artifact that reproduces a persons heartbeat remotely and in real time. As one user wears a heart rate sensor, another user can feel the pillow pulsate at the same rate from a distance. The project allows the very pulse of life to be transferred into an everyday object — in this case, a pillow — making it serve both as an extension to the users body and as mimicry of life itself. It also raises interesting questions on the meaning of emotion and affection and their scalability to the various modes of interaction that may arise from an augmented object.",     
	}
	];

	console.log (json[0].result);
	console.log (json[0].count);


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
			var textDiv = document.createElement('div');

			//add text to floating div
			var projTitle = document.createElement('h2');
			var projTitleText=document.createTextNode(json[0].projTitle);
			projTitle.appendChild(projTitleText);
			textDiv.appendChild(projTitle);
			projTitle.style.color = '#bbb';
			projTitle.style.paddingBottom = "40px";

			var projDescription = document.createElement('h3');
			var projDescriptionText=document.createTextNode(json[0].projDescription);
			projDescription.appendChild(projDescriptionText);
			textDiv.appendChild(projDescription);
			projDescription.style.color = '#bbb';
			projDescription.style.lineHeight = "2.0em";

			floatingDiv.appendChild(textDiv);
			textDiv.style.position = 'absolute';
			textDiv.style.width = '44%';
			textDiv.style.marginLeft = "53%";
			textDiv.style.marginTop = "30px";
			textDiv.style.overflow = "hidden";

				

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
			imageSrc = imageSrc.substr(0, imageSrc.length-4) + '_hi.jpg';
			imageSrc = "url('"+imageSrc+"')";
			largeImage.style.backgroundImage = imageSrc;
			largeImage.style.backgroundSize = "600px";
			largeImage.style.backgroundPosition = "center";
			largeImage.style.backgroundColor = 'rgba(255,0,0,0.7)';
			console.log (imageSrc);

			//addImage to floatingDiv
			floatingDiv.appendChild(largeImage);
			centerImage (floatingDiv);

			

			
			//wait until the image has loaded
			largeImage.addEventListener('load', function() {

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







	