<?php
include ("lib/templater.php");
if ($user_type=="3")
{
if (!isset($route['arg'][0]) or $route['arg'][0]=='')
	{
		header_remove();
		header( 'Location: /check_adm/'.$us['id_object'], true, 303 ); 
	}
else
	{
		if ($route['arg'][0]!==$us['id_object'])
			{
				header_remove();
				header( 'Location: /check_adm/'.$us['id_object'], true, 303 ); 
			}
		else
			{
				
				$today = date("Y-m-d"); 
				$obj = new SafeMySQL($_CONFIG);
				$data = $obj -> getAll("SELECT * FROM `data` WHERE `id_object`=?s AND `date`='?p'" , $route['arg'][0] , $today);
				
				$db = $obj -> getAll("SELECT * FROM  `object` WHERE  `id` =?i",$us['id_object']);
				$adm=file_get_contents("tpl/admin/energoad.html");
				$form = template_str_data ($adm , "object" , $db[0]);
				for ($i=0;$i<count($data);$i++)
					{	$val=$data[$i]['val'];
						$type=$data[$i]['type'];
						$form=str_replace("{!".$type."!}" , $val , $form);
					}
				$tpl=file_get_contents("tpl/index.html");
				$tpl=str_replace("{!content!}",$form,$tpl);
				
				print_r(preg_replace("~\{!.+?!\}~", '', $tpl));	
			}
	}
}
?>