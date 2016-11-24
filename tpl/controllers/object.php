<?php
include ("lib/templater.php");

	$obj_id=$route['arg'][0];
	$db = new SafeMySQL($_CONFIG);

	$obj = $db -> getRow('SELECT * FROM  `object` WHERE id=?i', $obj_id);
	$res = $db -> getAll("SELECT * FROM `more` WHERE `id`='?p'", $obj_id);
	if (count($res)==0)
	{
		$db -> query("INSERT INTO `more` SET  `id`='?p'", $obj_id);
	}

	if ($obj!=="error")
		{
		$run=template_data("tpl/energo-face.html","object",$obj);
			if ($user_type=="1")
				{
				$run=str_replace("{!administr!}",'<a class="btn btn-warning pull-right" href="/object/edit/'.$obj_id.'">Редагувати заклад</a><br>',$run);	
				}
			else
				{
				$run=str_replace("{!administr!}",' ',$run);	
				}
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