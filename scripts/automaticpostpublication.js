function renderlink(){
	$.getJSON("../posts.json", function(data){
		alert(data.test);
	}).fail(function(){
		alert("Wystąpił nieznany błąd.");
	});
}

renderlink();