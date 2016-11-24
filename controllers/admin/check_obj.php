<?php
include ("lib/templater.php");
if ($user_type=="1")
{
	$obj_id=$route['arg'][0];
	$db = new SafeMySQL($_CONFIG);

	$obj = $db -> getRow('SELECT * FROM  `object` WHERE id=?i', $obj_id);

	if ($obj!=="error")
		{
			
		$run=template_data("tpl/admin/energosad.html","object",$obj);
		$moretpl=file_get_contents('tpl/admin/energomore.html');
		$jtpl=json_decode(file_get_contents('tpl/admin/moresel.json'), true);

		$moredata = $db -> getRow('SELECT * FROM  `more` WHERE id=?i', $obj_id);
		$moretpl=select_option ($jtpl , $moredata , $moretpl);
		$moretpl=template_str_data($moretpl , "more" , $moredata);
		$run=str_replace("{!energomore!}",$moretpl,$run);
						$tpl=file_get_contents('tpl/index.html');
				$tpl=str_replace("{!content!}",$run,$tpl);	
		print_r($tpl);
		}
	else 
		{	
		$run=file_get_contents("tpl/404.html");
		print_r($run);
		}
}
else
{
		$run=file_get_contents("tpl/login.html");
		print_r($run);	
}
?>