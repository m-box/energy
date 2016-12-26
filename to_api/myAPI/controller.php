<?php

$func=$route['arg'][0];
$data=$_POST['data'];
$ur='to_api/myAPI/method/'.$func.'.php';
if (file_exists($ur))
	{

						include($ur);
						$request = $func($data);

		

	}
else
	{
		$request['err']="method_undifined";
	}
	
print_r(json_encode($request , JSON_NUMERIC_CHECK));
?>