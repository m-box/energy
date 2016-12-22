<?php
function test ($data)
{
	$con=conf('db.json');
	$csv = new SafeMySQL ($con['db1']);	
$prints['conf']=conf('db.json');	
$prints['table'] = $csv -> getAll("SHOW DATABASES");	
$prints['strs']='broadcast + youself';
return $prints;
}
?>