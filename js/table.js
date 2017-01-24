function table() {


	$('#table').html('<table>')
	$('#table').append('<thead><tr><td rowspan="3">заклади</td><td colspan="7" rowspan="2">год-1</td><td colspan="7" rowspan="2">год</td><td colspan="4">відхилення</td></tr><tr><td colspan="2">листопад 2015 від листопад 2016</td> <td colspan="2">2016 від 2015</td>/tr> <tr> <td>січень</td><td>лютий</td><td>березень</td><td>квітень</td><td>жовтень</td><td>листопад</td><td>з початку року</td><td>січень</td><td>лютий</td><td>березень</td><td>квітень</td><td>жовтень</td> <td>листопад</td><td>з початку року</td><td>%</td>  <td>м. куб</td> <td>%</td><td>м. куб</td></tr></thead>' ) 
	$('#table').append('<tbody><tr><td>"Всього"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ')


	//аппарат
	$('#table').append('<tr><td>"Всього аппарату"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
	for (j=74; j<85; j++) {
	var id = j
	var idobj = 8;
	var startDate = $("#startDate").text();
	var endDate = $("#endDate").text();
	var value= "teplo"
	var data = {
		"id":id,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],
					  ]	}
	var data_name = {
		"id":idobj,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],
					  ]	}
		var requery_name=JSON.stringify(data_name)
		var requery=JSON.stringify(data)
		var tablenames = $.ajax({
			url: '/myapi/chart2',
			type: 'post',
			data:'data='+ requery_name,
			success: function(names) {
		var name = JSON.parse(names);
	//из chart1 забираем значения
		var values = $.ajax({
			url: '/myapi/chart1',
			type: 'post',
			data:'data='+ requery,
			success: function(values) {
		var values = JSON.parse(values);
			
				for (i=0; i<10; i++) {
	$('#table').append('<tr><td>'+name.rows[i]."0"+'</td><td>'+values.rows[0][1]+'</td><td>'+values.rows[1][1]+'</td><td>'+values.rows[2][1]+'</td><td>'+values.rows[3][1]+'</td>	<td>'+values.rows[9][1]+'</td><td>'+values.rows[10][1]+'</td><td>'+  (values.rows[0][1]+values.rows[1][1]+values.rows[2][1]+values.rows[3][1]+values.rows[9][1]+values.rows[10][1])+'</td><td>'+values.rows[12][1]+'</td><td>'+values.rows[13][1]+'</td><td>'+values.rows[14][1]+'</td><td>'+values.rows[15][1]+'</td><td>'+values.rows[21][1]+'</td><td>'+values.rows[22][1]+'</td><td>'+ (values.rows[12][1]+values.rows[13][1]+values.rows[14][1]+values.rows[15][1]+values.rows[21][1]+values.rows[22][1])+'</td><td>'+values.rows[22][1]*100/values.rows[10][1]-100+'</td>	<td>'+values.rows[22][1]-values.rows[10][1]+'</td><td>'+sum1*100/sum0-100+'</td><td>'+sum1-sum0+'</td></tr> ') 
	}
		
			}
				})
				}
				})
					}
	/*-----*/

	$('#table').append('<tr><td>"Всього управління освіти +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
	//Школи
	$('#table').append('<tr><td>"Всього школи +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
			
		for (j=28; j<51; j++) {
	var id = j
	var idobj = 2
	var startDate = $("#startDate").text();
	var endDate = $("#endDate").text();
	var value= "teplo"
	var data = {
		"id":id,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],
					  ]	}
	var data_name = {
		"id":idobj,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],
					  ]	}
		var requery_name=JSON.stringify(data_name)
		var requery=JSON.stringify(data)
		var tablenames = $.ajax({
			url: '/myapi/chart2',
			type: 'post',
			data:'data='+ requery_name,
			success: function(names) {
		var name = JSON.parse(names);
	//из chart1 забираем значения
		var values = $.ajax({
			url: '/myapi/chart1',
			type: 'post',
			data:'data='+ requery,
			success: function(values) {
		var values = JSON.parse(values);
			
				for (i=0; i<10; i++) {
	$('#table').append('<tr><td>'+name.rows[i][0]+'</td><td>'+values.rows[0][1]+'</td><td>'+values.rows[1][1]+'</td><td>'+values.rows[2][1]+'</td><td>'+values.rows[3][1]+'</td>	<td>'+values.rows[9][1]+'</td><td>'+values.rows[10][1]+'</td><td>'+ (values.rows[0][1]+values.rows[1][1]+values.rows[2][1]+values.rows[3][1]+values.rows[9][1]+values.rows[10][1])+'</td><td>'+values.rows[12][1]+'</td><td>'+values.rows[13][1]+'</td><td>'+values.rows[14][1]+'</td><td>'+values.rows[15][1]+'</td><td>'+values.rows[21][1]+'</td><td>'+values.rows[22][1]+'</td><td>'+  (values.rows[12][1]+values.rows[13][1]+values.rows[14][1]+values.rows[15][1]+values.rows[21][1]+values.rows[22][1])+'</td><td>'+values.rows[22][1]*100/values.rows[10][1]-100+'</td>	<td>'+values.rows[22][1]-values.rows[10][1]+'</td><td>'+sum1*100/sum0-100+'</td><td>'+sum1-sum0+'</td></tr> ') 
	}
		}
			})
			}})
		}
	/*----*/

	$('#table').append('<tr><td>"Всього ДНЗ +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ')
		//ДНЗ
			for (j=1; j<27; j++) {
	var id = j;
	var idobj = 1;
	var startDate = $("#startDate").text();
	var endDate = $("#endDate").text();
	var value="teplo"
	var data = {
		"id":id,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],
					  ]	}
	var data_name = {
		"id":idobj,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],
					  ]	}
		var requery_name=JSON.stringify(data_name)
		var requery=JSON.stringify(data)
		var tablenames = $.ajax({
		url: '/myapi/chart2',
		type: 'post',
		data:'data='+ requery_name,
		success: function(names) {
		var name = JSON.parse(names);
	//из chart1 забираем значения
	var values = $.ajax({
		url: '/myapi/chart1',
		type: 'post',
		data:'data='+ requery,
		success: function(values) {
		var values = JSON.parse(values);
		
		for (i=0; i<10; i++) {
		$('#table').append('<tr><td>'+name.rows[i][0]+'</td><td>'+values.rows[0][1]+'</td><td>'+values.rows[1][1]+'</td><td>'+values.rows[2][1]+'</td><td>'+values.rows[3][1]+'</td>	<td>'+values.rows[9][1]+'</td><td>'+values.rows[10][1]+'</td><td>'+ (values.rows[0][1]+values.rows[1][1]+values.rows[2][1]+values.rows[3][1]+values.rows[9][1]+values.rows[10][1])+'</td><td>'+values.rows[12][1]+'</td><td>'+values.rows[13][1]+'</td><td>'+values.rows[14][1]+'</td><td>'+values.rows[15][1]+'</td><td>'+values.rows[21][1]+'</td><td>'+values.rows[22][1]+'</td><td>'+  (values.rows[12][1]+values.rows[13][1]+values.rows[14][1]+values.rows[15][1]+values.rows[21][1]+values.rows[22][1])+'</td><td>'+values.rows[22][1]*100/values.rows[10][1]-100+'</td>	<td>'+values.rows[22][1]-values.rows[10][1]+'</td><td>'+sum1*100/sum0-100+'</td><td>'+sum1-sum0+'</td></tr> ') 
	}
		}})
			}})
				}


	$('#table').append('<tr><td>"Всього ПТУ +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ')
		
		//ПТУ Нет в базе
			/*for (j=??; j<??; j++) {
	var id = j
	var startDate = $("#startDate").text();
	var endDate = $("#endDate").text();
	var value=teplo
	var data = {
		"id":id,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],
					  ]	}
	var data_name = {
		"id":idobj,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],
					  ]	}
		var requery_name=JSON.stringify(data_name)
		var requery=JSON.stringify(data)
		var tablenames = $.ajax({
			url: '/myapi/chart2',
			type: 'post',
			data:'data='+ requery_name,
			success: function(names) {
		var name = JSON.parse(names);  
	//из chart1 забираем значения
		var values = $.ajax({
			url: '/myapi/chart1',
			type: 'post',
			data:'data='+ requery,
			success: function(values) {
		var values = JSON.parse(values);
		if (result!="error"){
		for (i=0; i<length(name.rows); i++) {
		$('#table').append('<tr><td>'+name.rows[i][0]+'</td><td>'+values.rows[0][1]+'</td><td>'+values.rows[1][1]+'</td><td>'+values.rows[2][1]+'</td><td>'+values.rows[3][1]+'</td>	<td>'+values.rows[9][1]+'</td><td>'+values.rows[10][1]+'</td><td>'+ (values.rows[0][1]+values.rows[1][1]+values.rows[2][1]+values.rows[3][1]+values.rows[9][1]+values.rows[10][1])+'</td><td>'+values.rows[12][1]+'</td><td>'+values.rows[13][1]+'</td><td>'+values.rows[14][1]+'</td><td>'+values.rows[15][1]+'</td><td>'+values.rows[21][1]+'</td><td>'+values.rows[22][1]+'</td><td>'+  (values.rows[12][1]+values.rows[13][1]+values.rows[14][1]+values.rows[15][1]+values.rows[21][1]+values.rows[22][1])+'</td><td>'+values.rows[22][1]*100/values.rows[10][1]-100+'</td>	<td>'+values.rows[22][1]-values.rows[10][1]+'</td><td>'+sum1*100/sum0-100+'</td><td>'+sum1-sum0+'</td></tr> ') 
	}
		}}})
			}})
				}*/


	$('#table').append('<tr><td>"Всього  Охорона здоров`я Всього +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ')
			//Охорона здоров'я
			for (j=52; j<84; j++) {
	var id = j
	var startDate = $("#startDate").text();
	var endDate = $("#endDate").text();
	var value="teplo"
	var data = {
		"id":id,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],
					  ]	}
	var data_name = {
		"id":idobj,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],
					  ]	}
		var requery_name=JSON.stringify(data_name)
		var requery=JSON.stringify(data)
		var tablenames = $.ajax({
		url: '/myapi/chart2',
		type: 'post',
		data:'data='+ requery_name,
		success: function(names) {
		var name = JSON.parse(names);
	//из chart1 забираем значения
	var values = $.ajax({
		url: '/myapi/chart1',
		type: 'post',
		data:'data='+ requery,
		success: function(values) {
		var values = JSON.parse(values);
		
		for (i=0; i<10; i++) {
		$('#table').append('<tr><td>'+name.rows[i][0]+'</td><td>'+values.rows[0][1]+'</td><td>'+values.rows[1][1]+'</td><td>'+values.rows[2][1]+'</td><td>'+values.rows[3][1]+'</td>	<td>'+values.rows[9][1]+'</td><td>'+values.rows[10][1]+'</td><td>'+ (values.rows[0][1]+values.rows[1][1]+values.rows[2][1]+values.rows[3][1]+values.rows[9][1]+values.rows[10][1])+'</td><td>'+values.rows[12][1]+'</td><td>'+values.rows[13][1]+'</td><td>'+values.rows[14][1]+'</td><td>'+values.rows[15][1]+'</td><td>'+values.rows[21][1]+'</td><td>'+values.rows[22][1]+'</td><td>'+  (values.rows[12][1]+values.rows[13][1]+values.rows[14][1]+values.rows[15][1]+values.rows[21][1]+values.rows[22][1])+'</td><td>'+values.rows[22][1]*100/values.rows[10][1]-100+'</td>	<td>'+values.rows[22][1]-values.rows[10][1]+'</td><td>'+sum1*100/sum0-100+'</td><td>'+sum1-sum0+'</td></tr> ') 
	}
		}})
			}})
				}


	$('#table').append('<tr><td>"Соціальний захист Всього +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ')
				//Соц захист
	for (j=62; j<64; j++) {
	var id = j
	var startDate = $("#startDate").text();
	var endDate = $("#endDate").text();
	var value="teplo"
	var data = {
		"id":id,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],
					  ]	}
	var data_name = {
		"id":idobj,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],
					  ]	}
		var requery_name=JSON.stringify(data_name)
		var requery=JSON.stringify(data)
		var tablenames = $.ajax({
			url: '/myapi/chart2',
			type: 'post',
			data:'data='+ requery_name,
			success: function(names) {
		var name = JSON.parse(names);
	//из chart1 забираем значения
	var values = $.ajax({
			url: '/myapi/chart1',
			type: 'post',
			data:'data='+ requery,
			success: function(values) {
		var values = JSON.parse(values);
			
				for (i=0; i<10; i++) {
		$('#table').append('<tr><td>'+name.rows[i][0]+'</td><td>'+values.rows[0][1]+'</td><td>'+values.rows[1][1]+'</td><td>'+values.rows[2][1]+'</td><td>'+values.rows[3][1]+'</td>	<td>'+values.rows[9][1]+'</td><td>'+values.rows[10][1]+'</td><td>'+ (values.rows[0][1]+values.rows[1][1]+values.rows[2][1]+values.rows[3][1]+values.rows[9][1]+values.rows[10][1])+'</td><td>'+values.rows[12][1]+'</td><td>'+values.rows[13][1]+'</td><td>'+values.rows[14][1]+'</td><td>'+values.rows[15][1]+'</td><td>'+values.rows[21][1]+'</td><td>'+values.rows[22][1]+'</td><td>'+  (values.rows[12][1]+values.rows[13][1]+values.rows[14][1]+values.rows[15][1]+values.rows[21][1]+values.rows[22][1])+'</td><td>'+values.rows[22][1]*100/values.rows[10][1]-100+'</td>	<td>'+values.rows[22][1]-values.rows[10][1]+'</td><td>'+sum1*100/sum0-100+'</td><td>'+sum1-sum0+'</td></tr> ') 
	}
		}})
			}})
				}


	$('#table').append('<tr><td>"Культура (бібліотеки, ДК, школи естетичного виховання) Всього +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ')
							//Культура
	for (j=65; j<70; j++) {
	var id = j;
	var idobj = 6;
	var startDate = $("#startDate").text();
	var endDate = $("#endDate").text();
	var value="teplo"
	var data = {
		"id":id,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],
					  ]	}
	var data_name = {
		"id":idobj,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],
					  ]	}
		var requery_name=JSON.stringify(data_name)
		var requery=JSON.stringify(data)
		var tablenames = $.ajax({
		url: '/myapi/chart2',
		type: 'post',
		data:'data='+ requery_name,
		success: function(names) {
		var name = JSON.parse(names);
	//из chart1 забираем значения
	var values = $.ajax({
		url: '/myapi/chart1',
		type: 'post',
		data:'data='+ requery,
		success: function(values) {
		var values = JSON.parse(values);
			
				for (i=0; i<10; i++) {
		$('#table').append('<tr><td>'+name.rows[i][0]+'</td><td>'+values.rows[0][1]+'</td><td>'+values.rows[1][1]+'</td><td>'+values.rows[2][1]+'</td><td>'+values.rows[3][1]+'</td>	<td>'+values.rows[9][1]+'</td><td>'+values.rows[10][1]+'</td><td>'+ sum(values.rows[0][1], values.rows[1][1],values.rows[2][1],values.rows[3][1],values.rows[9][1],values.rows[10][1])+'</td><td>'+values.rows[12][1]+'</td><td>'+values.rows[13][1]+'</td><td>'+values.rows[14][1]+'</td><td>'+values.rows[15][1]+'</td><td>'+values.rows[21][1]+'</td><td>'+values.rows[22][1]+'</td><td>'+  (values.rows[12][1]+values.rows[13][1]+values.rows[14][1]+values.rows[15][1]+values.rows[21][1]+values.rows[22][1])+'</td><td>'+values.rows[22][1]*100/values.rows[10][1]-100+'</td>	<td>'+values.rows[22][1]-values.rows[10][1]+'</td><td>'+sum1*100/sum0-100+'</td><td>'+sum1-sum0+'</td></tr> ') 
	}
		}})
			}})
				}
	
	$('#table').append('<tr><td>"Фізичне виховання Всього +name type+"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ')
								//Физ-ра
	for (j=1; j<2; j++) {
	var id = j;
	var idobj = 4;
	var startDate = $("#startDate").text();
	var endDate = $("#endDate").text();
	var value="teplo"
	var data = {
		"id":id,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],
					  ]	}
	var data_name = {
		"id":idobj,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],
					  ]	}
		var requery_name=JSON.stringify(data_name)
		var requery=JSON.stringify(data)
		var tablenames = $.ajax({
		url: '/myapi/chart2',
		type: 'post',
		data:'data='+ requery_name,
		success: function(names) {
		var name = JSON.parse(names);
	//из chart1 забираем значения
	var values = $.ajax({
		url: '/myapi/chart1',
		type: 'post',
		data:'data='+ requery,
		success: function(values) {
		var values = JSON.parse(values);
			
				for (i=0; i<10; i++) {
		$('#table').append('<tr><td>'+name.rows[i][0]+'</td><td>'+values.rows[0][1]+'</td><td>'+values.rows[1][1]+'</td><td>'+values.rows[2][1]+'</td><td>'+values.rows[3][1]+'</td>	<td>'+values.rows[9][1]+'</td><td>'+values.rows[10][1]+'</td><td>'+ (values.rows[0][1]+values.rows[1][1]+values.rows[2][1]+values.rows[3][1]+values.rows[9][1]+values.rows[10][1])+'</td><td>'+values.rows[12][1]+'</td><td>'+values.rows[13][1]+'</td><td>'+values.rows[14][1]+'</td><td>'+values.rows[15][1]+'</td><td>'+values.rows[21][1]+'</td><td>'+values.rows[22][1]+'</td><td>'+  (values.rows[12][1]+values.rows[13][1]+values.rows[14][1]+values.rows[15][1]+values.rows[21][1]+values.rows[22][1])+'</td><td>'+values.rows[22][1]*100/values.rows[10][1]-100+'</td>	<td>'+values.rows[22][1]-values.rows[10][1]+'</td><td>'+sum1*100/sum0-100+'</td><td>'+sum1-sum0+'</td></tr> ') 
	}
		}})
			}})
				}
	$('#table').append('</tbody></table>')
}