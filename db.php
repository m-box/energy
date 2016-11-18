<?php
include('config.php');
include('lib/safemysql.php');
$db = new SafeMySQL($_CONFIG);
$result = $db -> getAll('SHOW TABLES;');
//$result = $db -> fetch($result);
print_r($result);
?>