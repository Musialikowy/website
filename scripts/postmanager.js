function getpost(id){
	if(id===1)
	{
		$.getJSON("../posts/test.json", function(data){
			alert(data.header);
		}).fail(function(){
			alert("An error has occurred.");
		});
	}
}

function renderpost(postid){
	getpost(1);
}

renderpost(1);