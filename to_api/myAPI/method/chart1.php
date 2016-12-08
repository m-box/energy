<?php
function chart1 ($data)
{$err_n=0;
	
	$data=json_decode($data, true);
	if ($data['id']=="" or !isset($data['id'])) {$err[$err_n]="id_type_undefined"; $err_n++; return $err;}
	if ($data['param']=="" or !isset($data['param'])) {$err[$err_n]="param_undefined"; $err_n++; return $err;}
	if ($data['data']=="" or !isset($data['data']) or count($data['data'])<1) {$err[$err_n]="data_undefined"; $err_n++; return $err;}
	$param=$data['param'];
	global $_CONFIG;
	$db = new SafeMySQL($_CONFIG);
	//$result = $db -> getCol("SELECT 'id' FROM 'object' WHERE 'type'=?i",$data['id']);
	$w = array();
	for ($i=0;$i<count($data['data']);$i++)
	{
		$w[$i]='`'.$data['data'][$i][0].'` '.$data['data'][$i][1]." '".$data['data'][$i][2]."' ";
	}
	$where=implode(' AND ', $w);
	$rows = $db -> getAll("SELECT * FROM `data` WHERE ?p" , $where);
	for ($i=0;$i<count($rows);$i++)
	{$row[$i]=array($rows[$i]['date'], $rows[$i][$param]);}
	$cols= array('Дата'=>'string', 'Показник'=>'number');
	    $dataTable = array(
    'cols' => $cols,
    'rows' => $row
    );
	return $dataTable;
}
?>