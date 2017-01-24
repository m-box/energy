function table() {
	$('#table').html('<table>')
	$('#table').append('<thead><tr><td rowspan="3">заклади</td><td colspan="7" rowspan="2">год-1</td><td colspan="7" rowspan="2">год</td><td colspan="4">відхилення</td></tr><tr><td colspan="2">листопад 2015 від листопад 2016</td> <td colspan="2">2016 від 2015</td>/tr> <tr> <td>січень</td><td>лютий</td><td>березень</td><td>квітень</td><td>жовтень</td><td>листопад</td><td>з початку року</td><td>січень</td><td>лютий</td><td>березень</td><td>квітень</td><td>жовтень</td> <td>листопад</td><td>з початку року</td><td>%</td>  <td>м. куб</td> <td>%</td><td>м. куб</td></tr></thead>' ) 
	function aparat_upr(){
		$('#table').append('<tr><td>"Всього аппарату"</td><td>"sum 01"</td><td>"sum 02"</td><td>"sum 03"</td><td>"sum 04"</td>	<td>"sum 10"</td><td>"sum 11"</td><td>"sum sum1=sum(2,3,4,5,6,7)"</td><td>"sum 01++"</td><td>"sum 02++"</td><td>"sum 03++"</td><td>"sum 04++"</td><td>"sum 10++"</td><td>"sum 11++"</td><td>"sum +sum(8,9,10,11,12,13)+"</td><td>"11"*100/"11++"-100</td>	<td>sum2-sum1</td><td>sum2*100</td>	<td></td></tr> ') 
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
			var arr = names.rows;
		for (i=1; i==arr; i++) {
		var arr = names.rows[i];
		console.log(arr[0]);
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
			console.log(arr_1[0]);
			for (j=0; j==arr.length; j++)
		$('#table').append('<tr><td>'+arr[0]+'</td><td>'+arr_1[0]+'</td><td>'+arr_1[1]+'</td><td>'+arr_1[2]+'</td><td>'+arr_1[3]+'</td>	<td>'+arr_1[9]+'</td><td>'+arr_1[10]+'</td><td>'+  /*sum1 = (arr_1[0][1]+arr_1[1][1]+arr_1[2][1]+arr_1[3][1]+arr_1[9][1]+arr_1[10][1])*/+'</td><td>'+arr_1[12][1]+'</td><td>'+arr_1[13][1]+'</td><td>'+arr_1[14][1]+'</td><td>'+arr_1[15][1]+'</td><td>'+arr_1[21][1]+'</td><td>'+arr_1[22][1]+'</td><td>'+ /*sum2 = (arr_1[12][1]+arr_1[13][1]+arr_1[14][1]+arr_1[15][1]+arr_1[21][1]+arr_1[22][1])*/+'</td><td>'+arr_1[22][1]*100/arr_1[10][1]-100+'</td>	<td>'+arr_1[22][1]-arr_1[10][1]+'</td><td>'+/*sum1*100/sum0-100*/+'</td><td>'+/*sum1-sum0*/+'</td></tr> ')
			
		}
				})
			}
				}
		})
	}
aparat_upr()
}