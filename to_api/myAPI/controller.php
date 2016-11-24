<?php
	include('config.php');
	include('lib/safemysql.php');
$table=$route['arg'][0];
$ur='to_api/rest/method/'.$_SERVER['REQUEST_METHOD'];
if (file_exists($ur))
	{

		$db = new SafeMySQL($_CONFIG);
		$result = $db -> getAll('SHOW TABLES;');
		$row_name='Tables_in_'.$_CONFIG['db'];
		$ok=0
		for ($i=0;$i<count($result);$i++)
		{
			if ($result[$i][$row_name]==$_SERVER['REQUEST_METHOD']) {$ok=1; break;}
		}
			if ($ok==1)
				{
					$config=file_get_contents("to_api/rest/config.json");
					$config=json_decode($config, true);
					$method=$_SERVER['REQUEST_METHOD'];
					if ($config[$method]['status']=='enable')
						{
							include ('to_api/rest/'.$method.'/method.php');
						}
					else
						{
							$request['err']="method_undifined_";
							print_r(json_encode($request));
						}
				}
			else
				{
					$request['err']="table_undifined";
					print_r(json_encode($request));
				}
	}
else
	{	$request['err']="method_undifined";
		print_r(json_encode($request));
	}



?>