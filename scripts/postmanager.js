var HEADER;
var TEXT;

function getpost(id){
	$.getJSON(id, function(data){
		HEADER = data.header;
		TEXT = data.text;
	}).fail(function(){
		alert("An error has occurred.");
	});
}

function renderpost(postid){
	getpost(postid);
	alert(HEADER + " " + TEXT);
}

renderpost("../posts/test.json");