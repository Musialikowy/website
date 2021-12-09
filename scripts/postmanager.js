function renderpost(postid){
	$.getJSON(postid, function(data){
		$("title").text(data.title);
		$(".postheader").text(data.header);
		$(".code").text(data.htmlcode);
	}).fail(function(){
		alert("Wystąpił nieznany błąd.");
	});
}

renderpost("../posts/test.json");