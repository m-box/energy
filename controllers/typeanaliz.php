<?php
include ("lib/templater.php");

	$obj_id=$route['arg'][0];
	
	$db = new SafeMySQL($_CONFIG);

	$obj = $db -> getAll('SELECT * FROM  `objecttype` WHERE id=?i', $obj_id);


	if (count($obj)!==0)
		{
			$run=template_data("tpl/analizs.html","objecttype",$obj[0]);

			$tpl=file_get_contents('tpl/index.html');
			$tpl=str_replace("{!content!}",$run,$tpl);	
			print_r($tpl);
		}
	else 
		{	
			$run=file_get_contents("tpl/404.html");
			print_r($run);
		}

?>