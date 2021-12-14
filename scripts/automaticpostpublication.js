function renderlink(){
	$.getJSON("../posts/posts.json", function(data){
	}).fail(function(){
		alert("Wystąpił nieznany błąd.");
	});
}

renderlink();