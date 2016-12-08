<?php
function data ($data)
{
	global $_CONFIG;
	global $us;
if ($us['id_user_type']==3)
{
	$db = new SafeMySQL($_CONFIG);
	$data=json_decode($data,true);
	$today = date("Y-m-d"); 
	if (!isset($data['id_object']) or $data['id_object']==''){return 'id_object_disable';}
	if (!isset($data['type']) or $data['type']==''){return 'type_disable';}
	if (!isset($data['val']) or $data['val']==''){return 'val_disable';}
	$obj = $db -> getAll("SELECT * FROM `data` WHERE `id_object`=?s AND `type`=?s AND `date`='?p'" , $data['id_object'] , $data['type'] , $today); 
	if (count($obj)==0)
		{
			$db -> query("INSERT INTO `data` (
			`id` ,
			`id_object` ,
			`date` ,
			`type` ,
			`val`
			)
			VALUES (
			NULL ,  ?s,  '?p',  ?s,  ?s
			);
			" , $data['id_object'] , $today , $data['type'] , $data['val']); return 'ok';
		}
	else
		{
			$id=$obj[0]['id'];
			$db -> query ("UPDATE  `data` SET  `val` =  ?s WHERE  `data`.`id` ='?p';", $data['val'] , $id); return 'ok';
		}
}
else
{
	return 'no_privilege!';
}
}



?>