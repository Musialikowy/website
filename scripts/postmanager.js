let jsondata = 0;

function getpost(location){
  	$.getJSON(location, function(data){
		jsondata = data;
	}).fail(function(){
		alert("An error has occurred.");
	});
}

function renderpost(postid){
	getpost("../posts/test.json");
	alert(jsondata.header);
}

renderpost(1)