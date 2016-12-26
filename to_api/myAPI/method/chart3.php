<?php
function chart3 ($data)
{$err_n=0;
	
	$data=json_decode($data, true);

	if ($data['param']=="" or !isset($data['param'])) {$err[$err_n]="param_undefined"; $err_n++; return $err;}
	if ($data['data']=="" or !isset($data['data']) or count($data['data'])<1) {$err[$err_n]="data_undefined"; $err_n++; return $err;}

	global $_CONFIG;
	$db = new SafeMySQL($_CONFIG);
	$types = $db -> getAll("SELECT * FROM `objecttype`");
	//print_r(json_encode($types));
	for ($cz=0;$cz<count($types);$cz++)
		{
	
	$type = $db -> getCol("SELECT id FROM object WHERE type=?i",$types[$cz]['id']);
	$objs = $db -> getAll("SELECT * FROM object WHERE type=?i",$types[$cz]['id']);
	$w = array();
	for ($i=0;$i<count($data['data']);$i++)
	{
		$w[$i]='`'.$data['data'][$i][0].'` '.$data['data'][$i][1]." '".$data['data'][$i][2]."' ";
	}
			$soc='`id_object` '.' IN '." ".'(?a)'." ";
	$where=implode(' AND ', $w);
	$rows = $db -> getAll("SELECT * FROM data WHERE `type`=?s AND ?p AND ".$soc , $data['param'] , $where , $type);
	$sum=0;
	for ($i=0;$i<count($objs);$i++)
	{	
		
		for ($c=0;$c<count($rows);$c++)
		{
			if ($objs[$i]['id']==$rows[$c]['id_object'])
				{ $sum=$sum+$rows[$c]['val'];}
		}
		
	}
	$row[$cz]=array($types[$cz]['name'], $sum);
		}
	$cols= array('Заклад'=>'string', 'Показник'=>'number');
	    $dataTable = array(
    'cols' => $cols,
    'rows' => $row
    );
	return $dataTable;
}
?>