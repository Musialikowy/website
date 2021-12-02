function getpost(id){
	$.getJSON(id, function(data){
		alert(data.header);
	}).fail(function(){
		alert("An error has occurred.");
	});
}

function renderpost(postid){
	getpost(postid);
}

renderpost("../posts/test.json");