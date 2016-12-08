<?php
$adm='';
if ($user_type=="1")
{$adm='<button class="btn btn-primary pull-right" data-toggle=modal data-target=#myModal2>Додати новий тип</button>';}
elseif ($user_type=="3")
{$adm='<a class="btn btn-primary pull-right" href="/check_adm">Адміністрування закладу</a>';}
	
$content='<script type="text/javascript"  src= "/js/energoch.js"></script>
<h1>Оберіть тип об\'єкту</h1>'.$adm.'<br>
<table class="table">
<thead>
<tr>
<td>Тип об\'єкту</td>
<td>Аналіз</td>
</tr>
</thead>
<tbody>
';

$db = new SafeMySQL($_CONFIG);
$result = $db -> getAll('SELECT * FROM  `objecttype`');
for ($i=0;$i<count($result);$i++)
	{
		$content=$content.'
		<tr>
		<td><a href="/objecttype/'.$result[$i]['id'].'">'.$result[$i]['name'].'</a></td>
		<td><a href="/typeanaliz/'.$result[$i]['id'].'"><span class="glyphicon glyphicon-signal"></span></a></td></td>
		</tr>
		';
	}
$content=$content.'</tbody></table>';
$tpl=file_get_contents("tpl/index.html");
$tpl=str_replace("{!content!}",$content,$tpl);
print_r($tpl);	

?>