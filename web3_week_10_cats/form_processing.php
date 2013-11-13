<?php

	/*
	This file is pure PHP. 
	Usually, no HTML is ever outputed to the browser. This will only be done if we get errors.

	The reason for a separate file is for the POST superglobal to be updated for this page and not "index.php".
	This prevents the POST data to be resubmitted to our database if the page is refreshed.
	*/

	//First thing is setting a boolean to false.
	//If by the end of this file this is still false, an error from will be displayed.
	$bIsImage = false;

	//First, test if our POST superglobal exists.
	if (isset($_POST['submit'])) {

		//If it does, pull the string from the url field.
		$url = isset($_POST['url']) ? $_POST['url'] : "";

		//Here we are testing if the URL actually points to an image.
		//If it is an image, it will return an image type. If not, it will return FALSE + warning.
		//the @ in front of it tells PHP to ignore any warnings or errors being outputted by this function.
		$bIsImage = @exif_imagetype($url);

	}

	//Ok, it IS an image. Let's do all of the following.
	if ( $bIsImage !=  false ) {
		
		//The following lines prevent PHP to throw errors if parts of our POST data are non-existent.
		//This would happen if someone only fills in one of the fields and hits submit.
		$password = isset($_POST['password']) ? $_POST['password'] : "";
		$url = isset($_POST['url']) ? $_POST['url'] : "";

		//set up our connection as a variable to do the INSERT query. Always ommit password (*****).
		$connection = mysqli_connect('localhost','root','*****', 'catsDB');

		//for safety: http://php.net/manual/en/function.mysql-real-escape-string.php
		$url = mysqli_real_escape_string($connection, $url);

		//The string that will perform our query and insert our URL
		$query  = "INSERT INTO cats (url) VALUES ('{$url}')";

		//defining a result boolean to false.
		$result = false;

		//test if password was correct.
		if ($password == "omgcats") {
			//if password is correct, attempt query.
			$result = mysqli_query($connection, $query);
		} else {
			//if password is incorrect, echo an error and kill the process.
			echo "Wrong password.";
			die();
		}

		//if insert query was succesful, it returns a TRUE value.
		if ($result) {
			//Our database has been updated! YES! Time to head back to 'index.php'
			header("Location: index.php");
			die();

		} else {
			//oops. Something went wrong. Output the error.	
			die("Database query failed. " . mysqli_error($connection));
		}

		
	} else {
		//Turns out it wasn't even an image to begin with.
		echo "Error loading image from Url.";
	}

?>
