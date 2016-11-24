<?php
$config=file_get_contents("plugins/login_user/config.json");
$config=json_decode($config, true);

if ($config['status']['value']=="enable")
{	
	$db = new SafeMySQL($_CONFIG);
	
if(!isset($_SESSION['id']) || $_SESSION['id']=="") /* Если IP пользователя не совпадает с IP авторизации, присваиваем человеку статус Анон */
		{$id_user="anon";}
else
	{
		$id_user=$_SESSION['id'];
		$us = $db -> getRow("SELECT * FROM ?p WHERE id = ?i", $config['users']['value'], $id_user);
		$ip=$us['ip_user'];
		$user_type=$us['id_user_type'];
		if($ip != $_SERVER['REMOTE_ADDR']) {$id_user="anon";}
	}
}
?>