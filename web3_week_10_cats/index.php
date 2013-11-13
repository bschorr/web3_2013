<!doctype html>
<html>
	<head>
		<title>Cat Feed</title>
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
	</head>

	<body>
		<div class='page'>
			<h1>Cat Feed</h1>

			<!-- FORM:
			Notice the "post" method in the opening form tag. This will be used to process the data from this form.
			The action for this form is "form_processing.php", also specified in the opening tag. 
			The query for ADDING elements to our database will be done in this separate PHP file (form_processing.php).-->

			<form action="form_processing.php" method="post">
				URL: <input type="text" name="url" value="" />
				Password: <input type="password" name="password" value="" />
				<input type="submit" name="submit" value="Submit" id="submit"/>
			</form>
			
			<!-- This div tag is used only to apply masonry.js -->
			<div id="container">

			<!-- This is where the PHP magic starts.-->
				<?php
					
					//Here we're connecting to our database. Notice how "localhost" is used.
					//This is because our PHP and database are in the same server.
					//I've omitted the password (*****). ALWAYS remember to do that before posting code to Github.
					mysql_connect('localhost','root','*****');
					mysql_select_db('catsDB');

					//This is querying ALL the data in the cats table in my catsDB database.
					//"ORDER BY id DESC" takes this data and orders it by ID in a descending order.
					//The reason I do this is so the last (newest) updated cat will always show up at the top.
					//Without this, the oldest cat would be at the top, and the newest at the bottom.
					$sql = "SELECT * FROM cats ORDER BY id DESC";
					$query = mysql_query($sql);

					//This makes us loop through all the data we fetched.
					while($data = mysql_fetch_array($query)) {

						//this gets the 'id' and 'url' from our current table row. URL is string type.
						//We're not using the id for anything yet.
						$id = $data['id'];
						$url = $data['url'];

						//This is the string to be echoed in our HTML output.
						//Notice that it is an image tag that holds the URL we pulled from our DB as source.
						$echoString = '<img src=' . $url . ' class="item" onload="msnry.layout()">';

						//echo your image tag.
						echo $echoString;

					}
				?>
			</div>
		</div>
	</body>
	<script type="text/javascript" src="js/masonry.pkgd.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</html>