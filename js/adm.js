function data (type , val , date)
{
	var id_object = $('#id_object').text();
	var quer = {};
	quer.type = type;
	quer.val = val;
	quer.date = date;
	quer.id_object = id_object;
	var start = JSON.stringify(quer);
	$.ajax({
		url: '/myapi/data',
		type: 'post',
		data:'data='+ start,
		success: function(res) {
			console.log(res);
		 location.reload();
		}
		})
}