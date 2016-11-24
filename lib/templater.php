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
					print_r(count($value)."<br>");
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