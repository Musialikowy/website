function renderpost(postid){
	$.getJSON(postid, function(data){
		alert(data.title + " " + data.header + " " + data.text);
	}).fail(function(){
		alert("An error has occurred.");
	});
}

renderpost("../posts/test.json");