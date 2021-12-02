let jsondata = 0;

function getpost(id){
  	$.getJSON("../posts/test.json", function(data){
		jsondata = data;
	}).fail(function(){
		alert("An error has occurred.");
	});
}

function renderpost(postid){
	getpost(postid);
	alert(jsondata.header);
}