function renderlink(){
	$.getJSON("../posts/posts.json", function(data){
		alert(data.test.location);
	}).fail(function(){
		alert("Wystąpił nieznany błąd.");
	});
}

renderlink();