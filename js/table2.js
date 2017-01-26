function table() {
	$('#table').html('<table>')
	$('#table').append('    <tr> <td> Найменування </td>    <td> Січень </td>  <td>Лютий</td> <td>Березень</td> <td>Квітень</td><td>Травень</td><td>Червень</td> <td>Липень</td> <td>Серпень </td>  <td>Вересень</td> <td>++Жовтень</td> <td>Листопад</td><td>Грудень</td><td>Всього за рік</td></tr>' ) 
	function aparat_upr(){
		//$('#table').append('<tr><td>"Всього аппарату"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
		var idobj = 1;
		var id = 0;
		var sum1
		var sum2
		var startDate = $("#startDate").text();
		var endDate = $("#endDate").text();
		var value= "teplo"
		
		var data_name = {
			"id":idobj,
			"param":value,
					data: [
								["date",">=",startDate],
								["date","<=", endDate],
						  ]	}
			var requery_name=JSON.stringify(data_name)			
			var names = $.ajax({
				url: '/myapi/chart2',
				type: 'post',
				data:'data='+ requery_name,
				success: function(names) {
			var names = JSON.parse(names);
			var arr_ = names.rows.length;
			console.log(arr_)
			var arr = names.rows;
			var ch = 0
		for (i=1; i<=arr_; i++) {
		arr = names.rows[i][0]
		id = i
		var data = {
			"id":id,
			"param":value,
					data: [
								["date",">=",startDate],
								["date","<=", endDate],
						  ]	}
			var requery=JSON.stringify(data)
		
		//из chart1 забираем значения
			var values = $.ajax({
				url: '/myapi/chart1',
				type: 'post',
				data:'data='+ requery,
				success: function(values) {
			var values = JSON.parse(values);
			
			var arr_1 = values.rows;
			
				console.log(arr)
				var sum = arr_1[0][1] + arr_1[1][1] + arr_1[2][1] + arr_1[3][1] + arr_1[4][1] + arr_1[5][1] + arr_1[6][1] + arr_1[7][1] + arr_1[8][1] + arr_1[9][1] + arr_1[10][1] + arr_1[11][1] + arr_1[12][1]
		$('#table').append('<tr><td>'+String(arr)+'</td><td>'+arr_1[0][1]+'</td><td>'+arr_1[1][1]+'</td><td>'+arr_1[2][1]+'</td><td>'+arr_1[3][1]+'</td>	<td>'+ arr_1[4][1]+'</td><td>'+ arr_1[5][1]+'</td><td>'+  arr_1[6][1]+'</td><td>'+arr_1[7][1]+'</td><td>'+arr_1[8][1]+'</td><td>'+arr_1[9][1]+'</td><td>'+arr_1[10][1]+'</td><td>'+arr_1[11][1]+'</td><td>'+sum.toFixed(2)+'</td></tr> ')
			
		
	}
				})
			}
				}
		})
	}
aparat_upr()
}