function renderpost(postid){
	$.getJSON(postid, function(data){
		$("#postheader").text(data.header);
	}).fail(function(){
		alert("Wystąpił nieznany błąd.");
	});
}

renderpost("../posts/test.json");