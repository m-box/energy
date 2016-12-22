<?php
  function config ($data) {
$data=json_decode($data,true);
if (!isset($data['f']) or $data['f']=="") {$data['f']="";}
if (!isset($data['cm']) or $data['f']=="") {$data['cm']="list";}
$err_n=0;
if ($data['cm']=="list")
	{
		if ($data['f']=='' or !isset($data['f'])) {$route='ph/config/';}
		else {$route='ph/config/'.$data['f'];}
		if (is_dir($route))
		{
		$files = scandir($route);

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
elseif ($data['cm']=="view")
	{ if ($data['f']=='' or !isset($data['f'])) {$ret['err'][$err_n]="file_undifined";$err_n++;}
		else 
		{
			$str=str_replace(" ","",$data['f']);
			$str=explode(">",$str);
			if (count($str)==1)
				{
					if (is_file('ph/config/'.$str[0]))
						{
							$file=file_get_contents('ph/config/'.$str[0]);
							$file=json_decode($file,true);
							$ret['f']=$file;
							$ret['config']=$str[0];
						}
					else
						{$ret['err'][$err_n]="it_is_not_a_config_file";$err_n++;}
				}
			elseif (count($str)>1)
				{
					if (is_file('ph/config/'.$str[0]))
						{
							$file=file_get_contents('ph/config/'.$str[0]);
							$file=json_decode($file,true);
							$role;
							$bs=1;
							$r=0;
							 for ($i=1;$i<count($str);$i++)
								{	if ($r==0)
									{
										if (isset($file[$str[$i]]))
											{
												$role=$file[$str[$i]];$r++;
											}
										else
											{
												$bs=0; break;
											}
									}
									else
									{
										if (isset($role[$str[$i]]))
											{
												$role=$role[$str[$i]];
											}
										else
											{
												$bs=0; break;
											}										
									}
								}
								if ($bs==0){$ret['err'][$err_n]="not_route_to_this_config_file";$err_n++;}
								else {
										$ret['f']=$role;
										$ret['config']=$str[0];
									}
						}
					else
						{$ret['err'][$err_n]="it_is_not_a_config_file";$err_n++;}					
				}
			else
				{$ret['err'][$err_n]="f_error_description";$err_n++;}
	
		}


}
elseif ($data['cm']=="edit")
	{ if ($data['f']=='' or !isset($data['f'])) {$ret['err'][$err_n]="file_undifined";$err_n++;}
		if ($data['arg']=='' or !isset($data['arg'])) {$data['arg']=='';}
		else 
		{
			$str=str_replace(" ","",$data['f']);
			$str=explode(">",$str);
			
			if (count($str)==1)
				{
					if (is_file('ph/config/'.$str[0]))
						{
							$ret['err'][$err_n]="config_route_disable";$err_n++;
						}
					else
						{$ret['err'][$err_n]="it_is_not_a_config_file";$err_n++;}
				}
			elseif (count($str)>1)
				{
					if (is_file('ph/config/'.$str[0]))
						{
							$file=file_get_contents('ph/config/'.$str[0]);
							$file=json_decode($file,true);
							$role;
							$arrs;
							$bs=1;
							$r=1;
							$arrs[0]=$file;
							 for ($i=1;$i<count($str);$i++)
								{
									
									if ($r==1)
									{
										if (isset($file[$str[$i]]))
											{
												$arrs[$r]=$file[$str[$i]];
												$role=$file[$str[$i]];$r++;
												
											}
										else
											{
												$bs=0; break;
											}
									}
									else
									{
										if (isset($role[$str[$i]]))
											{$arrs[$r]=$role[$str[$i]];$r++;
												$role=$role[$str[$i]];
											}
										else
											{
												$bs=0; break;
											}										
									}
								}
								if ($bs==0){$ret['err'][$err_n]="not_route_to_this_config_file";$err_n++;}
								else {

												$tr=count($arrs)-1;
												for ($i=$tr;$i>=0;$i--)
													{
														if($i==$tr)
															{	
																$broad=$data['arg'];
															}
														elseif($i==0)
															{
																$result=$arrs[$i];
																$result[$str[$i+1]]=$broad;
																$broad=$result;
															}
														else
															{
																$result=$arrs[$i];
																$result[$str[$i+1]]=$broad;
																$broad=$result;
															}	
													}
									
										$f=fopen("ph/config/".$str[0],'w');
										fwrite($f,json_encode($broad));
										fclose($f); 
	
										$ret['f']='ok';
										$ret['config']=$str[0];
											
									}
						}
					else
						{$ret['err'][$err_n]="it_is_not_a_config_file";$err_n++;}					
				}
			else
				{$ret['err'][$err_n]="f_error_description";$err_n++;}
	
		}


}
	return $ret;
  }

?>