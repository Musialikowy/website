let jsondata = 0;

function getpost(id){
  $.getJSON("../posts/test.json", function(data){
    console.log(jsondata.header);
    console.log(jsondata.text);
  }).fail(function(){
    alert("An error has occurred.");
  });
}

function renderpost(postid){
  getpost(postid);
}