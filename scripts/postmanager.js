function renderpost(postid){
	$.getJSON(postid, function(data){
		alert(data.description + " " + data.descriptionimage + " " + data.title + " " + data.htmlcode);
	}).fail(function(){
		alert("Wystąpił nieznany błąd.");
	});
}

renderpost("../posts/test.json");