function renderpost(postid){
	$.getJSON(postid, function(data){
		alert(data.text + " " + data.header);
	}).fail(function(){
		alert("An error has occurred.");
	});
}

renderpost("../posts/test.json");