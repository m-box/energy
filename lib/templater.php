<?php
function template_data ($tpl /* template_name */, $table /* table_name */, $data /* table_row_data */)
{
	$cols=db_name_col($table);
	$template=file_get_contents($tpl);
	$run=$template;
		for($i=0;$i<count($cols);$i++)
		{	
			$repl='{!'.$cols[$i].'!}';
			$col_name=$cols[$i];
			$run = str_replace($repl, $data[$col_name], $run);
		}
	return $run;
}

function template_str_data ($tpl /* template_text */, $table /* table_name */, $data /* table_row_data */)
{
	$cols=db_name_col($table);
	$template=$tpl;
	$run=$template;
		for($i=0;$i<count($cols);$i++)
		{	
			$repl='{!'.$cols[$i].'!}';
			$col_name=$cols[$i];
			$run = str_replace($repl, $data[$col_name], $run);
		}
	return $run;
}

function select_option ($jtpl , $data , $tpl)
{	$options=$jtpl['select'];

	$run=$tpl;
		
		foreach ($options as $key => $value) {
			$cont='';
				for ($i=0;$i<count($value);$i++) {

					if ($data[$key]==$value[$i]['value'])
						{
							$cont=$cont.'<option selected value="'.$value[$i]['value'].'">'.$value[$i]['text'].'</option>';
						}
					else
						{
							$cont=$cont.'<option value="'.$value[$i]['value'].'">'.$value[$i]['text'].'</option>';
						}
	
										}
													$repl='{s!'.$key.'!s}';
			$run = str_replace($repl, $cont, $run);
										$cont='';
								}
			
		
	return $run;
}

function select_option_val ($jtpl , $table , $data , $tpl)
{	$options=$jtpl['select'];

	$run=$tpl;
	
	global $_CONFIG;
	
	$db = new SafeMySQL($_CONFIG);

	$obj = $db -> getAll('SHOW COLUMNS FROM ?p', $table);
		
		for ($z=0;$z<count($obj);$z++) 
		{$key=$obj[$z]['Field'];

			$on=0;
		if (isset($options[$key]))
		{
			for ($i=0;$i<count($options[$key]);$i++) 
				{

					if ($data[$key]==$options[$key][$i]['value'])
						{
					
							$repl = '{s!'.$key.'!s}';
							$run = str_replace($repl, $options[$key][$i]['text'], $run);
							$on=1;
						}

				}
				if ($on==0){$repl = '{s!'.$key.'!s}'; $run = str_replace($repl, " ", $run);	}
				
		}
		}
			
		
	return $run;
}


function template_mark ($table)
{
	$cols=db_name_col($table);


		for($i=0;$i<count($cols);$i++)
		{	
			$repl[$i]='{!'.$cols[$i].'!}';
			print_r(" - ".$repl[$i]."<br>");
		}
	return $repl;
}

?>