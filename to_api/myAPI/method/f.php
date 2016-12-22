<?php
  function f ($data) {
$data=json_decode($data,true);
if (!isset($data['f']) or $data['f']=="") {$data['f']="./";}
if (!isset($data['cm']) or $data['f']=="") {$data['cm']="view";}
$err_n=0;
if ($data['cm']=="view")
	{ if (is_dir($data['f']))
		{
		$files = scandir($data['f']);
		$ch=0;
			foreach($files as $file) {
			  /* Отбрасываем текущий и родительский каталог */
			  if (($file == '.') || ($file == '..')) continue;
			  $f0 = $data['f'].'/'.$file; //Получаем полный путь к файлу
			  /* Если это директория */
			  if (is_dir($f0)) {$arr[$ch]=$file."/"; $ch++;}/* Выводим, делая заданный отступ, название директории */
			  /* Если это файл, то просто выводим название файла */
			  else $arr[$ch]=$file; $ch++;
			}
			$ret['f']=$arr;
			$ret['dir']=$data['f'];
		}
		else {$ret['err'][$err_n]="it_is_not_a_folder";$err_n++;}
	}
elseif ($data['cm']=="open")
	{
		if (is_file($data['f']))
		{
			$ret['name']=basename($data['f']);
			$ret['dir']=$data['f'];
			$ret['file'] = file_get_contents($data['f']);
		}
		else
		{
			$ret['err'][$err_n]="file_undifined";$err_n++;
		}		
	}
elseif ($data['cm']=="del")
	{
		if (is_file($data['f']))
		{
			if (!unlink($data['f'])){$ret['err'][$err_n]=$data['f']."do_not_deleted";$err_n++;}
			else {$ret['f']="deleted";}
		}
		elseif (is_dir($data['f']))
		{
			if (!rmdir($data['f'])){$ret['err'][$err_n]=$data['f']."do_not_deleted";$err_n++;}
			else {$ret['f']="deleted";}
		}
		else
		{
			$ret['err'][$err_n]="file_undifined";$err_n++;
		}		
	}
elseif ($data['cm']=="size")
	{
		if (is_file($data['f']))
		{
			
			$ret['size']=filesize($data['f']);
		}
		elseif (is_dir($data['f']))
		{
			$ret['size']=disk_total_space($data['f']);
		}
		else
		{
			$ret['err'][$err_n]="file_undifined";$err_n++;
		}		
	}
	return $ret;
}

?>