function table() {
	$('#table').html('<table class=energy> ')
	$('#table').append(' <tr> <td> Найменування </td>    <td> Січень </td>  <td>Лютий</td> <td>Березень</td> <td>Квітень</td><td>Травень</td><td>Червень</td> <td>Липень</td> <td>Серпень </td>  <td>Вересень</td> <td>++Жовтень</td> <td>Листопад</td><td>Грудень</td><td>Всього за рік</td></tr>' ) 
	function DNZ(){
		//$('#table').append('<tr><td>"Всього аппарату"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
		var idobj = 1;
		var id = 0;
		var value= "teplo"
		
		var startDate=$('#date option:selected').text();
		switch (startDate) {
			case "2010":
			startDate = "2010-01-01" ;
			
			break
			case "2011":
			startDate = "2011-01-01";
			break
			case "2012":
			startDate = "2012-01-01";		
			break
			case "2013":
			startDate = "2013-01-01";			
			break
			case "2014":
			startDate = "2014-01-01";			
			break
			case "2015":
			startDate = "2015-01-01";			
			break
			case "2016":
			startDate = "2016-01-01";			
			break
			case "2017":
			startDate = "2017-01-01";			
			break;
		}
		var endDate=$('#date option:selected').text();
		switch (endDate) {
			case "2010":			
			endDate = "2011-01-01" ;
			break
			case "2011":
			endDate = "2012-01-01";
			break
			case "2012":
			endDate = "2013-01-01";		
			break
			case "2013":
			endDate = "2014-01-01";			
			break
			case "2014":
			endDate = "2015-01-01";			
			break
			case "2015":
			endDate = "2016-01-01";			
			break
			case "2016":
			endDate = "2017-01-01";			
			break
			case "2017":
			endDate = "2018-01-01";			
			break;
		}
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
			
			var ch = 0
		for (i=0; i<=arr_; i++) {
		var arr = names.rows[i][0]
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

				var sum = arr_1[0][1] + arr_1[1][1] + arr_1[2][1] + arr_1[3][1] + arr_1[4][1] + arr_1[5][1] + arr_1[6][1]
		$('#table').append('<tr><td>'+names.rows[id][0]+'</td><td>'+arr_1[0][1]+'</td><td>'+arr_1[1][1]+'</td><td>'+arr_1[2][1]+'</td><td>'+arr_1[3][1]+'</td>	<td> 0 </td><td>0</td><td>0</td><td> 0 </td><td> 0 </td><td>'+arr_1[4][1]+'</td><td>'+arr_1[5][1]+'</td><td>'+arr_1[6][1]+'</td><td>'+sum.toFixed(2)+'</td></tr> ')
	}
				})
			}
				}
		})
	}
DNZ()
}