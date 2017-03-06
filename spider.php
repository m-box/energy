<?php
include('config.php');
include("lib/safemysql.php");


$date = date("Y-m-d");
$db = new SafeMySQL($_CONFIG);
$obj = $db -> getAll('SELECT * FROM `object`');

for ($i=0;$i<count($obj);$i++)
{
$param['gas'] = 0;
$param['water'] = 0;
$param['people'] = 0;
$param['teplo'] = 0;
$param['electro'] = 0;
	$data = $db -> getAll('SELECT * FROM `data` WHERE `date`=?s AND `id_object`=?i ', $date , $obj[$i]['id']);
	for ($c=0;$c<count($data);$c++)
		{
			if ($data[$c]['type']=='gas'){$param['gas']=1;}
			if ($data[$c]['type']=='water'){$param['water']=1;}
			if ($data[$c]['type']=='people'){$param['people']=1;}
			if ($data[$c]['type']=='teplo'){$param['teplo']=1;}
			if ($data[$c]['type']=='electro'){$param['electro']=1;}
		}
		if ($param['gas']==0){$db -> query("INSERT INTO  `data` (`id` ,`id_object` ,`date` ,`type` ,`val`) VALUES (NULL ,  ?i,  ?s,  'gas',  '0');", $obj[$i]['id'], $date);}
		if ($param['water']==0){$db -> query("INSERT INTO  `data` (`id` ,`id_object` ,`date` ,`type` ,`val`) VALUES (NULL ,  ?i,  ?s,  'water',  '0');", $obj[$i]['id'], $date);}
		if ($param['people']==0){$db -> query("INSERT INTO  `data` (`id` ,`id_object` ,`date` ,`type` ,`val`) VALUES (NULL ,  ?i,  ?s,  'people',  '0');", $obj[$i]['id'], $date);}
		if ($param['teplo']==0){$db -> query("INSERT INTO  `data` (`id` ,`id_object` ,`date` ,`type` ,`val`) VALUES (NULL ,  ?i,  ?s,  'teplo',  '0');", $obj[$i]['id'], $date);}
		if ($param['electro']==0){$db -> query("INSERT INTO  `data` (`id` ,`id_object` ,`date` ,`type` ,`val`) VALUES (NULL ,  ?i,  ?s,  'electro',  '0');", $obj[$i]['id'], $date);}
}
?>