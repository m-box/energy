<?php
$id=$route['arg'][0];
if ($user_type=="1")
{$adm='<button class="btn btn-primary pull-right" data-toggle=modal data-target=#Modal_add_obj>Додати об’єкт</button>';}
$type = new SafeMySQL($_CONFIG);
$res = $type -> getRow('SELECT * FROM  `objecttype` WHERE id=?i', $id);	
$content='
<script type="text/javascript"  src= "/js/energoch.js"></script>
<h3>'.$res['name'].': <span class="label label-default" id="type_id">'.$res['id'].'</span></h2>
<h1>Оберіть об\'єкт</h1>'.$adm.'<br>
<table class="table">
<thead>
<tr>
<td>об\'єкт</td>
<td>Аналіз</td>
</tr>
</thead>
<tbody>
';

$db = new SafeMySQL($_CONFIG);
$result = $db -> getAll('SELECT * FROM  `object` WHERE type=?i', $id);
for ($i=0;$i<count($result);$i++)
	{
		$content=$content.'
		<tr>
		<td><a href="/object/'.$result[$i]['id'].'">'.$result[$i]['name'].'</a></td>
		<td><a href="/objanaliz/'.$result[$i]['id'].'"><span class="glyphicon glyphicon-signal"></span></a></td></td>
		</tr>
		';
	}
$content=$content.'</tbody></table>';
$tpl=file_get_contents("tpl/index.html");
$tpl=str_replace("{!content!}",$content,$tpl);
print_r($tpl);	

?>