

		var container = document.querySelector('#container');
		var msnry = new Masonry( container, {
		  // options
		  columnWidth: '.item',
		  columnWidth: '.item.w2',
		  columnWidth: '.item.w3',
		  itemSelector: '.item',
		  gutter: '.gutter-sizer',
		});

		//var item = document.querySelector('.item');

		// container.addEventListener("mouseover", function(e) {

		// 	if (e.target.className === 'item') {
		// 	var title = e.target.firstElementChild;
		// 	console.log ("0");
		// 	title.style.marginTop = "375px";
		// 	}

		// });

		// var item = document.querySelector('.item');

		// item.addEventListener("mouseover", function() {

		// 	var title = item.firstElementChild;
		// 	console.log (title);
		// 	title.style.marginTop = "375px";

		// });


var pageWidth = document.querySelector('.page');

if (pageWidth.clientWidth > 600) {
	// scripts

		var grid = document.getElementsByClassName ('item');

		//console.log (item);

		for (var i = 0; i < grid.length; i++) {

			var thisDiv = grid.item(i);

			thisDiv.addEventListener("mouseover", function() {

				var title = this.querySelector(".project_title");
				//console.log ("0");

				var topMargin = title.clientHeight;
				var curMargin = this.clientHeight;
				var newMargin = curMargin - topMargin;
				if (pageWidth.clientWidth > 475) title.style.marginTop = newMargin + "px";


			});

			thisDiv.addEventListener("mouseout", function() {

			var title = this.querySelector(".project_title");
			console.log (title);
			if (pageWidth.clientWidth > 475) title.style.marginTop = "100%";

			});
		}


	}

