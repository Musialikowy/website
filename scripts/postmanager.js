function renderpost(postid){
	$.getJSON(postid, function(data){
		alert(data.title + " " + data.header + " " + data.text);
	}).fail(function(){
		alert("Wystąpił nieznany błąd.");
	});
}

renderpost("../posts/test.json");