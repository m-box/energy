function table() {
	//предпологаемый запрос к серверу
	//закомментирован, чтоб отладить таблицу
	/*var startDate = $("#startDate").text();
	var endDate = $("#endDate").text();
	var value=$('input[name="optradio1"]:checked').val();
		switch (value) {
  case "Кількість кВт":
    value='electro';
    break
    case "Кількість газу":
    value='gas';
    break
    case "Кількість води":
    value='water';
    break;
    case "Кількість тепла":
    value='teplo';
    break;
    var data = {
		"id":idobj,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],						
					  ]	}
	var requery=JSON.stringify(data);
	var sub_req = $.ajax({
		url: '/api/data',
		type: 'post',
		data:'data='+ requery,
		success: function(res) {
		var result = JSON.parse(res);
		if (result.data!="error"){
}
*/

$('#table').html ('<table>')
$('#table').append ('<thead><tr><td rowspan="3">заклади</td><td colspan="7" rowspan="2">год-1</td><td colspan="7" rowspan="2">год</td><td colspan="4">відхилення</td></tr><tr><td colspan="2">листопад 2015 від листопад 2016</td> <td colspan="2">2016 від 2015</td>/tr> <tr> <td>січень</td><td>лютий</td><td>березень</td><td>квітень</td><td>жовтень</td><td>листопад</td><td>з початку року</td><td>січень</td><td>лютий</td><td>березень</td><td>квітень</td><td>жовтень</td> <td>листопад</td><td>з початку року</td><td>%</td>  <td>м. куб</td> <td>%</td><td>м. куб</td></tr></thead>' ) 
$('#table').append('<tbody><tr><td>"Всього"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ')
	
		$('#table').append('<tr><td>"Всього аппарату +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
			for (i=0; i<6; i++) {
		$('#table').append('<tr><td>"+name+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
	}
	$('#table').append('<tr><td>"Всього управління освіти +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
	$('#table').append('<tr><td>"Всього школи +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
			for (i=0; i<6; i++){
	$('#table').append('<tr><td>"школа +name type+"</td><td>"01"</td><td>"02"</td><td>"03"</td><td>"04"</td><td>"10"</td><td>"11"</td><td>"sum1=sum(2,3,4,5,6,7)"</td><td>" 01++"</td><td>"02++"</td><td>"03++"</td><td>"04++"</td><td>"10++"</td><td>"11++"</td><td>"sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
	}
	$('#table').append('<tr><td>"Всього ДНЗ +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ')
		for (i=0; i<6; i++){
	$('#table').append('<tr><td>"ДНЗ +name type+"</td><td>"01"</td><td>"02"</td><td>"03"</td><td>"04"</td><td>"10"</td><td>"11"</td><td>"sum1=sum(2,3,4,5,6,7)"</td><td>" 01++"</td><td>"02++"</td><td>"03++"</td><td>"04++"</td><td>"10++"</td><td>"11++"</td><td>"sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
	}
	$('#table').append('<tr><td>"Всього ПТУ +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ')
		for (i=0; i<6; i++){
	$('#table').append('<tr><td>"ПТУ +name type+"</td><td>"01"</td><td>"02"</td><td>"03"</td><td>"04"</td><td>"10"</td><td>"11"</td><td>"sum1=sum(2,3,4,5,6,7)"</td><td>" 01++"</td><td>"02++"</td><td>"03++"</td><td>"04++"</td><td>"10++"</td><td>"11++"</td><td>"sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
	}
	$('#table').append('<tr><td>"Всього  Охорона здоров`я Всього +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ')
		for (i=0; i<6; i++){
	$('#table').append('<tr><td>"лікарня +name type+"</td><td>"01"</td><td>"02"</td><td>"03"</td><td>"04"</td><td>"10"</td><td>"11"</td><td>"sum1=sum(2,3,4,5,6,7)"</td><td>" 01++"</td><td>"02++"</td><td>"03++"</td><td>"04++"</td><td>"10++"</td><td>"11++"</td><td>"sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
	}
	$('#table').append('<tr><td>"Соціальний захист Всього +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ')
		for (i=0; i<6; i++){
	$('#table').append('<tr><td>"соц захист +name type+"</td><td>"01"</td><td>"02"</td><td>"03"</td><td>"04"</td><td>"10"</td><td>"11"</td><td>"sum1=sum(2,3,4,5,6,7)"</td><td>" 01++"</td><td>"02++"</td><td>"03++"</td><td>"04++"</td><td>"10++"</td><td>"11++"</td><td>"sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
	}
	$('#table').append('<tr><td>"Культура (бібліотеки, ДК, школи естетичного виховання) Всього +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ')
	$('#table').append('<tr><td>"бібліотеки +name type+"</td><td>"01"</td><td>"02"</td><td>"03"</td><td>"04"</td><td>"10"</td><td>"11"</td><td>"sum1=sum(2,3,4,5,6,7)"</td><td>" 01++"</td><td>"02++"</td><td>"03++"</td><td>"04++"</td><td>"10++"</td><td>"11++"</td><td>"sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
	$('#table').append('<tr><td>"ДК Всього +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ')
		for (i=0; i<6; i++){
	$('#table').append('<tr><td>"ДК +name type+"</td><td>"01"</td><td>"02"</td><td>"03"</td><td>"04"</td><td>"10"</td><td>"11"</td><td>"sum1=sum(2,3,4,5,6,7)"</td><td>" 01++"</td><td>"02++"</td><td>"03++"</td><td>"04++"</td><td>"10++"</td><td>"11++"</td><td>"sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
	}
	$('#table').append('<tr><td>"Школи естетичного виховання Всього +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ')
		for (i=0; i<6; i++){
	$('#table').append('<tr><td>"Муз. школа +name type+"</td><td>"01"</td><td>"02"</td><td>"03"</td><td>"04"</td><td>"10"</td><td>"11"</td><td>"sum1=sum(2,3,4,5,6,7)"</td><td>" 01++"</td><td>"02++"</td><td>"03++"</td><td>"04++"</td><td>"10++"</td><td>"11++"</td><td>"sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
	}
	$('#table').append('<tr><td>"Фізичне виховання Всього +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ')
		for (i=0; i<6; i++){
	$('#table').append('<tr><td>"Физра +name type+"</td><td>"01"</td><td>"02"</td><td>"03"</td><td>"04"</td><td>"10"</td><td>"11"</td><td>"sum1=sum(2,3,4,5,6,7)"</td><td>" 01++"</td><td>"02++"</td><td>"03++"</td><td>"04++"</td><td>"10++"</td><td>"11++"</td><td>"sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
	}
	$('#table').append('</tbody></table>')
}