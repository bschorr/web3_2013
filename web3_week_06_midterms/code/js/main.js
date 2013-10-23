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
		title.style.marginTop = newMargin + "px";


	});

	thisDiv.addEventListener("mouseout", function() {

	var title = this.querySelector(".project_title");
	console.log (title);
	title.style.marginTop = "100%";

	});
}

var grid = document.getElementsByClassName ('item w2');

//console.log (item);

for (var i = 0; i < grid.length; i++) {

	var thisDiv = grid.item(i);

	thisDiv.addEventListener("mouseover", function() {

		var title = this.querySelector(".project_title");
		var topMargin = title.clientHeight;
		var curMargin = this.clientHeight;
		var newMargin = curMargin - topMargin;
		title.style.marginTop = newMargin + "px";

	});

	thisDiv.addEventListener("mouseout", function() {

	var title = this.querySelector(".project_title");
	console.log (title);
	title.style.marginTop = "100%";

	});
}

var grid = document.getElementsByClassName ('item w3');

//console.log (item);

for (var i = 0; i < grid.length; i++) {

	var thisDiv = grid.item(i);

	thisDiv.addEventListener("mouseover", function() {

		var title = this.querySelector(".project_title");
		
		var topMargin = title.clientHeight;
		var curMargin = this.clientHeight;
		var newMargin = curMargin - topMargin;
		title.style.marginTop = newMargin + "px";

	});

	thisDiv.addEventListener("mouseout", function() {

	var title = this.querySelector(".project_title");
	console.log (title);
	title.style.marginTop = "100%";

	});
}





// var item2 = document.querySelector('.item.w2');

// item2.addEventListener("mouseover", function() {

// 	var title = item2.firstElementChild;
// 	console.log (title);
// 	title.style.marginTop = "132.5px";

// });

// var item2 = document.querySelector('.item.w2');

// item2.addEventListener("mouseout", function() {

// 	var title = item2.firstElementChild;
// 	console.log (title);
// 	title.style.marginTop = "100%";

// });

// var item3 = document.querySelector('.item.w3');

// item3.addEventListener("mouseover", function() {

// 	var title = item3.firstElementChild;
// 	console.log (title);
// 	title.style.marginTop = "132.5px";

// });

// var item3 = document.querySelector('.item.w3');

// item3.addEventListener("mouseout", function() {

// 	var title = item3.firstElementChild;
// 	console.log (title);
// 	title.style.marginTop = "100%";

// });