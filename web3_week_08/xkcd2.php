<?php

	include_once 'simple_html_dom.php';

	for ($i=1; $i< 1286; $i++) { 
		
		$myURL = 'http://xkcd.com/' . $i;

		$oHtml = str_get_html($myURL);
		$Title = array_shift($oHtml->find('title'))->innertext;
		echo $title;

		// $html = new simple_html_dom();
		// $html->load_file($myURL); //put url or filename  
		// $title = $html->find('title');
		// echo $title->plaintext;

		$xkcd = '<a href="http://xkcd.com/' . $i . '">xkcd# ' . $i . '</a>' . ' ';
		echo $xkcd;

	}
?>