<?php
function array_swap(array &$array, $key, $key2)
{
    if (isset($array[$key]) && isset($array[$key2])) {
        list($array[$key], $array[$key2]) = array($array[$key2], $array[$key]);
        return true;
    }

    return false;
}
function router ($data)
{	$err_n=0;
	$data = json_decode($data , true);
	if (!isset($data['f']) or $data['f']=='') {$data['f']="";}
	if (!isset($data['cm']) or $data['cm']=='') {$data['cm']="view";}
	if ($data['cm']=="view")
	{ //if ($data['f']=='' or !isset($data['f'])) {$ret['err'][$err_n]="file_undifined";$err_n++;}

			$str=str_replace(" ","",$data['f']);
			$ps=$str;
			$str=explode(">",$str);
			print_r($str);
			if ($ps=='')
				{

							$file=file_get_contents('ph/route.json');
							$file=json_decode($file,true);
							$ret['f']=$file;
							$ret['config']=$str[0];
						

				}
			elseif (count($str)>0)
				{

							$file=file_get_contents('ph/route.json');
							$file=json_decode($file,true);
							$role;
							$bs=1;
							$r=0;
							 for ($i=0;$i<count($str);$i++)
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
				{$ret['err'][$err_n]="f_error_description";$err_n++;}
	
		


}
elseif ($data['cm']=="edit")
	{ if ($data['f']=='' or !isset($data['f'])) {$ret['err'][$err_n]="route_undifined";$err_n++;}
		if ($data['arg']=='' or !isset($data['arg'])) {$data['arg']=='';}

			$str=str_replace(" ","",$data['f']);
			$str=explode(">",$str);
			
				if (count($str)>0)
				{
							$file=file_get_contents('ph/route.json');
							$file=json_decode($file,true);
							$role;
							$arrs;
							$bs=1;
							$r=1;
							$arrs[0]=$file;
							 for ($i=0;$i<count($str);$i++)
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
								print_r(json_encode($arrs));
								if ($bs==0){$ret['err'][$err_n]="not_route_to_this_config_file";$err_n++;}
								else {

												$tr=count($arrs)-1;
												for ($i=$tr;$i>=0;$i--)
													{
														if($i==$tr)
															{	
																$broad=$data['arg'];
															}
														else
															{
																$result=$arrs[$i];
																$result[$str[$i]]=$broad;
																$broad=$result;
															}	
													}
									
										$f=fopen("ph/route.json",'w');
										fwrite($f,json_encode($broad));
										fclose($f); 
	
										$ret['f']='ok';
										
											
									}
				
				}
			else
				{$ret['err'][$err_n]="f_error_description";$err_n++;}
	
		


}
elseif ($data['cm']=='swap')
{
	if ($data['f']=='' or !isset($data['f'])) {$ret['err'][$err_n]="swap_arg_undifined";$err_n++; return $ret;}
	$str=str_replace(" ","",$data['f']);
	$str=explode("-",$str);
	if (count($str)!==2) {$ret['err'][$err_n]="swap_arg_error";$err_n++; return $ret;}
	else
	{
		$file=file_get_contents('ph/route.json');
		$file=json_decode($file,true);
		if (array_swap($file, $str[0], $str[1]))
			{
				$f=fopen("ph/route.json",'w');
				fwrite($f,json_encode($file));
				fclose($f); 
				$ret['f']='ok';
			}
		else 
			{
				$ret['err'][$err_n]="swap_arg_undifined";$err_n++; 
			}
	}
		
}
elseif ($data['cm']=='new')
{
	$arr['arg_str']='';
	$arr['route_url']='';
	$arr['route_type']='template_page';
	$arr['cache']['status']='0';
	$arr['cache']['ind']='';
	$arr['cache']['time']='';
	if ($data['arg']['arg_str']!=='' && isset($data['arg']['arg_str'])) {$arr['arg_str']=$data['arg']['arg_str'];}
	if ($data['arg']['route_url']!=='' && isset($data['arg']['route_url'])) {$arr['route_url']=$data['arg']['route_url'];}
	if ($data['arg']['route_type']!=='' && isset($data['arg']['route_type'])) {$arr['route_type']=$data['arg']['route_type'];}
	if ($data['arg']['cache']['status']!=='' && isset($data['arg']['cache']['status'])) {$arr['cache']['status']=$data['arg']['cache']['status'];}
	if ($data['arg']['cache']['ind']!=='' && isset($data['arg']['cache']['ind'])) {$arr['cache']['ind']=$data['arg']['cache']['ind'];}
	if ($data['arg']['cache']['time']!=='' && isset($data['arg']['cache']['time'])) {$arr['cache']['time']=$data['arg']['cache']['time'];}
	
	$file=file_get_contents('ph/route.json');
	$file=json_decode($file,true);
	$num=count($file);
	$file[$num]=$arr;
	$f=fopen("ph/route.json",'w');
	fwrite($f,json_encode($file));
	fclose($f);
	$ret['f']="ok";
}
elseif ($data['cm']=='del')
{

	if ($data['f']=='' && !isset($data['f'])) { $ret['err'][$err_n]="number_undifined";$err_n++; }
	else
	{
		$file=file_get_contents('ph/route.json');
		$file=json_decode($file,true);
			if (isset($file[$data['f']]))
			{
				unset($file[$data['f']]);
				sort($file);
				$f=fopen("ph/route.json",'w');
				fwrite($f,json_encode($file));
				fclose($f);
				$ret['f']="ok";
			}
			else
			{
				$ret['err'][$err_n]="route_undifined";$err_n++; 
			}
	}

}
	return $ret;
}
?>