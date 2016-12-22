<?php
function chart2 ($data)
{$err_n=0;
	
	$data=json_decode($data, true);
	if ($data['id']=="" or !isset($data['id'])) {$err[$err_n]="id_type_undefined"; $err_n++; return $err;}
	if ($data['param']=="" or !isset($data['param'])) {$err[$err_n]="param_undefined"; $err_n++; return $err;}
	if ($data['data']=="" or !isset($data['data']) or count($data['data'])<1) {$err[$err_n]="data_undefined"; $err_n++; return $err;}

	global $_CONFIG;
	$db = new SafeMySQL($_CONFIG);
	$type = $db -> getCol("SELECT id FROM object WHERE type=?i",$data['id']);
	$objs = $db -> getAll("SELECT * FROM object WHERE type=?i",$data['id']);
	$w = array();
	for ($i=0;$i<count($data['data']);$i++)
	{
		$w[$i]='`'.$data['data'][$i][0].'` '.$data['data'][$i][1]." '".$data['data'][$i][2]."' ";
	}
			$soc='`id_object` '.' IN '." ".'(?a)'." ";
	$where=implode(' AND ', $w);
	$rows = $db -> getAll("SELECT * FROM data WHERE `type`=?s AND ?p AND ".$soc , $data['param'] , $where , $type);
	
	for ($i=0;$i<count($objs);$i++)
	{	
		$sum=0;
		for ($c=0;$c<count($rows);$c++)
		{
			if ($objs[$i]['id']==$rows[$c]['id_object'])
				{ $sum=$sum+$rows[$c]['val'];}
		}
		$row[$i]=array($objs[$i]['name'], $sum);
	}
	$cols= array('Заклад'=>'string', 'Показник'=>'number');
	    $dataTable = array(
    'cols' => $cols,
    'rows' => $row
    );
	return $dataTable;
}
?>