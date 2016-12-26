function get_req_energo1(){
	var idobj = $("#id_object").text();
	var startDate = $("#startDate").text();
	var endDate = $("#endDate").text();
	var id = $("id_object").text();
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
}
	var data = {
		"id":idobj,
		"param":value,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],						
					  ]	}
	
	var requery=JSON.stringify(data);
	var sub_req = $.ajax({
		url: '/myapi/chart1',
		type: 'post',
		data:'data='+ requery,
		success: function(res) {
		var result = JSON.parse(res);
		if (result.data!="error"){
			/*

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

 function drawChart() {
	 var data= result;

console.log (data);
var datas = new google.visualization.DataTable();
			datas.addColumn('string', 'Назва');
			datas.addColumn('number', 'Показник');
			datas.addRows(data.rows);
			
  
		 var options = {
          title: 'Показники',
          curveType: 'function',
          legend: { position: 'bottom' }
        }
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(datas, options);
      }

google.charts.load('current', {'packages':['corechart']});
//google.charts.setOnLoadCallback(drawChart);
var data = google.visualization.DataTable();
			data.addColumn('string', 'Дата');
			data.addColumn('number', 'Показатель');
			data.addRows(result['rows']);
var options = {
title: 'Энергоэффективность' // Заголовок.
};
var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(data, options);
*/
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'X');
      data.addColumn('number', 'Кол-во');

      data.addRows(result.rows);
	  console.log(result.rows);

      var options = {
        hAxis: {
          title: 'Показник'
        },
        vAxis: {
          title: 'Дата'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

      chart.draw(data, options);
    }      


        	}
        	 }})
}
//get energo2
	function get_req_energo2(){
	var idobj = $("#id_object").text();
	var startDate = $("#startDate").text();
	var endDate = $("#endDate").text();
		var data = {
		"id":idobj,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],						
					  ]	}
	var requery=JSON.stringify(data);
	var sub_req = $.ajax({
		url: '/myapi/chart2',
		type: 'post',
		data:'data='+ requery,
		success: function(res) {
		var result = JSON.parse(res);
		if (result.data!="error"){



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);



 function drawChart() {
	 var data=result.data;

        var data = google.visualization.arrayToDataTable(data);
		 var options = {
        title: "Title",
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
        }
        var chart = new google.visualization.LineChart(document.getElementById('columnchart_material2'));

        chart.draw(data, options);
      }	
       }})
}
//get energo3
	function get_req_energo3(){
	var idobj = $("#id_object").text();
	var startDate = $("#startDate").text();
	var endDate = $("#endDate").text();
		var data = {
		"id":idobj,
				data: [
							["date",">=",startDate],
							["date","<=", endDate],						
					  ]	}
	var requery=JSON.stringify(data);
	var sub_req = $.ajax({
		url: '/myapi/chart2',
		type: 'post',
		data:'data='+ requery,
		success: function(res) {
		var result = JSON.parse(res);
		if (result.data!="error"){



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);



 function drawChart() {
	 var data=result.data;

        var data = google.visualization.arrayToDataTable(data);
		 var options = {
        title: "Title",
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
        }
        var chart = new google.visualization.LineChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }	
       }})
}